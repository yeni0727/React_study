//인기영화,현재 상영중,개봉예정 페이지
import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import Button from '@mui/material/Button'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../features/movieSlice'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   //카테고리 별 페이지 번호
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   //category가 바뀔때 또는 page가 바뀔때 동작
   useEffect(() => {
      //props로 받음
      dispatch(fetchMovies({ category, page: page[category] }))
   }, [dispatch, category, page])

   //더보기 버튼 (클릭시 내가 현재 들어와있는 page번호를 +1시킴)
   const loadMore = () => {
      setPage((prevState) => ({
         ...page,
         [category]: prevState[category] + 1,
      }))
   }

   //페이지 번호 1일때만 로딩실행
   if (loading && page[category] === 1) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <Loading />
            </Main>
            <Footer />
         </Wrap>
      )
   }
   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error:{error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={movies} />
            <Button
               variant="outlined"
               sx={{
                  margin: '20px auto',
                  display: 'block',
                  width: '500px',
               }}
               onClick={loadMore}
            >
               더보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
