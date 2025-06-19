import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY //.env에서가져옴

//axios 객체 생성
// create()함수 실행 -> axios 객체 생성(tmdbApi) -> axiod를 통해 API를 불러옴
const tmdbApi = axios.create({
   baseURL: BASE_URL, //똑같이 반복되는 url
   headers: {
      accept: 'application/json', //JSON객체로 결과값 받음
      Authorization: `Bearer ${AUTH_KEY}`, //인증키
   },
})

//인기영화 목록 가져오기
//'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR'
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         //쿼리스트링
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })

   return response
}

//개봉예정 영화 목록 가져오기
export const getUpcomingMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/upcoming', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

//영화상세 정보
//https://api.themoviedb.org/3/movie/movie_id
export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })

   return response
}

export default tmdbApi
