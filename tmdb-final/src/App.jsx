import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieCategory from './pages/MovieCategory'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

/* 
★여러 경로에서 같은 컴포넌트를 사용시 주의점
1.최초로 메뉴를 클릭시 MovieCategory 컴포넌트를 렌더링(마운트)
2.이후 다른 메뉴 클릭시 MovieCategory 컴포넌트를 새로 마운트 하지 않고 재렌더링함=>따라서 기존 MovieCategory를 언마운트 하고 새로 마운트가 일어나도록 하기 위해서 key props사용
*/
function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<MovieCategory category="popular" key="popular" />}></Route>
            <Route path="/now_playing" element={<MovieCategory category="now_playing" key="now_playing" />} />
            <Route path="/upcoming" element={<MovieCategory category="upcoming" key="upcoming" />} />
            <Route path="/serch" element={<SearchResults />} />
            <Route path="/detail/:movieId" element={<Detail />} />
            <Route path="/*" element={<NotFound />} />
         </Routes>
      </>
   )
}

export default App
