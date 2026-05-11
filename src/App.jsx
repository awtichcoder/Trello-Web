import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

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
          <div className="Mode">
            <LightModeIcon />
            <span className="ModeFont">Light</span>
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div className="Mode">
            <DarkModeOutlinedIcon />
            <span className="ModeFont">Dark</span>
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div className="Mode">
            <SettingsBrightnessIcon />
            <span className="ModeFont">System</span>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh'
      }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.light',
          height: (theme) => theme.trelloCustom.appBarHeight,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          // height: '58px', chua toi uu cho suy sao nay
          // de bao tri cho viec co the thay doi sau nay neu can
          height: (theme) => theme.trelloCustom.boardBarHeight,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          // height: 'calc(100vh - 106px)',
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Content
      </Box>
    </Container>
  )
}

export default App
