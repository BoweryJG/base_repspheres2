import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { label: 'Market Insights', href: '/blog.html', emphasize: false },
  { label: 'Sphere OS', href: '/workspace.html', emphasize: false },
  { label: 'Podcast', href: '/podcast.html', emphasize: true },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Orb SVG for brand
  const orb = (
    <svg width="32" height="32" viewBox="0 0 32 32" style={{ marginRight: 10 }}>
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#00ffc6" />
          <stop offset="100%" stopColor="#7B42F6" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#orbGrad)" opacity="0.85" />
      <circle cx="16" cy="16" r="8" fill="#fff" opacity="0.08" />
    </svg>
  );

  const navButtonStyle = {
    fontWeight: 600,
    letterSpacing: '0.03em',
    fontSize: '1.08rem',
    px: 2,
    py: 1,
    borderRadius: '30px',
    transition: 'all 0.22s',
    '&:hover': {
      color: 'var(--secondary)',
      background: 'rgba(123,66,246,0.10)',
      boxShadow: '0 2px 12px rgba(123,66,246,0.10)'
    },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(20,14,38,0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2.5px solid',
        borderImage: 'linear-gradient(90deg, #7B42F6 0%, #00ffc6 100%) 1',
        boxShadow: '0 4px 32px 0 rgba(123,66,246,0.10)',
        zIndex: 1301
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 80 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 900, fontSize: '1.7rem', letterSpacing: '0.02em', color: '#fff' }}>
          {orb}
          RepSpheres
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: 'rgba(20,14,38,0.96)',
                  borderLeft: '2.5px solid',
                  borderImage: 'linear-gradient(180deg, #7B42F6 0%, #00ffc6 100%) 1',
                  minWidth: 240
                }
              }}
            >
              <List sx={{ mt: 4 }}>
                {navLinks.map((link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton component="a" href={link.href} sx={{ ...navButtonStyle, opacity: link.emphasize ? 0.6 : 1 }}>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/login.html" sx={{ ...navButtonStyle, border: '1.5px solid #fff', color: '#fff', mt: 2 }}>
                    <ListItemText primary="Log In" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/signup.html" sx={{
                    ...navButtonStyle,
                    mt: 2,
                    background: 'linear-gradient(135deg, #7B42F6 0%, #00ffc6 100%)',
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(123,66,246,0.20)',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5B3CFF 0%, #00ffc6 100%)',
                      color: '#fff',
                      transform: 'scale(1.04)'
                    }
                  }}>
                    <ListItemText primary="Sign Up" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                sx={{
                  ...navButtonStyle,
                  opacity: link.emphasize ? 0.6 : 1,
                  color: '#fff',
                  fontWeight: link.emphasize ? 600 : 700,
                  fontSize: link.emphasize ? '1rem' : '1.08rem',
                  textTransform: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              href="/login.html"
              variant="outlined"
              sx={{
                ...navButtonStyle,
                border: '2px solid #fff',
                color: '#fff',
                ml: 2,
                fontWeight: 700,
                background: 'rgba(123,66,246,0.05)',
                '&:hover': {
                  background: 'rgba(123,66,246,0.18)',
                  borderColor: 'var(--secondary)',
                  color: 'var(--secondary)'
                }
              }}
            >
              Log In
            </Button>
            <Button
              href="/signup.html"
              variant="contained"
              sx={{
                ...navButtonStyle,
                ml: 2,
                background: 'linear-gradient(135deg, #7B42F6 0%, #00ffc6 100%)',
                color: '#fff',
                fontWeight: 900,
                fontSize: '1.13rem',
                px: 4,
                boxShadow: '0 4px 20px rgba(123,66,246,0.18)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5B3CFF 0%, #00ffc6 100%)',
                  color: '#fff',
                  transform: 'scale(1.045)'
                }
              }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
