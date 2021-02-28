import "./App.css";
import Profile from "./Profile/Profile";
import user from "../db/user.json";
import Statistics from "./Statistics/Statistics";
import statsData from "../db/statistical-data.json";
import FriendList from "./FriendList/FriendList";
import friends from "../db/friends.json";

function App() {
  return (
    <div className="App">
      <Profile obj={user} />
      <Statistics stats={statsData} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
