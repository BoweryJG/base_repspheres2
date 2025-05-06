import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #7B42F6 0%, #00ffc6 100%)',
        color: '#fff',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight={800} gutterBottom>
          RepSpheres: Elevating Elite Sales Teams with Precision Intelligence
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Unlock actionable insights and empower your team with AI-driven intelligence.
        </Typography>
      </Container>
    </Box>
  );
}
