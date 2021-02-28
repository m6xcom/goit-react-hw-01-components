import "./App.css";
import Profile from "./Profile/Profile";
import user from "../db/user.json";
import Statistics from "./Statistics/Statistics";
import statsData from "../db/statistical-data.json";
import FriendList from "./FriendList/FriendList";
import friends from "../db/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../db/transactions.json";

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
