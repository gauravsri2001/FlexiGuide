import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../pics/Logo.png';

const Navbar = () => {
  return (
    
    <Stack
    direction={'row'}
    justifyContent={'space-around'}
    sx={{gap:{sm: '122px', xs: '40px'}, mt:{sm: '32px',xs: '20px'}, justifyContent: 'none'}} px = '20px' >

    <div>
    <Link to="/">
    <img src={Logo} alt='Logo' style={{width: '80px', height: 'auto', margin: '0 20px' }} />
    </Link>
    <br/>
    <Typography variant='h5' color={'#F6FA70'} fontWeight={'bold'}>
      Flexi<span style={{color: '#FF0060'}}>Guide</span>
    </Typography>
    </div>

    <Stack 
    direction= {'row'}
    gap={"40px"}
    fontSize={'25px'}
    alignItems={"flex-end"}>
      <Link to={"/"} style={{textDecoration: 'none', color: '#CCCCCC', borderBottom: '3px solid #FF2625'}}>
      Home
      </Link>
      <a href='#exercises' style={{textDecoration: 'none', color: '#CCCCCC'}}>Exercises</a>
      
    </Stack>
    
    
      
    </Stack>

    
    
  )
}

export default Navbar;