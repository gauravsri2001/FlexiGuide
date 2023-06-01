

//const axios = require('axios');
export const exerciseOptions = {
  method: 'GET',
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    
    'X-RapidAPI-Key': '04299a33abmshd1f40cf9310b9ebp177662jsn05a1f5284459',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  //url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
 
  headers: {
    'X-RapidAPI-Key': '04299a33abmshd1f40cf9310b9ebp177662jsn05a1f5284459',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

// try {
// 	const response = await axios.request(exerciseOptions);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }