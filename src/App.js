import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example1 from "./components/Example1";

import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="page">
        <div className="app">
          <Switch>
            {" "}
            <Route path="/" exact component={Home} />
            <Route path="/example1" exact component={Example1} />
            <Route path="/*" component={Home} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
