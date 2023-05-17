import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../pics/Logo.png';



const Navbar = () => {
  return (
    
    <Stack>

    <div>
    <Link to="/">
    <img src={Logo} alt='Logo' style={{width: '80px', height: 'auto', margin: '0 5px' }} />
    </Link>
    </div>

    <Stack>
      {/* <Link to={"/"}>

      </Link> */}
    </Stack>
    
    
      
    </Stack>

    
    
  )
}

export default Navbar;