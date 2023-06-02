

//const axios = require('axios');
export const exerciseOptions = {
  method: 'GET',
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    
    'X-RapidAPI-Key': '//ENTER YOUR API_KEY HERE//',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  //url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
 
  headers: {
    'X-RapidAPI-Key': '//ENTER YOUR API KEY HERE//',
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
