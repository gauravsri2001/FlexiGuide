import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position={'relative'} p={'25px'}>
        <Typography 
        color={'#FF2625'}
        fontWeight={'600'}
        fontSize={'25px'}
        >
        Fitness Club
        </Typography>

        <Typography fontWeight={750} textAlign={'inherit'} justifyContent={'center'}
        sx={{
            fontSize:{lg: '44px', xs:'40px'}
            
        }}>
        WORK 💪, <br/> SWEAT and <br /> ACHIEVE 🏆
        </Typography>

        <Typography 
        fontSize={'25px'}
        lineHeight={'35px'}
        mb={3}>
            Check out the most effective Exercises
        </Typography>

        <Button 
        variant='contained' 
        color='error'
        href='#exercises'>
            Explore Exercises
        </Button>

    </Box>
  )
}

export default Banner