import React, { useEffect } from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Avatar, Container } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StylesStories.css'

export default function Stories() {
    useEffect(()=>{
        AOS.init({duration: 1200})
    },[])
    return (
        <div>
            <Container>
                <div  className='main_story'>
                    <FormatQuoteIcon className='quote' />
                    <div className='flexCol'>
                        <p className='clients_text1'>
                        <span>Smart Dev</span> is not only deliver the platform for our product, they also deliver their thinking process, a lot of usability and experience input. As the result, after the first release of our marketing website rebuilt, our conversion rate turns double! What a big impact!"
                        </p>
                    </div>
                    <div className='flexCol'>
                        <img className='client_main' src='/assets/cl11.png' alt=' ' />
                        <h3 className='ceo'>Ryan Shank</h3>
                        <p className='company_name' >CEO of Phonewagon</p>

                    </div>

                </div>
            </Container>
            <div className='story_feature'>
                <h1 className='clients_title'>
                    What our clients are saying
                </h1>
                {
                    stories.map(story=>(

                        <div data-aos='fade-up' key={story.id} className={story.reverse ?'client_story_container reverse': 'client_story_container'}>
                            <Avatar className='avatar' src={story.image}/>
                            <div className='mr-4' >
                                <p className='clients_text2'>
                                    "{story.text}"
                                </p>
                                <h3 className='ceo'> {story.name}</h3>
                                <p className='company_name'>{story.company}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


const stories=[
    
    {
        id: 1,
        name: 'Semanticbits',
        company:'Zednode',
        text:"Working with Smart Dev is a breath of fresh air, they delivered my project on time and exceeded my expectations. I'm especially fond of their beautiful and insightful illustrations !",
        reverse:false,
        image:'/assets/cl4.png'
    },
    {
        id: 2,
        name: 'Jamie Davidson',
        company:'Vitally',
        text:"The folks at Smart Dev are simply outstanding! With minimal guidance, they are able to produce some seriously amazing, high-quality work in a fraction of time it takes most others. They were the first team we reached out to when needing more developing work, and they'll be the first the next time too!",
        reverse:true,
        image:'/assets/cl1.jpeg'
    },
    {
        id: 3,
        name: 'Adam',
        company:'Adam Schools',
        text:"Smart Dev exceeded all our expectations in developing our platform. Fall and the team understood our requirements and the aesthetic we were going for. They were able to quickly deliver, keeping us involved at every step, until we had something we are very proud of.",
        reverse:false,
        image:'/assets/cl8.png'
    },
    {
        id: 4,
        name: 'Agnyia',
        company:'Manager in TSU',
        text:"Fall and his team went above and beyond our expectations here at hangout club. They were very flexible with our needs, and didn’t stop until we were completely satisfied with our website. Our requirements were quite complex. We’ll definitely be working with them going forward.",
        reverse:true,
        image:'/assets/cl2.png'
    },
    {
        id: 5,
        name: 'Mitchell James',
        company:'CMO of Onsched',
        text:"Smart Dev has consistently delivered above and beyond my expectations! Brilliant work, incredible response time and a really friendly team - I strongly recommend them.",
        reverse:false,
        image:'/assets/cl3.png'
    },
    {
        id: 6,
        name: 'Maria',
        company:'OkeyShool',
        text:"Working with Fall and the rest of the team at Smart Dev has been a pleasure. They produce very high quality, and are always very receptive to feedback",
        reverse:true,
        image:'/assets/cl6.png'
    },
]