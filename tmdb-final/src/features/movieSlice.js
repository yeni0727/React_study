import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'

//액션 생성자 함수
export const fetchMovies = createAsyncThunk('moives/fetchMovies', async ({ category, page }) => {
   //MovieCategory에서 데이터 넘겨줌
   const response = await getMovies(category, page)
   return response.data.results
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [], // 현재상영 or 개봉예정 or 인기영화 목록
      loading: false, // 로딩여부
      error: null, // 에러메세지
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            //action.meta.arg( { category, page })에서는 fetch함수에서 매개변수로 받아온 값을 가져올 수 있음
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               //페이지가 2페이지 이상일때는 기존데이터+새로운 데이터state로 업데이트
               state.movies = [...state.movies, ...action.payload]
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
