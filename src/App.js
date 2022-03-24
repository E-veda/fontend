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
import About from './component/About/About';
import { SpeechProvider } from '@speechly/react-client'
function App(props) {
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWE1NWJlYTExYjg3NjkwN2JkYTI5YzJjNzJiZjgxZDM1NzNjYjQxMzdhMGRmMWY4MzBlZmFlZDc3NzEzZDQyMjkyZDFmNjJhOWNmZTNkODQ0MmI1ZDIzYjliOWQ4NDYzNmIyNTIzZTExOTljMzY2NGQ4OTJlZjJmNzEzODQ0ZCIsInNjb3BlIjoiY29uZmlnIiwiaXNzIjoiaHR0cHM6Ly9hcGkuc3BlZWNobHkuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLnNwZWVjaGx5LmNvbS8ifQ.lr_NcXL9sY6M-q17VOa4sjI4Q55s-OoE5q3tZFwknTw
  return (
    <SpeechProvider appId="582b1133-7db4-4525-af29-63eebb1075f2" language="en-US">
    <Router>
      <Routes >
        <Route path="/hospital/:place_id" element={<HospitalPage/>}/>
        <Route path="/hospitals/" element={<Root />}/>
        <Route path="/hospitals/:city" element={<Root {...props}/>}/>
        <Route path="/"  element={<Home/>}/>
        <Route path="/About"  element={<About/>}/>
        </Routes >
    </Router>
    </SpeechProvider>
  )
}

export default App

