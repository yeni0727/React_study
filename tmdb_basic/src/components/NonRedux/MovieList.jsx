import { useEffect, useState } from 'react'
import { getMovies } from '../../api/tmdbApi'

function MovieList() {
   const [movies, setMovies] = useState([]) //응답받은 영화목록
   const [loading, setLoading] = useState(true) //로딩중 여부
   const [error, setError] = useState(null) //에러메세지

   //컴포넌트가 최초로 렌더링 된후 1번만 실행
   //API호출가능
   useEffect(() => {
      const fetchMovie = async () => {
         try {
            const movieList = await getMovies()
            setMovies(movieList.data.results) //movies state에 영화목록 데이터 저장
         } catch (error) {
            setError(error.message) //error statr에 에러메세지저장
         } finally {
            setLoading(false) //loding완료
         }
      }
      fetchMovie()
   }, [])

   //로딩state가 t면 로딩중 컴포넌트를 렌더링
   if (loading) return <p>로딩중..</p>

   //에러state에 에러메세지가 있으면 erorr.message 컴포넌트를 렌더링
   if (error) return <p>Error: {error}</p>

   //로딩state가 f면서 에러 state에 에러메세지가 없으면 movieList 컴포넌트를 렌더링

   return (
      <div>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
