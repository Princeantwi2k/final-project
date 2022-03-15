
import './App.css';
import Navbar from './Container/Body/Navbar';
import {Routes, BrowserRouter,Route, Link} from 'react-router-dom'
import Home from './Container/Pages/Home';
import Footer from './Container/Body/Footer';
import News from './Container/Body/News';
import Cryptocurrencies from './Container/Body/Cryptocurrency';
import Cryptodetails from './Container/Body/CryptoDetails';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/news"  element={<News />} />
      <Route path="/cryptocurrency"  element={<Cryptocurrencies />} />
      <Route path="/cryptocurrency:coinId"  element={<Cryptodetails />} />
    </Routes>
    </BrowserRouter>
  
   
    </div>
  );
}

export default App;
