import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { weatherStore } from 'js/components/weather/WeatherStore';

import UserInputDisplay from 'js/components/weather/user-input/UserInputDisplay';
import MaxChanceOfRain from 'js/components/weather/user-input/rain/MaxChanceOfRain';
import Illustration from 'js/components/weather/illustration/Illustration'

class Rain extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(max) {
        this.setState({ maxChanceOfRain: max })
    }
    
    render() {
        return (
            <div className="sequence-input">
                <Illustration tempIntensity={4} chanceOfRain={100} rainIntensity={5}/> 
                <div className="display">
                    <UserInputDisplay name="Max chance of rain" value={`${this.state.maxChanceOfRain}%`} />
                </div>
                <div className="slider">
                    <MaxChanceOfRain value={this.state.maxChanceOfRain} handleSlide={this.handleSlide}/>
                </div>
                <Link to="/result"><button className="sequence-button">Okay!</button></Link>
            </div>
        );
    }
}

export default Rain;