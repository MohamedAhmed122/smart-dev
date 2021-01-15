
import React, { useState } from 'react'
import ProjectIntro from './ProjectIntro/ProjectIntro'
import Projects from './Projects/Projects'
import Navbar from '../Layouts/Navbar/Navbar/Navbar'
import { IconButton } from '@material-ui/core';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

export default function ProjectPage() {
    const [nav, setNav] = useState(false)
    const handleNav=()=>{
        if (window.scrollY >= 500){
          setNav(true)
        }else{
          setNav(false)
        }
      }
      window.addEventListener('scroll',handleNav)
      const handleScroll =(values)=> window.scrollTo({top:values,behavior: 'smooth'})
    return (
        <div>
           <Navbar />
           <ProjectIntro />
           <Projects />
           {nav &&
           
           <div style={{
               bottom:'4rem',
               right:'4rem',
               position:'fixed',
               
           }}> 
               <IconButton
               onClick={()=>handleScroll(100)}
                style={{
                    backgroundColor: '#f7c52f',
                    boxShadow:'0 30px 100px 30px rgba(118,118,197,0.1)'
                }}
               >
                   <PlayForWorkIcon 
                   fontSize='large'
                    style={{
                        color:"white",
                        transform:'scaleY(-1)'
                    }}
                   />
               </IconButton>
           </div>
           }
        </div>
    )
}