import "./App.css";

import AddUser from "./companents/AddUser";
import UserList from "./companents/UserList";

function App() {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="userBox">
        <AddUser />
        <UserList />
      </div>
    </div>
  );
}

export default App;
