import React from 'react'
import { useHistory } from 'react-router-dom'
import './styleFooterMain.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import FacebookIcon from '@material-ui/icons/Facebook';

import GitHubIcon from '@material-ui/icons/GitHub';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, Hidden, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import Footer from '../Footer/Footer';


export default function FooterMain() {
    const history = useHistory()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <> 
        { !matches?
            <> 
            
            <div className='footer_main'>
                <div className='footer_top'>
                    <h1 className='footer_title'>Our Clients</h1>
                    <p className='footer_text'>
                    We like to build close relationships with our clients. We believe dynamic collaboration is the only way to get the job done well. See what they said about us in <span onClick={()=>history.push('/customers')}>customer stories.</span>
                    </p>
                </div>
                <div className='footer_bottom'>
                    <div className='top_footer'>
                    <div>
                        <h1 className='footer_title'>
                        Interested in <br />Collaboration?
                        </h1>
                        <br /><br />
                        <p className='footer_text'>
                        Challenge us. We want to work with you to create the really cool stuff.
                        </p>
                    </div>
                    <button className='nav_button btn_plus' onClick={()=>history.push('/contact')}>
                        Let's Talk
                        <ArrowRightAltIcon/>
                        </button>
                    </div>
                    <div className='footer_container'>
                    <Hidden smDown>
                        <div className='footer_right'>
                            <div className='icon_footer' onClick={()=>history.push('/')}>
                                <IconButton> <HomeIcon /> </IconButton>
                                <Button className='button_footer'>Home</Button>
                            </div>
                            <div className='icon_footer' onClick={()=>history.push('/project')}>
                                <IconButton> <CodeIcon /> </IconButton>
                                <Button className='button_footer'>Projects</Button>
                            </div>
                            <div className='icon_footer' onClick={()=>history.push('/about')}>
                                <IconButton><InfoIcon /></IconButton>
                                <Button className='button_footer'>
                                    About Us
                                </Button>
                            </div>
                            <div className='icon_footer' onClick={()=>history.push('/about')}>
                                <IconButton><ContactPhoneIcon /></IconButton>
                                <Button className='button_footer'>
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </Hidden>

                        <div className='footer_middle'>
                            <div className='logo_container'>
                                <img src='/assets/Logo-smart.png' alt='Logo' className='logo' />
                            </div>
                            <p className='copyright'> 2018 &copy; Copyright by SMART DEV</p>
                        </div>
                        <Hidden smDown>
                        <div className='footer_right'>
                            <h3>Socially you will find us on</h3>
                            <br/>
                            <div className='icon_footer' onClick={()=>history.push('/')}>
                                <IconButton> <GitHubIcon /> </IconButton>
                                <Button className='button_footer'>GitHub</Button>
                            </div>
                            <div className='icon_footer' onClick={()=>history.push('/project')}>
                                <IconButton> <FacebookIcon /> </IconButton>
                                <Button className='button_footer'>Facebook</Button>
                            </div>
                            <div className='icon_footer' onClick={()=>history.push('/about')}>
                                <IconButton><TwitterIcon /></IconButton>
                                <Button className='button_footer'>
                                Twitter
                                </Button>
                            </div>
                        </div>
                    </Hidden>
                

                    </div>
                </div>
            </div>
            </>: 
            <Footer />
        }
        
        </>
    )
}
