import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<LandingPage />}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
