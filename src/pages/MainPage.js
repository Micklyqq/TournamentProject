import React from "react";
import "../css/mainpage.css";
import { useSelector } from "react-redux";
import TournamentsList from "../components/TournamentsList";
import commandImage from "../img/NAVI.png";

function MainPage() {
  const tournaments = useSelector((state) => state.tournaments);
  return (
    <main>
      <section className="tier_commands">
        <div className="top">
          <h2>Топ 10 команд</h2>
        </div>
        <div className="top1">
          <h2>1</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Natuce Vincere</p>
            <p>Rating: 99999</p>
          </div>
        </div>
        <div className="top2">
          <h2>2</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>OG</p>
            <p>Rating: 10300</p>
          </div>
        </div>
        <div className="top3">
          <h2>3</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Team Liquid</p>
            <p>Rating: 10200</p>
          </div>
        </div>
        <div className="top4">
          <h2>4</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Team Spirit</p>
            <p>Rating: 10000</p>
          </div>
        </div>
        <div className="top5">
          <h2>5</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Tunda Esports</p>
            <p>Rating: 9500</p>
          </div>
        </div>
        <div className="top6">
          <h2>6</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Team Aster</p>
            <p>Rating: 9334</p>
          </div>
        </div>
        <div className="top7">
          <h2>7</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Quincy Crew</p>
            <p>Rating: 9228</p>
          </div>
        </div>
        <div className="top8">
          <h2>8</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Team Secret</p>
            <p>Rating: 9000</p>
          </div>
        </div>
        <div className="top9">
          <h2>9</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Nigma Galaxy</p>
            <p>Rating: 8334</p>
          </div>
        </div>
        <div className="top10">
          <h2>10</h2>
          <img src={commandImage} alt="" />
          <div>
            <p>Fnatic</p>
            <p>Rating: 8000</p>
          </div>
        </div>
      </section>
      <section className="tournament_actual">
        <div className="header_actual">
          <h1>Актуальные турниры</h1>
        </div>
        <div className="tournamentListMainPage">
          {tournaments && tournaments.length > 0 && (
            <TournamentsList tournaments={tournaments} maxDisplay={6} />
          )}
        </div>
      </section>
      <section className="authorization">
        <form action="#" method="post" encType="multipart/form-data">
          <div className="header_auth">
            <h2>Авторизация</h2>
          </div>

          <input
            type="email"
            name="usermail"
            placeholder="E-mail или имя пользователя"
          />
          <input type="password" name="userpass" placeholder="Пароль" />
          <div className="remember_auth">
            <input
              checked
              type="checkbox"
              name="remember"
              className="remember_user"
            />
            <p>Запомнить меня</p>
          </div>
          <button>Войти</button>
          <div className="remember_register">
            <a href="#">Забыли пароль</a>
            <div></div>
            <a href="#">Зарегистрироваться</a>
          </div>
        </form>
      </section>
    </main>
  );
}

export default MainPage;
