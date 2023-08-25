import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navbar';
import Carde from './Player';
import Carde2 from './Carde2';
import Carde3 from './Card3';
import Carde4 from './card4';
import arr from './Joueur';
import PlayerList from './PlayerList';



function App() {
  return (
    <div className="App">
    <Nave/>
   <PlayerList/>
  
   
    </div>
  );
}

export default App;
