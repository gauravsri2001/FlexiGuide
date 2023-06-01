import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
 
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
    <Typography variant='h4' mb={'33px'} color={'#f2f2f2'}>
    Watch <span style={{color: '#FFFF00', textTransform: 'capitalize'}}>{name}</span> exercise videos

    </Typography>

    <Stack justifyContent={'flex-start'} flexWrap={'wrap'} alignItems={'center'} 
    sx={{
      flexDirection: {lg: 'row'},
      gap:{lg:'110px', xs: '0'}
    }}>
    {exerciseVideos?.slice(0,6).map((item, index) => (
      <a 
      key={index}
      className='exercise-video'
      href= {`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target = '_blank'
      rel='noreferrer'
      >
        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
        <Box>
        <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#FF0060">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#f2f2f2">
                {item.video.channelName}
              </Typography>
        </Box>
      </a>
    ))}

    </Stack>

    </Box>
  )
}

export default ExerciseVideos


