Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover", {videos: []}); //yes i have left this intentionally blank to achieve my desired effect

gsap.set(".bigimage", {
  y: "-70%",
  width: "90%",
})

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#homemain",
    // scroller: "#main",
    pin: true,
    // markers: true,
    start: "-10% top",
    end: "120% center",
    scrub: 1,
  },
})

tl1.to(".bigimage", {
  y: "-100%",
  ease: "power1.out",
}).to(".bigimage", {
  width: "100%",
  ease: "power1.out",
})



gsap.to(".elem", {
  scrollTrigger: {
    trigger: "#models",
    pin: true,
    start: "top top",
    end: "+=5000",
    // markers: true,
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-400%",
  ease: "power1.out",
});


let sections = document.querySelectorAll(".elem")

Shery.imageEffect(".images", {
  style: 4,
  // debug: true,
  // config: {},
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

