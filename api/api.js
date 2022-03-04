import axios from 'axios'

export const getMovie = async (movie) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=07da5581753c3a2cbe717760af2f71ec&language=en-US`
  )

  return await response.data
}

export const getMovies = async () => {
  const responseData = await axios.get(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=07da5581753c3a2cbe717760af2f71ec&language=en-US&page=1'
  )

  return await responseData.data.results
}

export const useSearch = async (search) => {
  const responseData = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=07da5581753c3a2cbe717760af2f71ec&language=en-US&page=1&query=${search}`
  )
  return await responseData.data.results
}
