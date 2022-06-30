import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BestSellers from './pages/Home/BestSellers';
import CuratedPages from './pages/Home/CuratedPages';
import Earrings from './pages/Home/earring/Earrings';
import Home from './pages/Home/Home';
import Mens from './pages/Home/mens/Mens';
import NewArrivals from './pages/Home/NewArrivals';
import Rings from './pages/Home/rings/Rings';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/NavBar';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<BestSellers />}></Route>
          <Route path='arrivals' element={<NewArrivals />}></Route>
          <Route path='curated' element={<CuratedPages />}></Route>
        </Route>



        <Route path='rings' element={<Rings />}></Route>
        <Route path='earrings' element={<Earrings />}></Route>
        <Route path='mens' element={<Mens />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
