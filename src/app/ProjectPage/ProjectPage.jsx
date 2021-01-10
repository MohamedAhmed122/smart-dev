
import React from 'react'
import ProjectIntro from './ProjectIntro/ProjectIntro'
import Projects from './Projects/Projects'
import Navbar from '../Layouts/Navbar/Navbar/Navbar'

export default function ProjectPage() {
    return (
        <div>
           <Navbar />
           <ProjectIntro />
           <Projects />
        </div>
    )
}