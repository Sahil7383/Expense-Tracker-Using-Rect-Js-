import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import ExpensePage from "./pages/ExpensePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact>
          <HomePage />
        </Route> */}
        {authCtx.isLoggedIn && (
          <Route path="/expense-tracker" exact>
            <ExpensePage />
          </Route>
        )}

        {!authCtx.isLoggedIn && (
          <Route path="/">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
