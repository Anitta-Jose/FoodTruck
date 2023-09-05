import React, {useState} from 'react'
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom'
import '../../../src/styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)

const handleDrawer = () =>{
  setMobileOpen(!mobileOpen)
}

const drawer=(
  <Box onClick={handleDrawer}>
    <Typography color={'goldenrod'} component="div" variant="h6" sx={{flexGrow:1}}>
      <FastfoodIcon/>
         My Restaurant
       </Typography>
       
       <ul className="mobile-navigation">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/Menu'}>Menu</Link>
      </li>
      <li>
        <Link to={'/Contact'}>Contact</Link>
      </li>
      <li>
        <Link to={'/About'}>About</Link>
      </li>
    </ul>
   
  </Box>
)

  return (
    <>
     <Box>
     <AppBar component={'nav'} sx={{bgcolor:"black"}}>
      <Toolbar>
        <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'}}} onClick={handleDrawer}>  
          <MenuIcon/>
        </IconButton>
      <Typography color={'goldenrod'} component="div" variant="h6" sx={{flexGrow:1}}>
      <FastfoodIcon/>
         Food Truck
       </Typography>
       <Box sx={{display:{xs:'none',sm:'block'}}}>
       <ul className="navigation-menu">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/Menu'}>Menu</Link>
      </li>
      <li>
        <Link to={'/Contact'}>Contact</Link>
      </li>
      <li>
        <Link to={'/About'}>About</Link>
      </li>
    </ul>
   </Box>
      </Toolbar>    
     </AppBar>
     <Box component='nav'>
<Drawer variant='temporary' open={mobileOpen} onClose={handleDrawer} sx={{display:{xs:'block',sm:'none'}}}>
  {drawer}
</Drawer>
     </Box>
     <Box>
     <Toolbar/>
     </Box>
    
   </Box> 
   
    </>
   
  )
}

export default Header