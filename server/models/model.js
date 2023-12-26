const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userName:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,unique: true,allowNull:false},
    logo:{type:DataTypes.STRING},
})


const Team = sequelize.define('team',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true, allowNull:false},
    logo:{type:DataTypes.STRING,allowNull: false},
    description:{type:DataTypes.TEXT,allowNull:false},
    size:{type:DataTypes.INTEGER,defaultValue:5}
})

const Tournament = sequelize.define('tournament',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true, allowNull:false},
    logo:{type:DataTypes.STRING,allowNull: false},
    description:{type:DataTypes.TEXT,allowNull:false},
    date:{type:DataTypes.DATE,allowNull:false},
    prize:{type:DataTypes.STRING,defaultValue:0},
    size:{type:DataTypes.INTEGER,allowNull:false},
    status:{type:DataTypes.BOOLEAN,defaultValue: false}
})

const Role = sequelize.define('role',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})

const Game = sequelize.define('game',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    logo:{type:DataTypes.STRING,allowNull:false},
})


const Match = sequelize.define('match', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    winnerTeamId: { type: DataTypes.INTEGER, allowNull: true },
    grid:{type:DataTypes.STRING,allowNull:false},
    round:{type:DataTypes.INTEGER,defaultValue:0}
});

const MatchTeam = sequelize.define('match_team', {

});
const UserRole = sequelize.define('user_role',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const TournamentTeam = sequelize.define('tournament_team',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    status:{type:DataTypes.BOOLEAN,defaultValue:true}
})

const TeamNotification = sequelize.define('team_notification',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const TournamentNotification = sequelize.define('tournament_notification',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})



Team.hasMany(User);
User.belongsTo(Team);

User.belongsToMany(Role,{through:UserRole});
Role.belongsToMany(User,{through:UserRole});

Tournament.belongsToMany(Team,{through:TournamentTeam});
Team.belongsToMany(Tournament,{through:TournamentTeam});

Team.hasMany(Tournament);
Tournament.belongsTo(Team);

Tournament.hasMany(Match);
Match.belongsTo(Tournament);

Team.belongsToMany(Match, { through: MatchTeam, as: 'matches' });
Match.belongsToMany(Team, { through: MatchTeam, as: 'teams' });

Match.belongsTo(Team, { as: 'winnerTeam', foreignKey: 'winnerTeamId' });


Game.hasMany(Tournament);
Tournament.belongsTo(Game);

User.hasOne(Team);
Team.belongsTo(User);

User.hasOne(Tournament);
Tournament.belongsTo(User);

User.hasMany(TeamNotification);
TeamNotification.belongsTo(User);

Team.hasMany(TeamNotification);
TeamNotification.belongsTo(User);

Tournament.hasMany(TournamentNotification);
TournamentNotification.belongsTo(Tournament);

Team.hasMany(TournamentNotification);
TournamentNotification.belongsTo(Team);




module.exports={
    User,Team,UserRole,Tournament,Role,Game,Match,TeamNotification,TournamentNotification,TournamentTeam,MatchTeam
}

