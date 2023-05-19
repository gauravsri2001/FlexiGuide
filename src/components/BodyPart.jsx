// import React from 'react'
// import Body_diff from './Body_diff';
// import Logo from '../pics/Logo.png';
// import banner_img from '../pics/banner_img.png';

// const BodyPart = () => {
//   return (
//     <div>
//       <Body_diff imgUrl={Logo} />
//       {/* <Body_diff imgUrl={banner_img} /> */}
//     </div>
//   )
// }

// export default BodyPart

import { Stack } from '@mui/material';
import React from 'react';
import Logo from '../pics/Logo.png';


const BodyPart = ({item, setBodyPart, bodyPart, imgUrl}) => {
  return (
    <Stack
    type='button'
    alignItems={'center'}
    justifyContent={'center'}
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
    }}
       
    >

    <img src={Logo} alt='dumbbell' style={{width: '40px', height: '40px'}} />
    
    </Stack>
  )
}

export default BodyPart;