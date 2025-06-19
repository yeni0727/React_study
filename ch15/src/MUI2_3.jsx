import Box from '@mui/material/Box'

//커스터마이징 한 CSS 적용방법 3: sx props 사용(JSON 객체 형태로 사용)
// sx props도 인라인 스타일 적용방법과 유사하게 사용
// => json 객체, 속성명은 카멜표기법 사용
function MUI2_3() {
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'secondary.light',
            '&:hover': {
               backgroundColor: 'warning.light',
            },
         }}
      >
         집에가자
      </Box>
   )
}

export default MUI2_3
