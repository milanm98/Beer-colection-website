import './App.css';
import Title from "./components/title";
import NavBar from "./components/navbar";
import Beers from "./components/beers";

function App() {
  return (
    <main>
    <div className="w-screen h-screen background">
      <Title></Title>
      <NavBar></NavBar>
    </div>
    <div className="h-auto">
      <div id="search" className="w-screen h-screen content">
        <Beers></Beers>
      </div>
    </div>
    </main>
  );
}

export default App;
