import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        zIndex: 1,
        background: 'transparent', // Let StarryBackground show through
        pt: { xs: 10, md: 16 },
        pb: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            background: 'linear-gradient(90deg, #fff 60%, #00ffc6 80%, #7B42F6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Sales <Box component="span" sx={{ background: 'linear-gradient(90deg, #7B42F6 0%, #00ffc6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Intelligence</Box> Evolved
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            mb: 4,
            maxWidth: 600,
            mx: 'auto',
            fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
          }}
        >
          Give your team the unfair advantage of AI-driven psychology—decode what makes buyers say "yes," eliminate guesswork, and engineer success at every stage of the sales journey.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#schedule"
          sx={{
            px: 5,
            py: 1.7,
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: '30px',
            background: 'linear-gradient(90deg, #7B42F6 0%, #00ffc6 100%)',
            boxShadow: '0 4px 24px rgba(123,66,246,0.18)',
            color: '#fff',
            transition: 'all 0.22s',
            mt: 2,
            '&:hover': {
              background: 'linear-gradient(90deg, #5B3CFF 0%, #00ffc6 100%)',
              boxShadow: '0 8px 36px rgba(123,66,246,0.22)',
              color: '#fff',
              transform: 'translateY(-2px) scale(1.04)'
            }
          }}
        >
          Start Winning More Deals
        </Button>
      </Container>
    </Box>
  );
}
