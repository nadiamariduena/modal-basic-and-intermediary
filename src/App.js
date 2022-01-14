import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Video  pexels-cottonbro-10678920.mp4

import Home from "./Home";
import Navbar from "./components/Navbar";

const videoBg =
  "https://images.pexels.com/photos/10679162/pexels-photo-10679162.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <main className="page">
        <div
          className="app"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${videoBg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Switch>
            {" "}
            <Route path="/" exact component={Home} />
            <Route path="/*" component={Home} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
