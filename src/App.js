
import './App.css';
import Navbar from './Container/Body/Navbar';
import {Routes, BrowserRouter,Route} from 'react-router-dom'
import Home from './Container/Pages/Home';
import News from './Container/Body/News';
import Cryptocurrencies from './Container/Body/Cryptocurrency';
import Details from'./Container/Body/Details';
import Exchanges from './Container/Body/Exchange';
import Login from './Container/Login/Signup';
import Signin from './Container/Login/Signin';
import { UserAuthContextProvider } from './Container/context/AuthContext';
import ProtectedRoute from './Container/Login/ProtectedRoute';
import Footer from './Container/Body/Footer';

import Buycrypto from './Container/Body/BuyCrypto';
import QuestionBox from './Container/Body/QuestionBox';
import Quiz from './Container/Body/Quiz';
import Realquiz from './Container/RealcashQuiz/Realquiz';
import QuizIntruction from './Container/RealcashQuiz/QuizIntruction';
import Test from './Container/RealcashQuiz/Test';






function App() {
  return (
    <div className="App">
        <UserAuthContextProvider>
          
    <BrowserRouter>
   
  <Navbar />
    <Routes>
      <Route path='/login' exact element={<Login/>} />
      <Route path='/sign-up' exact element={<Signin/>} />
      <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/news" exact  element={<ProtectedRoute><News /></ProtectedRoute>} />
      <Route path="/crypto" exact element={<ProtectedRoute><Cryptocurrencies /> </ProtectedRoute>} />
      <Route path="/quiz" exact element={<ProtectedRoute><Realquiz /></ProtectedRoute>} />
      <Route path="/play/instructions" exact element={<ProtectedRoute><QuizIntruction /></ProtectedRoute>} />
      <Route path="/play/quiz" exact element={<ProtectedRoute><Test /></ProtectedRoute>} />
      <Route path="/buy" exact element={<ProtectedRoute><Buycrypto/></ProtectedRoute>} />
      <Route path="/exchange" exact element={<ProtectedRoute><Exchanges/> </ProtectedRoute>} />
      <Route path='/crypto/:coinId' exact element = {<ProtectedRoute><Details /></ProtectedRoute>} />
    </Routes>
  <Footer />
    </BrowserRouter>
  
    </UserAuthContextProvider>
    </div>
  );
}

export default App;
