import React from "react";
import "../css/mainpage.css";
import TournamentsList from "../components/TournamentsList";
import commandImage from "../img/NAVI.png";
import Authorization from "../components/Authorization";
import {TournamentStore} from "../store/TournamentStore";

function MainPage() {


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

        </div>
      </section>

     <Authorization/>
    </main>
  );
}

export default MainPage;
