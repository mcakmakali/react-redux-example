import "./App.css";

import { BrowserRouter,  Switch, Route, Link } from "react-router-dom";

import AddUser from "./companents/AddUser";
import UserList from "./companents/UserList";
import UserProfile from "./companents/UserProfile";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="userBox">
        <AddUser />
        <UserList />
      </div>
    </div>
  );
};

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={UserProfile}/>
        </Switch>
      </BrowserRouter>
      );
}

export default App;
