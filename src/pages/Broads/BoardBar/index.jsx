import React from 'react'
import Box from '@mui/material/Box'

function BoardBar() {
  return (
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
  )
}

export default BoardBar
