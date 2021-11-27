import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Service from "./Component/Service/Service";
import Doctors from './Component/Doctors/Doctors';
import Contact from './Component/Contact/Contact';
import Footer from "./Component/Footer/Footer";
import NotFound from "./Component/NotFound/NotFound";
import ServiceDetails from "./Component/ServiceDetails/ServiceDetails";
import { createContext, useState } from "react";
import Login from './Component/Login/Login';
import PrivateRoute from "./Component/Login/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router >
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
