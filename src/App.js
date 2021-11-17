import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Register from './components/Register/Register';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import ExploreProducts from './components/ExploreProducts/ExploreProducts';
import Dashboard from './components/Dashboard/Dashboard';
import Pay from './components/Pay/Pay';
import UserReview from './components/UserReview/UserReview';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageProducts from './components/ManageProducts/ManageProducts';
import AdminRoute from './components/AdminRoute/AdminRoute';
import AdminAddNewProduct from './components/AdminAddNewSevic/AdminAddNewProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <ExploreProducts></ExploreProducts>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route>
            <AdminRoute path="/manage">
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path="/managePro">
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/addService">
              <AdminAddNewProduct></AdminAddNewProduct>
            </AdminRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/uReview">
              <UserReview></UserReview>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
