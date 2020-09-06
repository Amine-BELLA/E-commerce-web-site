import React from 'react';
import './LandingPage.css'
import Image from './LandingPage.png';

function LandingPage() {
    return (
        <div>
            <text>AB</text>
            <div className='landing-page'>
                <img src={Image} />
                <div className='landing-content'>
                    <h1 class="display-4">
                        <span style={{ "color": "#ff9391" }}>AB</span> <br />
                        <span style={{ "color": "#fddc71" }}>SHOP</span>
                    </h1>
                    <h4 style={{ "color": "#596e79" }}>Shop Anywhere... Anytime!</h4>
                    <p style={{ "color": "#596e79" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua..</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;