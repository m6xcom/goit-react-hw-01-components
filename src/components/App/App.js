import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import "./App.css";
import user from "../../db/user.json";
import statsData from "../../db/statistical-data.json";
import friends from "../../db/friends.json";
import transactions from "../../db/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile obj={user} />
      <Statistics stats={statsData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
