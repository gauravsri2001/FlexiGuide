import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import {Box} from '@mui/material';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./web_pages/Home";
import ExerciseDetail from "./web_pages/ExerciseDetail";
import Footer from "./components/Footer";
const App = () =>{
  return(
    // making website responsive 
    <Box width= "400px" sx={{width:{xl: '1488px'}}} m="20px"> 
    <Navbar />

    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
    </BrowserRouter>

    

    
    </Box>

  )
};
export default App;