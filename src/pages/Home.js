import React from 'react';
import '../css/index.css';
import OverviewComponent from '../components/Overview';
import OurInitiatives from '../components/OurInitiatives';
import About from '../components/About';
import HomeComponent  from '../components/HomeComponent';
import '../css/index.css';

function Home ()
{
  return(
    <>
    <HomeComponent/>
<OverviewComponent />
<About/>
    </>
  );
}

export default Home;

