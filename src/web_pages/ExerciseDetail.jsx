import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../utility_functions/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect (() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

    }  

    fetchExercisesData();
  }, [id]);


  return (
    <Box>

      <Detail exerciseDetail={exerciseDetail}  />
      <SimilarExercises />
      <ExerciseVideos />
      
    </Box>
  )
}

export default ExerciseDetail