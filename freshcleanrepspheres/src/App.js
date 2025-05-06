import React from 'react';
import NavBar from './components/NavBar';
import StarryBackground from './components/StarryBackground';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TimelineSection from './components/TimelineSection';
import DeploymentSection from './components/DeploymentSection';
import MarketInsights from './components/MarketInsights';
import Podcasts from './components/Podcasts';

function App() {
  return (
    <>
      <StarryBackground />
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TimelineSection />
      <DeploymentSection />
      <MarketInsights />
      <Podcasts />
      {/* Add more sections/components as needed */}
    </>
  );
}

export default App;
