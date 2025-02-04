import { Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/SignupPage'



function App() {
  return (


    <Routes>
      <Route path='/' component={<Loginpage />} />
      <Route path='/signup' component={<SignupPage />} />
    </Routes>
  )


}

export default App
