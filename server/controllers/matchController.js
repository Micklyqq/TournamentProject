
const ApiError = require("../error/ApiError")
const {Match, Game, MatchTeam, Team, Tournament, TournamentTeam} = require("../models/model");
const sequelize = require("sequelize");
const {where} = require("sequelize");
class MatchController{

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    createTournamentBracket = async (tournamentId, teams,grid="start",round=0) => {
        const shuffledTeams = this.shuffleArray([...teams]);
        const matches = [];

        try {
            if(grid==="start"){
                for (let i = 0; i < shuffledTeams.length - 1; i += 2) {
                    const team1Id = shuffledTeams[i].id;
                    const team2Id = shuffledTeams[i + 1].id;

                    const match = await Match.create({ tournamentId: tournamentId,grid:"startBracket"});
                    await MatchTeam.create({ matchId: match.id, teamId: team1Id });
                    await MatchTeam.create({ matchId: match.id, teamId: team2Id});
                    matches.push(match);
            }
            }
            else if(grid==="winners"){
                for (let i = 0; i < shuffledTeams.length - 1; i += 2) {
                    const team1Id = shuffledTeams[i];
                    const team2Id = shuffledTeams[i + 1];

                    const match = await Match.create({ tournamentId: tournamentId,grid:"winnerBracket",round});
                    await MatchTeam.create({ matchId: match.id, teamId: team1Id });
                    await MatchTeam.create({ matchId: match.id, teamId: team2Id});
                    matches.push(match);
            }
            }
            else if(grid==="losers"){
                for (let i = 0; i < shuffledTeams.length - 1; i += 2) {
                    const team1Id = shuffledTeams[i];
                    const team2Id = shuffledTeams[i + 1];

                    const match = await Match.create({ tournamentId: tournamentId,grid:"loserBracket",round});
                    await MatchTeam.create({ matchId: match.id, teamId: team1Id });
                    await MatchTeam.create({ matchId: match.id, teamId: team2Id});
                    matches.push(match);
                }


            }
            else if(grid==="final") {

                    const team1Id = teams[0];
                    const team2Id = teams[1];

                    const match = await Match.create({tournamentId: tournamentId, grid: "final", round});
                    await MatchTeam.create({matchId: match.id, teamId: team1Id});
                    await MatchTeam.create({matchId: match.id, teamId: team2Id});
                    matches.push(match);

            }
            return matches;
        } catch (error) {
            throw new Error(`Ошибка при создании турнирной сетки: ${error.message}`);
        }
    };

