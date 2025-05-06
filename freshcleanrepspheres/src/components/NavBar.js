import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="sticky" sx={{ background: 'rgba(40, 20, 70, 0.85)' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 800 }}>
          RepSpheres
        </Typography>
        <Button color="inherit" href="#market-insights">
          Market Insights
        </Button>
        <Button color="inherit" onClick={handleMenuOpen}>
          Sphere OS
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component="a" href="#research">
            Research
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#create">
            Create
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#linguistics">
            Linguistics
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#automations">
            Automations
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#deep-insights">
            Deep Insights
          </MenuItem>
        </Menu>
        <Button
          variant="contained"
          color="secondary"
          href="#podcasts"
          sx={{ marginLeft: 2, fontWeight: 700 }}
        >
          Podcast
        </Button>
      </Toolbar>
    </AppBar>
  );
}
