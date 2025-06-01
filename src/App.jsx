import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/home'
import SignUp from '../src/pages/signup'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </>
  )
}

export default App
