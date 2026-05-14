import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help'
import Profiles from './Menus/Profiles'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'

function AppBar() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 2,
        gap: 2,
        overflowX: 'auto'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: 'primary.main' }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" startIcon={<CreateNewFolderIcon />}>
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="filled-search"
          label="Search..."
          type="search"
          variant="filled"
          size="small"
          sx={{ minWidth: '120px' }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsActiveIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
