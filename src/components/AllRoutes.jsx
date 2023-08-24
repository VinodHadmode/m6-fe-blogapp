import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './Navbar'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Blogs from '../pages/Blogs'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='*' element={<h2>Page not found!!</h2>}/>
    </Routes>
  )
}

export default AllRoutes