    checkAndHandleNextRound= async(req,res) => {
        try {
            const {tournamentId} = req.params;
            const tournament = await Tournament.findOne({where: {id: tournamentId}});
            const matches = await Match.findAll({where: {tournamentId}});
            const completedMatches = matches.filter((match) => match.winnerTeamId !== null && match.grid === "startBracket");
            if (completedMatches.length === (tournament.size / 2)) {
                const matches = await Match.findAll({
                    where: {tournamentId},
                    include: [
                        {
                            model: Team,
                            attributes: ['id'],
                            through: {attributes: []},
                            as: 'teams',
                        },
                    ],
                });

                const winners = [];
                const losers = [];

                matches.forEach((match) => {
                    if (match.winnerTeamId) {
                        winners.push(match.winnerTeamId);
                        losers.push(match.teams.find((team) => team.id !== match.winnerTeamId).id);
                    }
                });


                await Match.update({grid: "startBracketEnd"}, {
                    where: {
                        tournamentId,
                        grid: "startBracket"
                    }
                }).catch(error => console.error('Update error:', error));
                const winnerBracket = await this.createTournamentBracket(tournamentId, winners, "winners",1);
                const loserBracket = await this.createTournamentBracket(tournamentId, losers, "losers",1);
                return res.json([winnerBracket, loserBracket]);
            }
            else{
                const sortedMatches = matches.sort((a, b) => a.round - b.round);

                const sortLosersLastRound = sortedMatches.filter((match) => match.grid === "loserBracket")
                const findLosersLastRound=  sortLosersLastRound[sortLosersLastRound.length-1].round

                const sortWinnersLastRound = sortedMatches.filter((match) => match.grid === "winnerBracket")
                const findWinnersLastRound =sortWinnersLastRound[sortWinnersLastRound.length-1].round

                const winnerCurrentRound = matches.filter((match) => match.grid === "winnerBracket"&&match.round===findWinnersLastRound);
                const winnerCompleted = matches.filter((match) => match.winnerTeamId !== null && match.grid === "winnerBracket"&&match.round===findWinnersLastRound);

                const loserCurrentRound = matches.filter((match) => match.grid === "loserBracket"&&match.round===findLosersLastRound);
                const loserCompleted = matches.filter((match) => match.winnerTeamId !== null && match.grid === "loserBracket"&&match.round===findLosersLastRound);

                const finalRound = matches.filter((match) => match.grid === "final");
                let teamMatch = [];
                let firstFinalTeam = null;
                let secondFinalTeam = null;
                let firstFinalTeamWins = 0;
                let secondFinalTeamWins = 0;
                if(finalRound.length>0){
                   teamMatch = await MatchTeam.findAll({where:{matchId:finalRound[0].id}});
                    firstFinalTeam = teamMatch[0].teamId;
                    secondFinalTeam = teamMatch[1].teamId;
                    finalRound.forEach((match)=>{
                        if(match.winnerTeamId===firstFinalTeam){
                            firstFinalTeamWins++;
                        }
                        if(match.winnerTeamId===secondFinalTeam){
                            secondFinalTeamWins++;
                        }
                    })


                }

                let winnerBracket = [];
                let loserBracket = [];
                let finalBracket = [];
                if(winnerCurrentRound.length===winnerCompleted.length&&winnerCompleted.length>1&&finalRound.length === 0){
                    const winners =[];
                    winnerCompleted.forEach((winner)=>{
                        winners.push(winner.winnerTeamId);
                    })
                   winnerBracket = await this.createTournamentBracket(tournamentId, winners, "winners",findWinnersLastRound+1);
                }

                if(loserCurrentRound.length===loserCompleted.length&&loserCompleted.length>1&&finalRound.length === 0){
                    const losers =[];
                    loserCompleted.forEach((loser)=>{
                        losers.push(loser.winnerTeamId);
                    })
                    loserBracket = await this.createTournamentBracket(tournamentId, losers, "losers",findLosersLastRound+1);
                }

                if(winnerCurrentRound.length===winnerCompleted.length&&winnerCompleted.length===1&&loserCurrentRound.length===loserCompleted.length&&loserCompleted.length===1&&finalRound.length < 3&&firstFinalTeamWins<2&&secondFinalTeamWins<2){
                    const final = [winnerCompleted[0].winnerTeamId,loserCompleted[0].winnerTeamId];
                     finalBracket = await this.createTournamentBracket(tournamentId, final, "final",1);
                }

                if(firstFinalTeamWins===2&&tournament.teamId===null){
                    await Tournament.update({teamId:firstFinalTeam},{where:{id:tournamentId}});
                }
                if(secondFinalTeamWins===2&&tournament.teamId===null){
                    await Tournament.update({teamId:secondFinalTeam},{where:{id:tournamentId}});
                }


                return res.json({winnerBracket,loserBracket,finalBracket});


            }

        }
        catch (e) {
            res.json({message:e})
        }

    }




    async updateResult(req, res) {
        try {
            const { matchId } = req.params;
            const { winnerTeamId } = req.body;
            const match = await Match.findOne({
                where: { id: matchId },
                include: [
                    {
                        model: Team,
                        attributes: ['id', 'name', 'logo'],
                        through: { attributes: [] },
                        as: 'teams',
                    },
                ],
            });

            if (!match) {
                return res.json({ message: "Матч не найден!" });
            }




            // Проверяем, что winnerTeamId не является undefined
            if (typeof winnerTeamId === 'undefined') {
                return res.status(400).json({ error: 'winnerTeamId is required' });
            }

            // Обновляем winnerTeamId в матче
            const updatedMatch = await Match.update({ winnerTeamId }, {
                where: { id: matchId },
            });


            return res.json(updatedMatch);
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ error: error.message });
        }
    }


    create = async (req, res) => {
        const { tournamentId, teams } = req.body;

        try {
            const createdMatches = await this.createTournamentBracket(tournamentId, teams,"start");

            return res.json(createdMatches);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };


    async getAllMatchesForTournament(req,res) {
        try {
            const {tournamentId} = req.params;
            const matches = await Match.findAll({
                where: { tournamentId },
                include: [
                    {
                        model: Team,
                        attributes: ['id', 'name', 'logo'],
                        through: { attributes: [] },
                        as: 'teams',
                    },
                ],
            });

            // Форматирование данных для вывода
            const formattedMatches= matches.map((match) => ({
                id: match.id,
                grid:match.grid,
                winnerTeamId: match.winnerTeamId,
                teams: match.teams.map((team) => ({
                    id: team.id,
                    name: team.name,
                    logo: team.logo,
                })),
            }));
            return res.json(formattedMatches);
        } catch (error) {
            throw new Error(`Ошибка при получении матчей для турнира: ${error.message}`);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;

            const match = await Match.findOne({
                where: { id },
                include: [
                    {
                        model: MatchTeam,
                        attributes: [], // Если вам не нужны все атрибуты из MatchTeam
                        include: [
                            {
                                model: Team,
                                attributes: ['id', 'name', 'logo'], // Указать нужные атрибуты команды
                            },
                        ],
                    },
                ],
            });

            return res.json(match);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }






}

module.exports = new MatchController();