import React from 'react';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utility_functions/fetchData';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises);
  return (
    <Box id='exercises'
    sx={{mt: {lg: '110px'}}}
    mt={'50px'}
    p={'20px'}
    >

    <Typography variant='h3' mb='46px'>
      Showing results
    </Typography>

    <Stack direction={'row'}
    sx={{gap:{lg:'110px', xs: '50px'}}}
    flexWrap={'wrap'}
    justifyContent={'center'}>
    {exercises.map((exercise, index) => (
      <p>{exercise.name}</p>
    ))}


    </Stack>

    </Box>
  )
}

export default Exercises