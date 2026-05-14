import React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const Menu_Styles = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  padding: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': { bgcolor: 'primary.50' }
}
function BoardBar() {
  return (
    <Box
      sx={{
        // height: '58px', chua toi uu cho suy sao nay
        // de bao tri cho viec co the thay doi sau nay neu can
        height: (theme) => theme.trelloCustom.boardBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={Menu_Styles}
          icon={<DashboardIcon />}
          label="kietDev"
          //clickable
          onClick={() => {}}
        />
        <Chip
          sx={Menu_Styles}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          //clickable
          onClick={() => {}}
        />
        <Chip
          sx={Menu_Styles}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          //clickable
          onClick={() => {}}
        />
        <Chip
          sx={Menu_Styles}
          icon={<BoltIcon />}
          label="Automation"
          //clickable
          onClick={() => {}}
        />
        <Chip
          sx={Menu_Styles}
          icon={<FilterIcon />}
          label="Filters"
          //clickable
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon />}>
          Invite
        </Button>
        <AvatarGroup max={5}>
          <Tooltip title="KietDev">
            <Avatar alt="=KietDev" src="./public/img/image.png" />
          </Tooltip>
          <Tooltip title="sơn tùng">
            <Avatar
              alt="sơn tùng"
              src="https://i.scdn.co/image/ab6761610000e5eb5a79a6ca8c60e4ec1440be53"
            />
          </Tooltip>
          <Tooltip title="MCK">
            <Avatar
              alt="MCK"
              src="https://sohanews.sohacdn.com/160588918557773824/2024/8/12/378576086-857002629320899-2849875770099211100-n-1705565258-855-width2048height1365-7590-1723433745383-17234337466941882421835.jpg"
            />
          </Tooltip>
          <Tooltip title="Tlinh">
            <Avatar
              alt="Tlinh"
              src="https://media.baoquangninh.vn/upload/image/202511/medium/2434018_8723c6d977217f4272a2cfb5cb907c87.jpg"
            />
          </Tooltip>
          <Tooltip title="User 2">
            <Avatar alt="User 2" src="./public/img/image.png" />
          </Tooltip>
          <Tooltip title="User 2">
            <Avatar alt="User 2" src="./public/img/image.png" />
          </Tooltip>
          <Tooltip title="User 2">
            <Avatar alt="User 2" src="./public/img/image.png" />
          </Tooltip>
          <Tooltip title="User 2">
            <Avatar alt="User 2" src="./public/img/image.png" />
          </Tooltip>
          <Tooltip title="User 2">
            <Avatar alt="User 2" src="./public/img/image.png" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
