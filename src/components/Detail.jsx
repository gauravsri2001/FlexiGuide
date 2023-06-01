import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import BodyPartImage from '../pics/BodyPartImage.png';
import TargetImage from '../pics/TargetImage.png';
import EquipmentImage from '../pics/EquipmentImage.png';

const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },

    {
      icon: TargetImage,
      name: target,
    },

    {
      icon: EquipmentImage,
      name: equipment,
    }
  ]

  return (
    <Stack 
    gap={'60px'}
    
    sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
    <img src={gifUrl} alt={name}  className='detail-image' style={{borderRadius:'10%'}} />

    <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
      <Typography variant='h3'sx={{color:'#f2f2f2'}}>
        {name}
      </Typography>

      <Typography sx={{ fontSize: { lg: '22px', xs: '18px' } }} color='#FFD95A'>
          Exercises keep you strong.{' '}
          
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the best exercises to target your <span style={{ textTransform: 'capitalize' }}>{target}</span>.
          <br />When done with the right form and technique, it can help a great deal in increasing 
          the strength of the oblique, and the overall strength and stability of the core.
          It will help you improve your mood and ain energy.
        </Typography>

        {extraDetail.map ((item) => (
      <Stack key={item.name} direction={'row'} gap={'24px'} alignItems={'center'}>
      <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height:'100px'}}>
        <img src={item.icon} alt={bodyPart}  />
      </Button>

      <Typography textTransform='capitalize' variant='h5' sx={{color: '#f2f2f2'}}>
        {item.name}
      </Typography>

      </Stack>

    ))};
    </Stack>

    {/* <Typography variant='h6'>
      {name} {` `} is one of the best exercises to target your {target}.
      When done with the right form and technique, it can help a great deal in increasing 
      the strength of the oblique, and the overall strength and stability of the core.
      It will help you improve your mood and ain energy.
    </Typography> */}

    



    </Stack>
  )

}

export default Detail;