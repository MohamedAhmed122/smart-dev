import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MenuIcon from '@material-ui/icons/Menu';



import './StyleNavbarResponsive.css'

export default function NavbarResponsive() {
    const history = useHistory()
    const [menu, setMenu] = useState(false)

    const handleNavigation = (route) =>{
        if (route === 'home'){
            history.push('/')
            setMenu(false)
        }
        if (route === 'about'){
            history.push('/about')
            setMenu(false)
        }
        if (route === 'project'){
            history.push('/project')
            setMenu(false)
        }
        if (route === 'contact'){
            history.push('/contact')
            setMenu(false)
        }
        if (route === 'customers'){
            history.push('/customers')
            setMenu(false)
        }
    }
    return (
        <div className='menu'>
            <div className='menu_container'>
                <div onClick={() => history.push('/')}>
                    <img className='logo' src='/assets/Logo-smart.png' alt='logo' />
                </div>
                <div className='contact_btn close_menu'>
                {
                    menu?
                    <button className='close_btn'>
                        Close
                        <HighlightOffIcon className='close_icon' onClick={()=>setMenu(false)}/>
                    </button>:
                     <button className='open_btn' onClick={()=>setMenu(true)}>
                        open
                        <MenuIcon fontSize='small' className='close_icon' />
                    </button>
                }
                
                </div>
            </div>
            {
                menu &&
                <div className='menu_links'>
                    <div className='menu_link' onClick={()=>handleNavigation('home')} >Home</div>
                    <div className='menu_link' onClick={()=>handleNavigation('project')}>Projects</div>
                    <div className='menu_link' onClick={()=>handleNavigation('about')}>About</div>
                    <div className='menu_link' onClick={()=>handleNavigation('contact')} >Contact</div>
                    <div className='menu_link' onClick={()=>handleNavigation('customers')} >Customer Stories</div>
                </div>
            }   
        </div>
    )
}
