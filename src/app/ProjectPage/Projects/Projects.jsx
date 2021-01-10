import React from 'react'

import LanguageIcon from '@material-ui/icons/Language';

import { Container } from '@material-ui/core'
import './StyleProjects.css'

export default function Projects() {
    return (
        <div className="projects_" style={{backgroundColor: '#eefcfd',}}>
          <Container>
              {
                  data.map(project=>(
                <div key={project.id}>
                <div 
                    className='bg' 
                    style={{backgroundImage: `url(${project.image})`,}}
                    />
                    <div className='project_main_text_container'>
                        <h2>Description</h2>
                        <p>{project.header}</p>
                        <div className='btn_group'>
                            <a target="_blank" 
                                rel="noopener noreferrer" 
                                href={project.webLink}
                            > 
                                <button className='project_btn'>
                                Live Now  <LanguageIcon />
                                </button>
                            </a> 
                        </div>
                    </div>
                    </div>
                  ))
              }
          </Container>
        </div>
    )
}


const data = [
    {
        id: 1,
        image : '/assets/hang.png',
        header: 
        'Home Page contain Some animation and description about the App, Main Functionality : Create events, Filter events Google & Facebook Authentication, Join Events, Create Profile, And Finally Chatting in the Community  ',
        webLink:'https://hangout-club.web.app',

    },
    {
        id: 2,
        image : '/assets/ecommerce.png',
        header: 
        "E-commerce Website, Login/ Registration, Add item to cart, Shipping System Payment system  Admin Panel where Admin Can control Users, Products and orders",
        webLink:'https://pro-e-commerce.herokuapp.com',
    },
    {
        id: 10,
        image : '/assets/covid.png',
        header: 
        'Covid-19 tracker, You can See Country Live Cases, Cases, deaths and Recovered, for every Country & map that display data for each country, and finally Graph  ',
        webLink:'https://covid1-9.web.app',
    },
    {
        id: 3,
        image : '/assets/shoty.png',
        header: 
        'Clothing e-commerce store, where can Login/Register & Google Authentication  then You can Add Item to cart, payment system using stripe ',
        webLink:'https://github.com/MohamedAhmed122/Shoty',
    },
    {
        id: 4,
        image : '/assets/done.png',
        header: 
        'Done With It (Mobile App), Where you can sell your old item online, Functionality Login/Register Access Camera And Location CRUD Functionality Sending Messages ',
       
        webLink:'https://github.com/MohamedAhmed122/React-native-doneWithIT',
    },
    {
        id: 5,
        image : '/assets/forget.png',
        header: 'Not To Forget (Mobile App),Sophisticated To do Tasks, Login/Register, then You can Create Tasks & Create Category & CRUD Functionality',
        webLink:'https://github.com/MohamedAhmed122/Not-to-Forget---React-native',

    }
]