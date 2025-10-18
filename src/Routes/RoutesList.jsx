import React from 'react'
import { Route, Routes } from "react-router";
import LayOutWithHF from "../components/LayOutWithHF";
import Service from '../Pages/Service';
import Home from '../Pages/Home';
import About from '../Pages/About';
import TrainingPlans from '../Pages/TrainingPlans';
import Payments from '../Pages/Payments';
import Preloader from '../Pages/Preloader';
import TrainingPlans_2 from '../Pages/TrainingPlans_2';
export default function RoutesList() {
  return (
     <>
     {/* <Preloader imageSrc="/images/image.png" duration={2000} />  */}
      <Routes>
          <Route element={<LayOutWithHF/>}>
              <Route path='/' element={<Home/>}/>
              <Route path="/services" element={<Service />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/payments' element={<Payments/>}/>
              {/* <Route path='/plans' element={<TrainingPlans/>}/> */}
              <Route path='/plans2' element={<TrainingPlans_2/>}/>
          </Route>
      </Routes>
    </>
  )
}
