import { Box, Typography } from '@mui/material'
import React from 'react'

const SimilarExercises = ({targetMuscelExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
    <Typography color={'#f2f2f2'}>
      Exercises that target same muscel group
    </Typography>

    </Box>
  )
}

export default SimilarExercises