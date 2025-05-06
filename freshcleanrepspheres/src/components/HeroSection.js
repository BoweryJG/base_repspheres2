import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import AnimatedOrbHeroBG from './AnimatedOrbHeroBG';

export default function HeroSection() {
  const heroRef = useRef();
  const [showOrb, setShowOrb] = useState(true);

  useEffect(() => {
    const obs = new window.IntersectionObserver(
      ([entry]) => setShowOrb(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={heroRef}
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        zIndex: 1,
        background: 'transparent',
        pt: { xs: 14, md: 22 },
        pb: { xs: 8, md: 14 },
        overflow: 'hidden',
      }}
    >
      <AnimatedOrbHeroBG
        width={480}
        height={480}
        zIndex={2}
        visible={showOrb}
      />
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2.8rem', md: '4.1rem' },
            mb: 2.5,
            letterSpacing: '-0.04em',
            lineHeight: 1.09,
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
            mb: 5,
            maxWidth: 600,
            mx: 'auto',
            fontWeight: 400,
            fontSize: { xs: '1.18rem', md: '1.33rem' },
          }}
        >
          Give your team the unfair advantage of AI-driven psychology—decode what makes buyers say "yes," eliminate guesswork, and engineer success at every stage of the sales journey.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#schedule"
          sx={{
            px: 6,
            py: 2.1,
            fontWeight: 700,
            fontSize: { xs: '1.13rem', md: '1.22rem' },
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
