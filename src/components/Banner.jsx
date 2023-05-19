import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import banner_img from '../pics/banner_img.png';

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
        }}
        mb={"23px"}
        mt={"30px"}
        ml={"30px"}
        >
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
        href='#exercises'
        sx={{backgroundColor: '#ff2625',
        padding: '10px'}}
        >
            Explore Exercises
        </Button>

        <Typography
        fontWeight={600}
        color={'#ff2625'}
        sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}
        }}
        fontSize={"170px"}
        >
            Exercise
        </Typography>

        
        <img src={banner_img} alt='banner' className='banner-img'  />

        
            
    </Box>
    
  )
}

export default Banner