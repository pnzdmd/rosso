import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import About from '../../Pages/About/About';
import Articles from '../../Pages/Articles/Articles';
import Brands from '../../Pages/Brands/Brands';
import Contacts from '../../Pages/Contacts/Contacts';
import Delivery from '../../Pages/Delivery/Delivery';
import Exchange from '../../Pages/Exchange/Exchange';
import Guarantees from '../../Pages/Guarantees/Guarantees';
import News from '../../Pages/News/News';
import Home from '../../Pages/Home/Home';


import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Navigation/>
       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/brands' element={<Brands/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
          <Route path='/exchange' element={<Exchange/>}/>
          <Route path='/guarantees' element={<Guarantees/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
