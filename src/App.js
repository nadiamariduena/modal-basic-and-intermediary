import ModalBasic from "./ModalBasic";
import Navbar from "./Navbar";
import "./scss/main.scss";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <main className="page">
        <div className="app">
          <ModalBasic />
        </div>
      </main>
    </>
  );
}

export default App;
