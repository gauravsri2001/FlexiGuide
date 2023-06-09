import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={'exercise.name'} />
      
      <Stack direction='row'>
      <Button 
      sx={{
        ml: '21px',
        color: '#fff',
        background: '#E76161',
        fontSize: '14px',
        borderRadius: '20px',
        textTransform: 'capitalize',
        '&:hover': {
          background: '#000'
        }
      }}
      >
      {exercise.bodyPart}
      </Button>
      
      <Button 
      sx={{
        ml: '21px',
        color: '#fff',
        background: '#F99B7D',
        fontSize: '14px',
        borderRadius: '20px',
        textTransform: 'capitalize',
        '&:hover': {
          background: '#000',
        }
      }}
      >
      {exercise.target}
      </Button>

        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pd='10px' textTransform='capitalize' fontSize='22px'>
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard