import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example1 from "./components/Example1";
// Video  pexels-cottonbro-10678920.mp4

import Home from "./Home";
// import Navbar from "./Navbar";
const videoBg =
  "https://images.pexels.com/photos/10679086/pexels-photo-10679086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <main className="page">
        <div
          className="app"
          style={{
            backgroundImage: `url(${videoBg})`,
            objectFit: "cover",
          }}
        >
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
