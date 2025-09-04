import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WhyHireMe from './components/WhyHireMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotAvailable from './components/NotAvailable'
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <WhyHireMe />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/not-available" element={<NotAvailable />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
