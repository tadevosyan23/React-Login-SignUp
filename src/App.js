//Styled Components
import {StyledContainer} from "./components/Styles";
// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./pages/Home";

import  {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import {connect} from "react-redux";


function App({checked}) {
  return (
      <Router>
      {checked &&
        <StyledContainer>
            <Switch>
                <BasicRoute path="/signup">
                    <Signup />
                </BasicRoute>
                <BasicRoute path="/login">
                    <Login />
                </BasicRoute>
                <AuthRoute path="/dashboard">
                    <Dashboard />
                </AuthRoute>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </StyledContainer>
      }
      </Router>
  );
}

const mapStateToProps = ({session}) => ({
    checked: session.checked
})

export default connect(mapStateToProps)(App);
