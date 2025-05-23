import React from 'react'
import Layout from './Components/Layout'
import HomeSection from './Components/HomeSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ApplicationForm from './Components/ApplicationForm'
import OnlineTest from './Components/OnlineTest'
import About from './Components/About'
import EmployeeBenefits from './Components/EmployeeBenefits'
import FormResponce from './Components/FormResponce'
import Footer from './Components/Footer'
import JobPositions from './Components/JobPositions'
import ExperienceForm from './Components/ExperienceForm'
import AptitudeLogin from './Components/AptitudeLogin'
const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route exact path='/' element={<HomeSection />} />
            <Route exact path='/onlinetest' element={<OnlineTest />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/emp-benefits' element={<EmployeeBenefits />} />
            <Route exact path='/join-us' element={<ApplicationForm />} />
            <Route exact path='/form-respones' element={<FormResponce />} />
            <Route path="/" element={<JobPositions />} />
            <Route path="/experience-form/:title/:details/:location" element={<ExperienceForm />} />
            <Route path="/user-aptitude-login" element={ <AptitudeLogin/> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>

  )
}

export default App