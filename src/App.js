import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
  return (
   <Box width ="400px">
   < Navbar />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/excercise/:id" element={<ExcerciseDetail />} />
    </Routes>
   </Box>
  )
}

export default App