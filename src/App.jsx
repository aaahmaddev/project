import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/home'
import SignUp from '../src/pages/signup'
import SignIn from '../src/pages/signin'
import Vitals from '../src/pages/vitals'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/vitals' element={<Vitals/>}/>
      </Routes>
    </>
  )
}

export default App
