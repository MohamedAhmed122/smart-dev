
import AboutHeader from './AboutHeader/AboutHeader'
import AboutUs from './AboutUs/AboutUs'
import AboutPhotos from './AboutPhotos/AboutPhotos'

import Navbar from '../Layouts/Navbar/Navbar/Navbar'

export default function AboutPage() {
    return (
        <div>
            <Navbar />
           <AboutHeader />
           <AboutUs />
           <AboutPhotos />
        </div>
    )
}