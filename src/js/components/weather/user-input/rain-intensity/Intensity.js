import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { weatherStore } from 'js/components/weather/WeatherStore';

import UserInputDisplay from 'js/components/weather/user-input/UserInputDisplay';
import maxRainIntensity from 'js/components/weather/user-input/rain-intensity/MaxRainIntensity';

class Intensity extends Component {
    constructor(props) {
        super(props);
        this.state = weatherStore.getState();
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(max) {
        this.setState({ maxRainIntensity: max })
    }
    
    render() {
        return (
            <div className="sequence-input">
                <div className="display">
                    <UserInputDisplay name="Possible rain intensity" value={`${this.state.maxRainIntensity}" / second`} />
                </div>
                <div className="slider">
                    <MaxRainIntensity value={this.state.maxRainIntensity} handleSlide={this.handleSlide}/>
                </div>
                <Link to="/result"><button className="sequence-button">Okay!</button></Link>
            </div>
        );
    }
}

export default Intensity;