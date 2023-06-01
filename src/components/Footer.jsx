import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import Logo from '../pics/Logo.png';

const Footer = () => (
  <Box mt="70px" bgcolor="#73BBC9">
    <Stack gap="40px" sx={{ alignItems: 'center' }}  px="30px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '35px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '18px' } }} mt="20px" textAlign="center" pb="40px">Made with ❤️ by Gaurav</Typography>
  </Box>
);

export default Footer;