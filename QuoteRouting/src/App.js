import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import AllQuote from "./Pages/AllQuote";
import AddQuote from "./Pages/AddQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./Pages/NotFound";

function App() {
  const abdul = useRouteMatch();
  console.log(abdul);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes">
            <AllQuote />
          </Redirect>
        </Route>

        <Route path="/quotes" exact>
          <AllQuote />
        </Route>

        <Route path="/quotes/:id">
          <QuoteDetail />
        </Route>

        <Route path="/addquotes">
          <AddQuote />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
