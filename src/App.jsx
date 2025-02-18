import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Loginpage from './pages/Loginpage';
import SignupPage from './pages/SignupPage';
import { Landing } from './pages/Landing';
import axios from 'axios'
function App() {
  console.log("inside app");


  useEffect(() => {
    async function fetchData() {
      try {
       const response = await axios.post("https://backend.kharchi.workers.dev/auth/signup",{
        username:"abc",password:"123"
       })
       console.log(response.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
    
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signin' element={<Loginpage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
