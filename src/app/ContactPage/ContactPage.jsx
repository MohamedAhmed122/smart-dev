import React from 'react'


import ContactMain from './ContactMain/ContactMain'
import ContactSide from './ContactSidebar/ContactSidebar'
import ContactNav from '../Layouts/Navbar/ContactNav/ContactNav'

import './StyleContact.css'

export default function ContactPage() {
    return (
        <div style={{backgroundColor: '#eefcfd',}}>
            <ContactNav />
            <div className='contact_page' >
                <div className='contact_page_left' >
                    <ContactSide />
                </div>
                <div className='contact_page_right'>
                    <ContactMain />
                </div>
            </div>
        </div>
    )
}