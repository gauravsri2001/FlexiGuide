// import React from 'react';
// import { Box, Pagination, Stack, Typography } from '@mui/material';

// import ExerciseCard from './ExerciseCard';

// const Exercises = ({exercises, setExercises, bodyPart}) => {
//   //console.log(exercises);
//   return (
//     <Box id='exercises'
//     sx={{mt: {lg: '110px'}}}
//     mt={'50px'}
//     p={'20px'}
//     >

//     <Typography variant='h3' mb='46px'>
//       Showing results
//     </Typography>

//     <Stack direction={'row'}
//     sx={{gap:{lg:'110px', xs: '50px'}}}
//     flexWrap={'wrap'}
//     justifyContent={'center'}>
//     {exercises.map((exercise, index) => (
//       <ExerciseCard key={index} exercise={exercise} />
      
//     ))}
    


//     </Stack>

//     </Box>
//   )
// }

// export default Exercises;

import { Box, Pagination, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useEffect } from 'react'
//import { exerciseOption, fetchData } from '../utils/fetchData'
import { exerciseOptions, fetchData } from '../utility_functions/fetchData';
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirestExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirestExercise,indexOfLastExercise)

  const paginate = (e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exercisesData = [];
      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  },[bodyPart,setExercises]);

  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' md='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercise.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length>9 && (
          <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises