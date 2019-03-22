import React from 'react';

import About from './frontpage/About';
import Testimony from './frontpage/Testimony';
import Podcast from './frontpage/Podcast';
import Events from './frontpage/Events';
import MissionTrips from './frontpage/MissionTrips';
import GetInTouch from './frontpage/GetInTouch';
import Support from './frontpage/Support';

export default () => (
  <div id="front-page-container">
    <About />
    <Testimony />
    <Podcast />
    <Events />
    <MissionTrips />
    <GetInTouch />
    <Support />
  </div>
)
