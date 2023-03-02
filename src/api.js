import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID E2AFFK_fVcbQUFxgBZqgK2eURuz5pZtVIYzobAAZun4',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
