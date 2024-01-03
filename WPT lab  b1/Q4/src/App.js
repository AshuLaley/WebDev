import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Listing from './pages/Listing';
import ResgisterationForm from './pages/ResgisterationForm';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/list" element={<Listing/>}></Route>
         <Route path="/form" element={<ResgisterationForm/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
