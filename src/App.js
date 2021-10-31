// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter

} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import ManageAllOrders from './Component/ManageAllBooking/ManageAllOrders';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import AddBooking from './Component/AddBooking/AddBooking';
import MyOrders from './Component/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/ManageAllOrders/:bookingID">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/PlaceOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/AddBooking">
              <AddBooking></AddBooking>
            </PrivateRoute>
            <Route path="/MyOrder">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
