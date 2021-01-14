import React, { useEffect } from 'react'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './ProjectReview.css'

import { useSpring, animated } from 'react-spring'
import { Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(10000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function ProjectPreview() {
    
    useEffect(()=>{
        AOS.init({duration:1000})
    })
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 100, friction: 70 } }))
    const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 100, friction: 70 } }))
    const [props3, set3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 100, friction: 70 } }))
    const [props4, set4] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 100, friction: 70 } }))

    const history = useHistory()
    return (
        <Container style={{marginBottom: '10rem'}}>
            <div className='projects_text'>
                <p data-aos='fade-right' className='project_text_main'> Our Projects</p>
                <h3 data-aos='fade-left'> Our work is the bridge to various insightful digital experiences.</h3>
            </div>
           <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='http://hangout-club.firebaseapp.com/'
            >
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url('/assets/hang1.png')`,
                    transform: props.xys.interpolate(trans)
                }}
                className='bg hangout'
                >
                   
            </animated.div>
            </a>

           
            <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://okeyschool.herokuapp.com/'
            >
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: calc(x, y) })}
                onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url('/assets/OkeySchool2.png')`,
                    transform: props2.xys.interpolate(trans)
                }}
                className='bg bg2'
            >
            </animated.div>
            </a>
            <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://adamschool.herokuapp.com/'
            >
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set3({ xys: calc(x, y) })}
                onMouseLeave={() => set3({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url('/assets/AdamSchool4.png')`,
                    transform: props3.xys.interpolate(trans)
                }}
                className='bg bg2'
            >
              
            </animated.div>
            </a>
            <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://www.senfreelance.com/'
            >
                <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set4({ xys: calc(x, y) })}
                    onMouseLeave={() => set4({ xys: [0, 0, 1] })}
                    style={{
                        backgroundImage: `url('/assets/freelancer5.png')`,
                        transform: props4.xys.interpolate(trans)
                    }}
                    className='bg'
                    >
                </animated.div>

            </a>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'3rem'
            }}>
                <button data-aos='fade-left' onClick={()=> history.push('/project')} className='project_btn'>
                    See More Projects <ArrowRightAltIcon />
                </button>
            </div>   

        </Container>
    )
}