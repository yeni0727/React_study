import './App.css'
// import MovieUpcomming from './components/MovieUpcoming'
// import MovieList from './components/NonRedux/MovieList'
import { Route, Routes } from 'react-router-dom'
import MovieList from './components/UseRedux/MovieList'
import MovieDetail from './components/UseRedux/MovieDetail'
import NotFound from './components/UseRedux/NotFound'
function App() {
   // return <MovieList />
   // return <MovieUpcomming />
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
