import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const emailContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]  = useState(null)
  return (
   
    <emailContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path='booking'>
              
            </PrivateRoute>
          </Switch>
        </Router>
    </emailContext.Provider>
   
  );
}

export default App;
