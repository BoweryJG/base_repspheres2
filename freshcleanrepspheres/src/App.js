import React from 'react';
import NavBar from './components/NavBar';
import StarryBackground from './components/StarryBackground';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TimelineSection from './components/TimelineSection';
import DeploymentSection from './components/DeploymentSection';

import MoatSection from './components/MoatSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
      <MoatSection />
      <CTASection />
      <Footer />
      {/* Add more sections/components as needed */}
    </>
  );
}

export default App;
