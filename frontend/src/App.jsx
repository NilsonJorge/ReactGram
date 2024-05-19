import { useState } from 'react'
import './App.css'

//Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Hooks
import { useAuth } from './hooks/useAuth'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import EditProfile from './pages/EditProfile/EditProfile'
import Profile from './pages/Profile/Profile'
import Photo from './pages/Photo/Photo'
import Search from './pages/Search/Search'


function App() {
  const {auth, loading} = useAuth()

  if(loading){
    return <p>Carregando...</p>
  }
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/ReactGram/' element={auth ? <Home/> : <Navigate to='/login'/>}/>
            <Route path='/ReactGram/profile' element={auth ? <EditProfile/> : <Navigate to='/login'/>}/>
            <Route path='/ReactGram/users/:id' element={auth ? <Profile/> : <Navigate to='/login'/>}/>
            <Route path='/ReactGram/login' element={!auth ?<Login/>: <Navigate to ='/'/>}/>
            <Route path='/ReactGram/register' element={!auth ?<Register/>: <Navigate to ='/'/>}/>
            <Route path='/ReactGram/search' element={auth ? <Search/> : <Navigate to='/login'/>}/>
            <Route path='/ReactGram/photos/:id' element={auth ? <Photo/> : <Navigate to='/login'/>}/>

          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
