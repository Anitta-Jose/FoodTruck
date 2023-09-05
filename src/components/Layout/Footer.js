import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
  <>
  <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>
    <Typography variant='h5' sx={{'@media (max-width:600px)':{
        fontSize:"1rem"
    }}}>
        All rights reserved
    </Typography>
  </Box>
  </>
  )
}

export default Footer