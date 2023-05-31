import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CreatePost from './components/CreatePost'
import DeletePost  from './components/DeletePost'
import Post from './components/Post'
import EditPost from './components/EditPost'
import Navbar from './components/Navbar/Navbar'




function App() {
  

  return (
    <div className='App'>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/create' element={<CreatePost />} />
        <Route path='/delete/:id' element={<DeletePost />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
