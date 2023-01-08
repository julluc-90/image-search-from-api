// for axios
import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: process.env.REACT_APP_CLIENT_ID,
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}

export default searchImages
