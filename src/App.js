import React, { useEffect, useState } from 'react'
import Root from './Root';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import HospitalPage from './component/HospitalPage/HospitalPage';
function App(props) {

  return (
    <Router>
        <Routes >
        <Route path="/hospital/:place_id" element={<HospitalPage/>}/>
        <Route path="/hospitals/" element={<Root />}/>
          <Route path="/hospitals/:city" element={<Root {...props}/>}/>
          <Route path="/"  element={<Home/>}/>
        </Routes >
    </Router>

  )
}

export default App

