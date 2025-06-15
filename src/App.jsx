import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/home'
import SignUp from '../src/pages/signup'
import SignIn from '../src/pages/signin'
import Vitals from '../src/pages/vitals'
import Account from '../src/pages/account'
import MyTask from '../src/pages/mytask'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/vitals' element={<Vitals/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/mytask' element={<MyTask/>}/>
      </Routes>
    </>
  )
}

export default App
