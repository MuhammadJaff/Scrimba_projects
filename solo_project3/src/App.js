import './App.scss';
import Header from './Header';
import Data from './Data';
import Cards from './Cards';

function App() {
  
  return (
    <div className="App">
      <Header/>
      {Data.map(item=><Cards {...item}/>)}
    </div>
  );
}

export default App;
