import React, { useEffect, useState } from 'react'
import Root from './Root';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
function App(props) {

  return (
    <Router>
        <Routes >
        <Route path="/hospital/" element={<Root />}/>
          <Route path="/hospital/:city" element={<Root {...props}/>}/>
          <Route path="/"  element={<Home/>}/>
        </Routes >
    </Router>

  )
}

export default App

