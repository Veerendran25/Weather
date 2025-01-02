import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap'

const Body = () => {

    useEffect(() => {
        gsap.to(".c-image.one ", {
            x: 1500,
            opacity:0.5,
            duration: 40,
            repeat:-1,
            ease: "linear"        
        });
        gsap.to(".c-image.two ", {
            x: 1650,
            opacity:0.5,
            duration: 45,
            repeat:-1,
            ease: "linear" ,
            delay:1,       
        });
        gsap.to(".c-image.three ", {
            x: 2600,
            opacity:0.5,
            duration: 50,
            repeat:-1,
            ease: "linear",
            delay:1.5,        
        });
        gsap.to(".c-image.four ", {
            x: 3200,
            opacity:0.5,
            duration: 55,
            repeat:-1,
            ease: "linear" ,
            delay:1.6,      
        });
        gsap.to(".c-image.five ", {
            x: 2000,
            opacity:0.5,
            duration: 60,
            repeat:-1,
            ease: "linear" ,
            delay:6,      
        });
        gsap.to(".c-image.six ", {
            x: 2100,
            opacity:0.5,
            duration: 60,
            repeat:-1,
            ease: "linear" ,
            delay:15,      
        });
        gsap.to(".p-image ", {
            x: 10500,
            opacity:1,
            duration: 66,
            repeat:-1,
            ease: "linear" ,
            delay:10.6,      
        });
    }, []);

    const Stars=()=>
        {
            const tl=gsap.timeline()

            tl.to(".cloud-image",
                {
                    opacity:0.4,
                    duration:1
                }
            )
            
            tl.to(".st-image",
                {
                    opacity:1,
                    y:0,
                    duration:1,
                    stagger:0.4,
                    ease:"bounce.out"
                }
            )
            tl.to(".s-image",
                {
                    top:"100%",
                    right:"50%",
                    duration:4
                },"-=8"
            )
            tl.to(".m-image",
                {
                    duration:4,
                    right:"25%",
                    top:"2%",
                    opacity:1
                },"-=5"
            )
            tl.to(".s",
                {
                    opacity:0,
                    top:"99%",
                    duration:1
                },"-=6"
            )
            tl.to(".sM",
                {
                    top:"5%",
                    duration:2,
                    ease:"bounce.in"
                },"-=5"
            )
        } 
    
        const Sun=()=>
            {
                const tl=gsap.timeline()
    
                tl.to(".cloud-image",
                    {
                        opacity:1,
                        duration:4
                    }
                )
                
                tl.to(".st-image",
                    {
                        opacity:0,
                        y:-100,
                        duration:1,
                        stagger:0.4,
                        ease:"bounce.out"
                    },"-=5"
                )
                tl.to(".m-image",
                    {
                        top:"120%",
                        right:"-50%",
                        duration:4
                    },"-=6"
                )
                tl.to(".s-image",
                    {
                        duration:4,
                        right:"25%",
                        top:"2%",
                        opacity:1
                    },"-=5"
                )
                tl.to(".s",
                    {
                        opacity:1,
                        top:"5%",
                        duration:1
                    },"-=1"
                )
                tl.to(".sM",{
                    top:"-15%",
                    duration:1,
                    ease:"back.inOut"
                },"-=5"
            )
                
            }

return (
    <div >
<div className="image-container">
    <img className="cloud-image" src="../src/assets/pixelcut-export.jpeg" alt="Cloud" />
    <img className="plain-image" src="../src/assets/pixelcut-export.png" alt="Plain" />
    <img className="c-image one" src="../src/assets/pixelcut-export (5).png" alt="cloud" />
    <img className="c-image two" src="../src/assets/pixelcut-export (5).png" alt="cloud" />
    <img className="c-image three" src="../src/assets/pixelcut-export (5).png" alt="cloud" />
    <img className="c-image four" src="../src/assets/pixelcut-export (5).png" alt="cloud" />
    <img className="c-image five" src="../src/assets/pixelcut-export (5).png" alt="cloud" />
    <img className="c-image six" src="../src/assets/pixelcut-export (5).png" alt="cloud" />
    <img className="p-image " src="../src/assets/pixelcut-export (1).png" alt="cloud" />
    <img className="s-image " src="../src/assets/pixelcut-export (2).png" alt="cloud" />
    <img className="m-image" src="../src/assets/pixelcut-export (3).png" alt="moon" />
    <img className="st-image Sone" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image Stwo" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image Sthree" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image Sfour" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image Sfive" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image Ssix" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S7" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S8" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S9" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S10" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S11" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S12" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S13" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S14" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S15" src="../src/assets/pixelcut-export (4).png" alt="star" />
    <img className="st-image S16" src="../src/assets/pixelcut-export (4).png" alt="star" />

</div>
<div className='s'>
        <span className="material-symbols-outlined sun" onClick={()=>Stars()}>
dark_mode
</span>
</div>
<div className='sM'>
<span className="material-symbols-outlined moon " onClick={()=>Sun()}>
light_mode
</span>
</div>
</div>
)
}

export default Body;
