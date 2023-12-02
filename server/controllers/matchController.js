
const ApiError = require("../error/ApiError")
const {Match, Game, MatchTeam, Team} = require("../models/model");
class MatchController{

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    createTournamentBracket = async (tournamentId, teams) => {
        const shuffledTeams = this.shuffleArray([...teams]);
        const matches = [];

        try {
            for (let i = 0; i < shuffledTeams.length - 1; i += 2) {
                const team1Id = shuffledTeams[i].id;
                const team2Id = shuffledTeams[i + 1].id;

                const match = await Match.create({ tournamentId: tournamentId });
                await MatchTeam.create({ matchId: match.id, teamId: team1Id });
                await MatchTeam.create({ matchId: match.id, teamId: team2Id });
                matches.push(match);
            }

            return matches;
        } catch (error) {
            throw new Error(`Ошибка при создании турнирной сетки: ${error.message}`);
        }
    };




    create = async (req, res) => {
        const { tournamentId, teams } = req.body;

        try {
            const createdMatches = await this.createTournamentBracket(tournamentId, teams);

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

    async updateResult(req, res) {
        try {
            const { matchId } = req.params;
            const { winnerTeamId } = req.body;

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




}

module.exports = new MatchController();