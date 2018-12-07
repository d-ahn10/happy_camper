import React, {Component} from 'react';
import LocationSearchInput from './input_search'
import {Link} from "react-router-dom"
import '../assets/css/landingPage.css';
import logo from "../assets/images/happy-camper-logo1-white.png";


export default class LandingPage extends Component {

    sendToItinerary = (e) => {
        this.props.history.push({
            pathname: '/itinerary'
        });
    }

    render(){
        return (
            <div>
                <div className="itinerary-logo" onClick={this.sendToItinerary} title="Itinerary"></div>
                <div className="landing-page-background1"></div>
                <div className="landing-page-background2"></div>
                <div className="landing-page-background3"></div>
                <div className="landing-page-container">
                    <img className="logo" src={logo}/>
                    <form>
                        <LocationSearchInput class="landing-page-input" push={this.props.history.push}/>
                    </form>
                </div>
            </div>
        )
    }
}
