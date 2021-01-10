import React from 'react'

import Navbar from '../../Layouts/Navbar/Navbar/Navbar'
import LottieView from '../../Components/lottieView/lottieView'
import Animation from '../../animation/anmi.json'

import { Container } from '@material-ui/core'



import './StyleHero.css'

export default function Hero() {

    const handleScroll =(values)=> window.scrollTo({top:values,behavior: 'smooth'})

    return (
        <div className='hero'>
            <div className='mrg-3'>
                <Navbar />
                <Container>
                    <div className='hero_block'>
                        <div className='hero_left'>
                            <p className='hero_main_text'> 
                                My Name is Mohamed <span>&</span> I build things on the internet 
                            </p>
                            <p className='hero_sub_text'>
                                We develop and design website and mobile & desktop application
                            </p>
                            <div className='hero_btn'>
                                <button className='projects_btn' onClick={()=>handleScroll(900)}>Projects</button>
                            </div>
                        </div>
                        <div className='hero_right'>
                            <LottieView animation={Animation} width={500} height={500} />
                        </div>
                    </div>
                </Container>

            </div>
        </div>

    )
}