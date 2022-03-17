
import './App.css';
import Navbar from './Container/Body/Navbar';
import {Routes, BrowserRouter,Route} from 'react-router-dom'
import Home from './Container/Pages/Home';
import News from './Container/Body/News';
import Cryptocurrencies from './Container/Body/Cryptocurrency';
import Details from'./Container/Body/Details';






function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/news" exact  element={<News />} />
      <Route path="/crypto" exact element={<Cryptocurrencies />} />
      <Route path='/crypto/:coinId' exact element = {<Details />} />
    </Routes>
    </BrowserRouter>
  
   
    </div>
  );
}

export default App;
