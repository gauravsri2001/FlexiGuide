import { Stack, TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions } from '../utility_functions/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {
  const[search, setSearch] = useState('');
  
  const [bodyParts, setBodyParts] = useState(['all']);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts([ ...bodyPartsData]);
    }

    fetchExercisesData();
  }, []);

  const handleSearch = async () =>{
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search) 
        ||item.target.toLowerCase().includes(search) 
        || item.equipment.toLowerCase().includes(search) 
        || item.bodyPart.toLowerCase().includes(search) 
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems={'center'} mt={"37px"} justifyContent={"center"} p={"20px"}>

    <Typography fontWeight={700} color={'white'}
    sx={{fontSize:{lg: '44px', xs: '30px'}}}
    mb={'50px'} textAlign={'center'}>

    Explore Some Awesome Exercises
    </Typography>

    <Box position={'relative'} mb={'72px'}>
      <TextField
      sx={{
        input: {
          fontWeight: '700', 
          border: 'none', 
          borderRadius:'4px'
          },
          width:{lg: '1170px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius: '40px'

      }}
      height = '76px'
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder='Search for Exercises'
      type='text'
      />

      <Button className='searh-btn'
      sx={{bgcolor: '#ff2625',
      color: '#fff',
      textTransform: 'none',
      width: {lg: '175px', xs: '80px'},
      fontSize: {lg: '20px', xs: '14px'},
      height: '56px', 
      position: "absolute",
      right: '0',
      "&:hover" : {
        bgcolor: '#FE8040'
      }
      }}
      onClick={handleSearch}
      >
      Search
      </Button>

    </Box>

    <Box sx={{position: 'relative', width: '100%' , p: '20px'}}>
    <HorizontalScrollbar data={bodyParts} bodyParts
      bodyPart = {bodyPart}
      setBodyPart={setBodyPart} isBodyParts
      
    /> 
    
    </Box>

    </Stack>
  )
}

export default SearchExercise;