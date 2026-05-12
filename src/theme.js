import { experimental_extendTheme as extendTheme } from '@mui/material/styles' //
import { cyan, deepOrange, orange, red, teal } from '@mui/material/colors'

//Create
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
      // spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
      // spacing: (factor) => `${0.25 * factor}rem`
    }
  }
  // ...other properties
})
export default theme
