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
import Booking from './component/Client/Booking/Booking';
import BookingList from './component/Client/BookingList/BookingList';
import Review from './component/Client/Review/Review';
import OrderList from './component/Admin/OrderList/OrderList';
import AddService from './component/Admin/AddService/AddService';
import MakeAdmin from './component/Admin/MakeAdmin/MakeAdmin';
import ManageService from './component/Admin/ManageService/ManageService';

export const emailContext = createContext();
export const adminContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]  = useState(null)
  const [admin, setAdmin]  = useState([])
  return (
   
    <emailContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <adminContext.Provider value={[admin, setAdmin]}>
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
              <PrivateRoute path='/booking/:e'>
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/booking'>
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/review'>
                <Review></Review>
              </PrivateRoute>
              <PrivateRoute path='/admin'>
                <OrderList></OrderList>
              </PrivateRoute>
              <PrivateRoute path='/addservice'>
                <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute path='/makeadmin'>
                <MakeAdmin></MakeAdmin>
              </PrivateRoute>
              <PrivateRoute path='/manage'>
                <ManageService></ManageService>
              </PrivateRoute>
              <Router path='/bookinglist'>
                <BookingList></BookingList>
              </Router>
              
            </Switch>
          </Router>
       </adminContext.Provider>
    </emailContext.Provider>
   
  );
}

export default App;
