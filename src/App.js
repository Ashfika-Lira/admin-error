import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Pages/Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Explore from './Pages/Explore/Explore';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import BuyNow from './Pages/BuyNow/BuyNow';


function App() {
  return (
    <div>
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
          <Route path="/purchase">
            <BuyNow />
          </Route>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
           
            <Route path="/login">
              <Login/>
          </Route>
            <Route path="/register">
              <Register></Register>
          </Route>
            <Route path="/explore">
              <Explore></Explore>
          </Route>
          <PrivateRoute path="/addProduct">
              <AddProduct/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
              <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path='/buynow'>
              <BuyNow></BuyNow>
            </PrivateRoute>
          <Route path="*">
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
