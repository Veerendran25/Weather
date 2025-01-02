import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap'
import Form from './Form';
import Sp from './Swiper';



const Header = () => {
    
    useEffect(()=>{
        gsap.from(".Header h1 span",
            {
                y:80,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            }
        )
    }
    )
    const func=()=>
    {
        let tl=gsap.timeline()

        tl.to(".b",
            {
                opacity:0,
                duration:0.6,
                y:-200,
                ease: "bounce.out",
            }
        )
        
        tl.to(".si",
            {
                left:0,
                duration:1,
                stagger:0.3
            }
        )
        tl.to(".cancel",
            {
                opacity:1,
            }
        )
    }
    const reverse=()=>
        {
            let tl=gsap.timeline()
        tl.to(".si",
            {
                left:"-40%",
                duration:1,
                stagger:0.3
            }
        )
        
        tl.to(".b",
            {
                opacity:1,
                duration:0.8,
                y:0,
                ease: "bounce.out",
            },"-=1"
        )
        tl.to(".cancel",
            {
                opacity:0,
            },"-=1"
        )
        
        }
    return (
        <div>
        <div className='b'>
        <div className='Header' onClick={()=>func()}>
            <span className="material-symbols-outlined cloud-icon">cloud</span>
            <h1>
                <span>W</span>
                <span>e</span>
                <span>a</span>
                <span>t</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span> </span>
                <span>A</span>
                <span>p</span>
                <span>p</span>
            </h1>
        </div>
        </div>
    
        <div className='side si'>
            <div className='slide1 si'>
                <div className='slide2 si'>
                    <div>
                    <span className="material-symbols-outlined  cancel" onClick={()=>reverse()}>cancel</span>
                    <Form/>
                    </div>
                </div>
            </div>
        </div>
        <div className='model'>
            <Sp/>
        </div>
        </div>
    );
};

export default Header;
