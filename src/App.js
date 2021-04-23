import './App.css';
import Title from "./components/title";
import NavBar from "./components/navbar";
import Beers from "./components/beers";
import AddNewBeers from "./components/AddNewBeers";

function App() {

   const data = [
        ["Niksicko", "Crna Gora"],
        ["Jelen", "Srbija"],
        ["Schneider", "Nemacka"],
        ["Karlovacko", "Hrvatska"],
        ["Kariotsko", "Slovenija"],
        ["Karpatsko", "Karpati"]
    ]

  return (
    <main>
    <div className="w-screen h-screen background">
      <Title></Title>
      <NavBar></NavBar>
    </div>
    <div className="w-screen h-screen content">
        <AddNewBeers data={data}></AddNewBeers>
    </div>
    <div className="h-auto">
      <div id="search" className="w-screen h-screen content">
        <Beers data={data}></Beers>
      </div>
    </div>
    </main>
  );
}

export default App;
