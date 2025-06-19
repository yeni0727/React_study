//검색결과 페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function SearchResulte() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">검색결과 페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResulte
