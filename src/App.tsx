import Composition from "./examples/Composition";
import Inheritance from "./examples/Inheritance";

function App() {
  return (
    <>
      <header className="header">
        <h1>React Composition Pattern example</h1>
      </header>
      <main className="main__container">
        {/* <Inheritance /> */}
        <Composition />
      </main>
    </>
  );
}

export default App;
