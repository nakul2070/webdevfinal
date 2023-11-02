function timelineone(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            scrub:1,
            pin:true
    
          
    
        }
    })
    tl.to("#circle #btm img",{
        scale:1,
        rotate:"-180deg",
        duration:1,
        stagger:.1,
        ease: Power1
    },"hello")
    tl.to("#circle #top img",{
        scale:1,
        duration:1,
        stagger:.1,
        ease: Power1
    },"hello")
    tl.to( "#imag img",{
        scale:"0",
        duration:1,
        stagger:.1,
        ease: Power1
    },"hello")
    tl.to("#overlay>h1#gallery",{
        bottom:"-50%",
        duration:4,
        ease: Power1
    },"hello")
    tl.to( "#gola",{
        top:"50%",
        scale:2,
        ease: Power1
    },"hello")
    tl.to( "#centering h5",{
        opacity:0,
        duration:1,
        stagger:.1,
        ease: Power1
    },"hello")
    tl.to( "#circle",{
        scale:0.6,
        duration:1,
        ease: Power1
    },"hello")
    tl.to( "#smlcircle",{
        scale:0,
        duration:2,
        ease: Power1
    },"hello2")
    tl.to( "#circle",{
        scale:0,
        duration:2,
        ease: Power1
    },"hello2")
    tl.to( "#gola",{
        opacity:0,
        duration:2.2,
        ease: Power1
    },"hello2")
    tl.to( "#overlay>h1#pink",{
        bottom:"8%",
        rotate:0,
        ease: Power1
    },"hello2")
    tl.to( "#card",{
        top:"15%",
        ease: Power1,
        duration:4
    },"hello2")
    tl.to( "#card",{
        top:"-100%",
        delay:5,
        ease: Power1,
        duration:5
    },"hello2")
    
}
function timelinetwo(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            scrub:1,
            pin:true,
            start:"top top",
            end:"bottom -100%"
        }
    })
    tl2.to(".circle",{
        top:"50%",
        delay:1,
        stagger:0.1,
        duration:1,
        ease: Power1
    })
    tl2.to(".circle",{
        left:"50%",
        stagger:0.1,
        ease: Power1
    })
    tl2.to(".pi",{
        scale:10,
        ease: Power1
    })
    tl2.to(".pi",{
        background:"linear-gradient(to right,#d5a7b4,#b4aad5)",
        ease: Power1
    })
    tl2.to("#stop h1",{
        left:"-300%",
        duration:8,
        ease: Power1
    },"a")
    tl2.to("#sbtm #one",{
        opacity:0,
        duration:3,
        ease: Power1

      
    },"a")
    tl2.to("#sbtm #two",{
        opacity:1,
        duration:3,
        ease: Power1,
        delay:1
      
    },"a")
}

timelineone()
timelinetwo()


