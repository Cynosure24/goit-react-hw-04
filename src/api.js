import axios from 'axios';

const API_KEY = 'Cy92zS_s-8LatL3RzaPsLoRZu2MTPKEJqfLAeI3XtWY';
export const fetchPictures = async (query, page, perPage=18) => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=${query}&per_page=${perPage}`
      );
  return response.data;
};