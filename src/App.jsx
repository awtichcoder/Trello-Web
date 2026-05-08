import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import AppleIcon from '@mui/icons-material/Apple'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // setAge(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LightModeIcon />
              <span style={{ marginLeft: 8 }}>Light</span>
            </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DarkModeOutlinedIcon />
            <span style={{ marginLeft: 8 }}>Dark</span>
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SettingsBrightnessIcon />
            <span style={{ marginLeft: 8 }}>System</span>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('dark', prefersDarkMode)
  // console.log('light', prefersLightMode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <hr />
      <Typography variant="h3" color="text.secondary">
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
