Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover", {videos: []}); //yes i have left this intentionally blank to achieve my desired effect

gsap.set(".bigimage", {
  y: "-70%",
  width: "90%",
});
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#homemain",
      pin: true,
      start: "-15% top",
      end: "120% center",
      scrub: 1,
    },
  });

  tl1.to(".bigimage", {
    y: "-100%",
    ease: "power1.out",
  }).to(".bigimage", {
    width: "100%",
    ease: "power1.out",
  });

  return () => {
    tl1.kill(); // Cleanup when conditions no longer match
  };
});


mm.add("(min-width: 768px)", () => {
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

  return () => {
    ScrollTrigger.getAll().forEach(st => st.kill()); // Cleanup when screen size changes
  };
});


let sections = document.querySelectorAll(".elem");

// Use matchMedia to check for screen width
// let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  Shery.imageEffect(".images", {
    style: 4,
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

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup on screen size change
  };
});


