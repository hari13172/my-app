import React from 'react'
import Header from './Component/Head/Header'
import './App.css'
import Home from './Component/Hero/Home'
import Features from './Component/Features/Features'
import Portfolio from './Component/Hero/Portfolio/Portfolio'
import { Resume }  from './Component/Resume/Resume'
import  Testionial from './Component/Testionial/Testionial'
import Blog from './Component/Blog/Blog'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Features />
    <Portfolio />
    <Resume />
    <Testionial />
    <Blog />
    <Footer />
    </>
  )
}

export default App