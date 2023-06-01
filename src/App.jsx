import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NewNote from './components/NewNote'
import DeletePost  from './components/DeletePost'
import Post from './components/Post'
import Navbar from './components/Navbar/Navbar'
import PostList from './components/PostList'
import EditPostButton from './utils/EditPostButton'

function App() {

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/delete/:id' element={<DeletePost />} />
        <Route path='/post/:id' element={<PostList />} />
        <Route path='/edit-post/:id' element={<EditPostButton />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
