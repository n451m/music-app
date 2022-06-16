
import Navbar from './components/Navbar'
import Home from './components/Home'
import ArtistCard from './components/ArtistCard';



function App() {
  return (
    <div className="App">
       <Navbar />
      <div className="content">
        <Home />
    </div>

     <div className="artistCard">
        <ArtistCard />
     </div>




    </div>
  );
}

export default App;
