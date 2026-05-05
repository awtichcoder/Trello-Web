import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

//Create
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[500]
    },
    secondary: {
      main: '#7c8519'
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: red[500]
    }
  }
})
export default theme
