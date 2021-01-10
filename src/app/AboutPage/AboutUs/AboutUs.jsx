import React from 'react'

import {  Container } from '@material-ui/core'

import './StyleAboutUs.css'


export default function AboutUs() {
    return (
        <div className='about_intro'>
            <img  src='/assets/teamwork2.svg' alt='Mohamed Youssef'/>
            <Container>
                <div className='intro_features'>
                    <div className='about_feature_left'>
                        <h1>Our Vision</h1>
                        <p>
                        Our vision is to discover rich possibilities of reaching many people through our works, by teaming up with many great clients.
                        </p>
                        <br /> <br />
                        <p>
                        Our mission is to create platforms with excellent aesthetic and functionality based on deep understanding towards the product and product users.
                        </p>
                    </div>
                    <div className='about_feature_right'>
                        <p>
                             Measuring programming progress by lines of code is like measuring aircraft building progress by weight.

                        </p>
                        <br /> <br />
                        <h3>-Bill Gates</h3>
                    </div>
                </div>
            </Container>
        </div>
    )
}


