import { Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/SignupPage'



function App() {
  return (


    <Routes>
      <Route path='/' element={<Loginpage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  )


}

export default App
