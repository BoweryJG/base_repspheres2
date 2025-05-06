import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import MarketInsights from './components/MarketInsights';
import Podcasts from './components/Podcasts';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MarketInsights />
      <Podcasts />
      {/* Add more sections/components as needed */}
    </>
  );
}

export default App;
