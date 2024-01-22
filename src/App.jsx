import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomeServices from './utils/HomeServices';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import DashboardCards from './utils/DashboardCards';
import Jobcard from './components/Jobcard';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Landing/> } />
          <Route path='/signup' element={ <Signup/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/navbar' element={ <Navbar/> } />
          <Route path='/home' element={ <Home/> } />
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/jobcard' element={ <Jobcard/> } /> 


          {/* Utils */}
          <Route path='/utilService' element={ <HomeServices/> } />
          <Route path='/footer' element={ <Footer/> } />
          <Route path='/dashboardcards' element={ <DashboardCards/> } />
        </Routes>
      </Router>

      <ToastContainer position="top-center"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick={ false }
        rtl={ false }
        draggable={ false }
        pauseOnFocusLoss
        pauseOnHover={ false }
        theme="light"
      />
    </div>
  );
}

export default App;
