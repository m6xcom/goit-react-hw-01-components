import "./App.css";
import Profile from "./Profile/Profile";
import user from "../db/user.json";
import Statistics from "./Statistics/Statistics";
import statsData from "../db/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile obj={user} />
      <Statistics stats={statsData} title="Upload stats" />
    </div>
  );
}

export default App;
