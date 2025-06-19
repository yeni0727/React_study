import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'
// import movieDetalis from '../components/UseRedux/MovieDetali'

//createAsyncThunk :비동기 thunk액션->영화목록을 API로부터 가져옴
//createAsyncThunk(type명,비동기함수)
//비동기 함수에서 API를 불러오는 함수 실행
//type명은 'slice의 이름/변수명'으로 짓는다

//인기영화 목록 가져오기(call)
//fetchMovies() : 액션 생성자 함수역할
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results
})

//영화상세 정보 가져오기
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   console.log(response)
   return response.data
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movieDetails: null, //영화 상세정보
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // pending:데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null //다른액션생성자 함수에서 에러 발생시 에러 메세지가 남아있는 경우를 대비해 초기화
         })
         //fulfilled:데이터를 성공적으로 가져온 경우
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            // action.payload 값은 fetchMovies() 함수에서 return해 주는 값
            state.movies = action.payload
         }) // 인기영화 목록
         //rejected:api 호출 실패한 경우
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            // action.payload는 fetchMovieDetails() 에서 리턴해주는 값
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
