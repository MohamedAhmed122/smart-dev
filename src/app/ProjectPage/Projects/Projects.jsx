import React, { useEffect } from 'react'

import LanguageIcon from '@material-ui/icons/Language';

import { Container } from '@material-ui/core'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StyleProjects.css'

export default function Projects() {
    useEffect(()=>{
        AOS.init({duration: 1400})
    },[])
    return (
        <div className="projects_" style={{backgroundColor: '#eefcfd',}}>
          <Container>
              {
                  data.map(project=>(
                <div data-aos='fade-up' key={project.id}>
                <div 
                    className={project.class} 
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
        image : '/assets/hang1.png',
        header: 
        'Home Page contain Some animation and description about the App, Main Functionality : Create events, Filter events Google & Facebook Authentication, Join Events, Create Profile, And Finally Chatting in the Community  ',
        webLink:'https://hangout-club.web.app',
        class:'bg'

    },
    {
        id: 2,
        image : '/assets/ecommerce1.png',
        header: 
        "E-commerce Website, Login/ Registration, Add item to cart, Shipping System Payment system  Admin Panel where Admin Can control Users, Products and orders",
        webLink:'https://pro-e-commerce.herokuapp.com',
        class:'bg'
    },
   
    {
        id: 8,
        image : '/assets/AdamSchool4.png',
        header: 
        "It is a School Website where you can find your teacher or schools online or offline and user can contact with them and they can assign homework throw the platform and schools and much more",
        webLink:'https://adamschool.herokuapp.com/',
        class:'bg bg2'
    },
    {
        id: 3,
        image : '/assets/freelancer5.png',
        header: 
        "It is a Freelancing Platform for the Senegal to help people to freelance and it contains all the features like create profile chat functionality and payment system and review & rating  ",
        webLink:'https://www.senfreelance.com/',
        class:'bg'
    },
    {
        id: 11,
        image : '/assets/OkeySchool2.png',
        header: 
        "It is a School Website where you can find your teacher or schools online or offline and user can contact with them and they can assign homework throw the platform and schools and much more",
        webLink:'https://okeyschool.herokuapp.com/',
        class:'bg bg2'
    },
    {
        id: 10,
        image : '/assets/covid1.png',
        header: 
        'Covid-19 tracker, You can See Country Live Cases, Cases, deaths and Recovered, for every Country & map that display data for each country, and finally Graph  ',
        webLink:'https://covid1-9.web.app',
        class:'bg'
    },
    {
        id: 4,
        image : '/assets/done1.png',
        header: 
        'Done With It (Mobile App), Where you can sell your old item online, Functionality Login/Register Access Camera And Location CRUD Functionality Sending Messages ',
        webLink:'https://github.com/MohamedAhmed122/React-native-doneWithIT',
        class:'bg'
    },
    {
        id: 5,
        image : '/assets/forget1.png',
        header: 'Not To Forget (Mobile App),Sophisticated To do Tasks, Login/Register, then You can Create Tasks & Create Category & CRUD Functionality',
        webLink:'https://github.com/MohamedAhmed122/Not-to-Forget---React-native',
        class:'bg'

    }
]