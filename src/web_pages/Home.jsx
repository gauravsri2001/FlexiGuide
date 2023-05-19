import React from 'react'
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
    <Banner />
    
    <SearchExercise />
    <Exercises />

    </Box>
  )
}

export default Home