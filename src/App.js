import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Tier_commands from "./components/Tier_commands";
import "./css/mainpage.css";
import "./css/tournaments.css";
import "./css/commands.css";
import Tournaments_actual from "./components/Tournaments_actual";
import Authorization from "./components/Authorization";
import Search_tournaments from "./components/Search_tournaments";
import Tournament_block from "./components/Tournament_block";
import Profile from "./components/Profile";
import Search_commands from "./components/Search_commands";
import Command_block from "./components/Command_block";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <section class="commands_menu">
          <Search_commands />
          <div class="commands_list">
            <Command_block />
            <Command_block />
          </div>
        </section>
        <Profile />
      </main>
    </div>
  );
}

export default App;
