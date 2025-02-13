import { Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/SignupPage'
import { Landing } from './pages/Landing'



function App() {
  console.log("inside app")
  return (


    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signin' element={<Loginpage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  )


}

export default App
