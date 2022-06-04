import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BestSellers from './pages/Home/BestSellers';
import Closet from './pages/Home/Closet';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<BestSellers />}></Route>
        </Route>




        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
