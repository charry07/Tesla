import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { Logo } from './Logo';
import { GoToId } from '../helpers/GoToId';

export const Header = () => {
  const pages = [
    { Title: 'Model 3', id: '#Model3' },
    { Title: 'Model s', id: '#Models' },
    { Title: 'Model X', id: '#Modelx' },
    { Title: 'Model Y', id: '#ModelY' },
    { Title: 'Solar Roof', id: '#SolarRoof' },
    { Title: 'Solar Panels', id: '#SolarPanels' },
    { Title: 'Powerwall', id: '#Powerwall' },
  ];

  // const menuOPT = [
  //   { Title: 'Shop', id: '#Shop' },
  //   { Title: 'Account', id: '#Account' },
  //   { Title: 'Menu', id: '#Menu' },
  // ];


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  type Id = `#${string}`;
  const handleCloseNavMenu = (id: Id) => {
    setAnchorElNav(null);
    GoToId(id);
  };

  return (
    <AppBar position='fixed' sx={{ background: 'transparent', boxShadow: 0 }} >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
              <Logo />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page: any) => (
                <MenuItem key={page.id} onClick={() => handleCloseNavMenu(page.id)}>
                  <Typography textAlign='center'>{page.Title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page: any) => (
              <Button key={page.id} onClick={() => handleCloseNavMenu(page.id)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.Title}
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {menuOPT.map((page: any) => (
              <Button key={page.id} onClick={() => handleCloseNavMenu(page.id)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.Title}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
