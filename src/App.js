import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {
  return (
    <div className="App">
      <Routes>


        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
