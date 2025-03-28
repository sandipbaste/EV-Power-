import React from 'react'
import Layout from './Components/Layout'
import HomeSection from './Components/HomeSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ApplicationForm from './Components/ApplicationForm'
import OnlineTest from './OnlineTest'
import About from './Components/About'
const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter>
        <Layout/>
          <Routes>
            <Route exact path='/' element={<HomeSection/>}/>
            <Route exact path='/onlinetest' element={<OnlineTest/>}/>
            <Route exact path='/about' element={ <About/> } />
            <Route exact path='/join-us' element={<ApplicationForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>

  )
}

export default App