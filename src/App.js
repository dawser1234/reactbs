import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navbar';
import Carde from './card';
import Carde2 from './Carde2';
import Carde3 from './Card3';
import Carde4 from './card4';



function App() {
  return (
    <div className="App">
    <Nave/>
    <div className='cart'>
    <Carde/>
    <Carde2/>
    <Carde3/>
    <Carde4/>
    </div>
   
    </div>
  );
}

export default App;
