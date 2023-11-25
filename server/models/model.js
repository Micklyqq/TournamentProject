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
})

const Tournament = sequelize.define('tournament',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true, allowNull:false},
    logo:{type:DataTypes.STRING,allowNull: false},
    description:{type:DataTypes.TEXT,allowNull:false},
    date:{type:DataTypes.DATE,allowNull:false},
    prize:{type:DataTypes.STRING,defaultValue:0},
    size:{type:DataTypes.INTEGER,allowNull:false}
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


const Match = sequelize.define('match',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    tournament_id:{type:DataTypes.INTEGER,allowNull:false},
    time:{type:DataTypes.TIME},
    date:{type:DataTypes.DATE},
    result:{type:DataTypes.INTEGER},
})
const UserRole = sequelize.define('user_role',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const TournamentTeam = sequelize.define('tournament_team',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})



Team.hasMany(User);
User.belongsTo(Team);

User.belongsToMany(Role,{through:UserRole});
Role.belongsToMany(User,{through:UserRole});

Tournament.belongsToMany(Team,{through:TournamentTeam});
Team.belongsToMany(Tournament,{through:TournamentTeam});

Tournament.hasMany(Match);
Match.belongsTo(Tournament);

Game.hasMany(Tournament);
Tournament.belongsTo(Game);

module.exports={
    User,Team,UserRole,Tournament,Role,Game,Match
}

