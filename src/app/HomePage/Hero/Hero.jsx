import React, { useEffect } from 'react'

import Navbar from '../../Layouts/Navbar/Navbar/Navbar'
import LottieView from '../../Components/lottieView/lottieView'
import Animation from '../../animation/anmi.json'

import { Container } from '@material-ui/core'
import AOS from 'aos';
import 'aos/dist/aos.css';


import './StyleHero.css'

export default function Hero() {

    const handleScroll =(values)=> window.scrollTo({top:values,behavior: 'smooth'})
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])

    return (
        <div className='hero'>
            <div className='mrg-3'>
                <Navbar />
                <Container>
                    <div className='hero_block'>
                        <div data-aos='fade-right' className='hero_left'>
                            <p className='hero_main_text'> 
                                We are Information Technology <span>&</span> Services Provider
                            </p>
                            <p className='hero_sub_text'>
                                We develop and design website, mobile App & desktop application
                            </p>
                            <div className='hero_btn'>
                                <button className='projects_btn' onClick={()=>handleScroll(900)}>Projects</button>
                            </div>
                        </div>
                        <div data-aos='fade-left' className='hero_right'>
                            <LottieView animation={Animation} width={500} height={500} />
                        </div>
                    </div>
                </Container>

            </div>
        </div>

    )
}