import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Drawer } from '@material-ui/core'
import { Menu, AccountCircle } from '@material-ui/icons'

function Nav() {
  const {open, setOpen} = useState(false)
  const handleDrawer = () => {
    setOpen(true)
  }
  return (
    <div>
      <AppBar position='static' color='primary'>
        <Container>
          <Toolbar>
            <IconButton onClick={handleDrawer} color="inherit" edge="start" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Flipkart
          </Typography>
            <Button color="inherit">
              Login
          </Button>
            <Button color="inherit">
              Register
          </Button>
            <IconButton color="inherit"aria-label="account">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={()=>{setOpen(false)}}>
        <h3>This is a drawer</h3>
      </Drawer>
    </div>
  )
}

export default Nav
