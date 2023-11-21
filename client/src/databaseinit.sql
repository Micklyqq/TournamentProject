CREATE TABLE roles(
	id SERIAL PRIMARY KEY,
	role_name VARCHAR(20)
);

CREATE TABLE teams(
	id SERIAL PRIMARY KEY,
	team_name VARCHAR(100),
	logo TEXT,
	rating INTEGER,
	description VARCHAR(2000)
);
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(30),
	userpass VARCHAR(30),
	email VARCHAR(100),
	role_id INT REFERENCES roles(id),
	team_id INT REFERENCES teams(id)
);

CREATE TABLE user_roles (
    user_id INT REFERENCES users(id),
    role_id INT REFERENCES roles(id),
    PRIMARY KEY (user_id, role_id)
);

CREATE TABLE games(
	id SERIAL PRIMARY KEY,
	game_name VARCHAR(100)
);

CREATE TABLE tournaments(
	id SERIAL PRIMARY KEY,
	name VARCHAR(130),
	description VARCHAR(3000),
	game INT REFERENCES games(id),
	logo TEXT,
	tournament_date TIMESTAMP,
	prize MONEY
);

CREATE TABLE team_list(
	tournament_id INT REFERENCES tournaments(id),
	team_id INT REFERENCES teams(id),
	max_size INTEGER
);

CREATE TABLE matches(
	id SERIAL PRIMARY KEY,
	tournament_id INT REFERENCES tournaments(id),
	first_command INTEGER,
	second_command INTEGER,
	match_date TIMESTAMP,
	match_result BOOLEAN
);