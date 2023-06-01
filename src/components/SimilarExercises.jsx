import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '40px', xs: '20px' }, ml: '20px' }} fontWeight={700} color="#f2f2f2" mb="33px">
      Similar <span style={{ color: '#FFFF00', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }} >
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

    <Typography sx={{ fontSize: { lg: '40px', xs: '20px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#f2f2f2" mb="33px">
      Similar <span style={{ color: '#FFFF00', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);
export default SimilarExercises