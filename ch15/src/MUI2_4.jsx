import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

//커스터마이징 한 CSS 적용방법 4:styled사용

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme) //MUI에서 사용하는 테마 객체
   //테마객체는 MUI컴포넌트 전체에 공통적으로 적용되는 디자인 시스템 정보를 가지고 있다. -> 협업시 일관성 있는 디자인을 낼수있다

   return {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(2), //1=8px
      '&:hover': {
         backgroundColor: theme.palette.secondary.main,
      },
   }
})

function MUI2_4() {
   return <CustomButton>버튼</CustomButton>
}

export default MUI2_4
