import React from 'react'

import StopIcon from '@material-ui/icons/Stop';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BrushIcon from '@material-ui/icons/Brush';

import './ProjectIntro.css'
import { Container } from '@material-ui/core';

export default function ProjectIntro() {

    const handleScroll =(values)=> window.scrollTo({top:values,behavior: 'smooth'})
      
    return (
        <div className='project_header'>
            <Container>
                <p className='project_header_text'>
                    We will take your business idea<br />
                    to the next level
                </p>
                <div className='select' onClick={()=>handleScroll(650)}>
                    <p>Show Me <span>Everything</span></p>
                </div>

                <div className='project_select'>
                    <div className='project_select_container' onClick={()=>handleScroll(650)}>
                        <p>Websites</p>
                        <StopIcon  className='icon1' />
                    </div>
                    <div className='project_select_container' onClick={()=>handleScroll(5750)}>
                        <p>Mobile App</p>
                        <FiberManualRecordIcon  className='icon2' />
                    </div>
                    <div className='project_select_container'>
                        <p>Design</p>
                        <BrushIcon className='icon3' />
                    </div>
                    <div className='project_select_container' >
                        <p>Animation</p>
                        <DashboardIcon className='icon4' />
                    </div>
                </div>

            </Container>
        </div>
    )
}
