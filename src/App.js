import ModalBasic from "./ModalBasic";
import Navbar from "./Navbar";
 

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
