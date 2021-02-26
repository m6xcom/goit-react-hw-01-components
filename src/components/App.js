import "./App.css";
import Profile from "./Profile/Profile";
import user from "../db/user.json";

function App() {
  return (
    <div className="App">
      <Profile obj={user} />
    </div>
  );
}

export default App;
