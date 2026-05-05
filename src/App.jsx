import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import AppleIcon from '@mui/icons-material/Apple'
import Typography from '@mui/material/Typography'
function App() {
  return (
    <>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facere
        animi reprehenderit, ex a placeat. Id eum, repudiandae eveniet, natus
        fuga ad molestiae at accusantium nihil corrupti obcaecati assumenda
        corporis.
      </Typography>
      <Button variant="text"> hello world</Button>
      <Button variant="contained"> hello world</Button>
      <Button variant="outlined"> hello world</Button>
      <br />
      <MenuIcon />
      <AppleIcon />
    </>
  )
}

export default App
