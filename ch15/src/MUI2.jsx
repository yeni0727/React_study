import Button from '@mui/material/Button'
import './MUI2.css'

//커스터마이징 한 CSS 적용방법1:외부 스타일시트사용
function MUI2() {
   return (
      <>
         <Button variant="text" className="btn1">
            Text
         </Button>
         <Button variant="contained" className="btn2">
            Contained
         </Button>
         <Button variant="outlined" className="btn3">
            Outlined
         </Button>
      </>
   )
}

export default MUI2
