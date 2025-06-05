import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/home'
import SignUp from '../src/pages/signup'
import SignIn from '../src/pages/signin'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App
