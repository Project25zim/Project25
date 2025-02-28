import React from 'react';
import '@/css/index.css';
import '@/css/homeComponent.css';
import '@/css/overviewcomponent.css';
import '@/css/about.css';
import OverviewComponent from '@/components/Overview';
import About from '@/components/About';
import HomeComponent from '@/components/HomeComponent';

function Home() {
  return (
    <>
      <HomeComponent />
      <OverviewComponent />
      <About />
    </>
  );
}

export default Home;

