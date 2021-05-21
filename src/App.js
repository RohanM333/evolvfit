import './App.css';
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
import Error from './Pages/Error/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/error">
              <Error />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
