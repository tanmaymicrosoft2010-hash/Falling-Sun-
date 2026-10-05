import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Preloader } from './components/common/Preloader';
import { PageTransition } from './components/common/PageTransition';
import { ScrollHUD } from './components/common/ScrollHUD';
import { RoughFilter } from './components/RoughFilter';
import { RegistrationProvider } from './components/common/RegistrationLockModal';
import { RouteSeo } from './components/common/RouteSeo';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TracksPage } from './pages/TracksPage';
import { SchedulePage } from './pages/SchedulePage';
import { PrizesPage } from './pages/PrizesPage';
import { TeamPage } from './pages/TeamPage';
import { FaqPage } from './pages/FaqPage';
import { RegisterPage } from './pages/RegisterPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/rays"
          element={
            <PageTransition>
              <TracksPage />
            </PageTransition>
          }
        />
        <Route
          path="/schedule"
          element={
            <PageTransition>
              <SchedulePage />
            </PageTransition>
          }
        />
        <Route
          path="/prizes"
          element={
            <PageTransition>
              <PrizesPage />
            </PageTransition>
          }
        />
        <Route
          path="/team"
          element={
            <PageTransition>
              <TeamPage />
            </PageTransition>
          }
        />
        <Route
          path="/faq"
          element={
            <PageTransition>
              <FaqPage />
            </PageTransition>
          }
        />
        <Route
          path="/register"
          element={
            <PageTransition>
              <RegisterPage />
            </PageTransition>
          }
        />
        {/* Fallback wildcard to HomePage */}
        <Route
          path="*"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  useLenis();
  const [, setPreloaderDone] = useState(false);

  return (
    <Router>
      <RouteSeo />
      <RegistrationProvider>
      <div className="relative min-h-screen bg-bg text-cream selection:bg-yellow selection:text-ink">
        {/* Hidden SVG filter for the .rough heading class */}
        <RoughFilter />

        {/* Cinematic Preloader */}
        <Preloader onComplete={() => setPreloaderDone(true)} />

        {/* Main Application Layout */}
        <div className="relative z-10 w-full min-h-screen">
          <Navbar />
          <ScrollHUD />
          <main className="relative z-10">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
      </RegistrationProvider>
    </Router>
  );
};

export default App;
