import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
//rfce
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

export default ModeSelect
