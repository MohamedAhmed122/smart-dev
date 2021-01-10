
import React from 'react'

import './StyleContactSidebar.css'

export default function ContactSide() {
    return (
        <div className='contactSide'>
            <h1 className='contact_header'>
                Hi, let's talk <br />
                about your <br/> 
                project!
            </h1>
            {/* <p className='or'>OR</p> */}
            <h3 className='contact_small_text'>-requirements</h3>
            <h3 className='contact_small_text'>-description</h3>
            <h3 className='contact_small_text'>-time frame</h3>
        </div>
    )
}