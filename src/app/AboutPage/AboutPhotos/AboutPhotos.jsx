import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPhotos.css'

export default function AboutPhotos() {
    useEffect(()=>{
        AOS.init({duration: 550})
    },[])
    return (
        <>
        <div className='emoji_container'>
                <span className='emoji'>🤝</span>
                <h1>The People Ready to Innovate with You</h1>
                <p>
                    We are called experts because we have the skills and knowledge that the possibility of creative discovery is unlimited.
                </p>
            </div>
            <div className='about_photos'>
            {
                devs.map(dev =>(
                    <div key={dev.id} className='about_photo' data-aos='fade-up'>
                        <img src={dev.image} alt=' ' />
                        <h3>{dev.name}</h3>
                        <p>{dev.position}</p>
                    </div>

                ))
            }
        </div>
        </>
    )
}

const devs =[
    {
        image:"/assets/dev2.png",
        id:2,
        name:'Candra Waskito',
        position:'IT Manager'
    },
    {
        image:"/assets/dev1.png",
        id:1,
        name:'Yogie Adam',
        position:'Project Officer'
    },
    {
        image:"/assets/dev4.png",
        id:3,
        name:'Masha Skepa',
        position:'Frontend developer'
    },
    {
        image:"/assets/dev6.png",
        id:4,
        name:'Patya Pindo',
        position:'Mobile app developer'
    },
    {
        image:"/assets/dev7.png",
        id:5,
        name:'Mohamoud Oda',
        position:'Backend developer'
    },
    {
        image:"/assets/dev3.png",
        id:6,
        name:'Kelen Indah',
        position:'Mobile app developer'
    },
    {
        image:"/assets/dev8.png",
        id:8,
        name:'Mohamed Youssef',
        position:'Frontend developer'
    },
    {
        image:"/assets/dev10.png",
        id:9,
        name:'Mohamed Hassan',
        position:'designer & Animator'
    },
    // {
    //     image:"/assets/dev1",
    //     id:1,
    //     name:'Yogie Adam',
    //     position:'Project Officer'
    // },
]