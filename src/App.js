
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hotrecipes from './components/Hotrecipes';



function App() {
  const userName = 'Bahaa Sobh';
  
  return (
<div>
  
<Header userName={userName} />
  <Hotrecipes/>


    </div>
    
  );
}

export default App;
