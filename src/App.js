import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='page-container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
