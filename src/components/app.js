import React from 'react';
import '../assets/css/style.css';
import {Route, Switch} from 'react-router-dom';

import LandingPage from "./landing_page"
import ResultsPage from "./results_page"
import CampPage from "./camp_page"
import Itinerary from "./itinerary"
import AboutUs from "./about_us"
import NotFound from './not_found'

import CampInfo from './camp-info'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/search" component={ResultsPage}/>
            <Route path="/camp/:id" component={CampPage}/>
            <Route path="/itinerary" component={Itinerary}/>
            <Route path="/about-us" component={AboutUs}/>
            <Route path="/testing" component={CampInfo} />
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default App;
