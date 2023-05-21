import React, { useState } from 'react'
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
    <Banner />
    
    <SearchExercise 
    setExercises={setExercises}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
     />
    <Exercises
    setExercises={setExercises}
    bodyPart={bodyPart}
    exercises={exercises}
    //setBodyPart={setBodyPart} 
    
    />

    </Box>
  )
}

export default Home