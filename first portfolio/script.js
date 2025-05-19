

// This is a simple script to toggle the display of a navigation menu//
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let navUl = document.querySelector('.nav-list');
let navbar = document.querySelector('.navbar');
let childOne = document.querySelector(".home-section .part-one .child-one");
let cvBtn = document.querySelector(".animated-button")


menu.addEventListener('click', () => {
  navUl.classList.add('show');
  menu.style.display = 'none';
  close.style.display = 'block';
  cvBtn.style.display = 'none';
});

close.addEventListener('click', () => {
  navUl.classList.remove('show');
  close.style.display = 'none';
  menu.style.display = 'block';

});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navUl.classList.remove('show');
    menu.style.display = '';
    close.style.display = '';
  }
});

navUl.addEventListener('click', () => {
  if (window.innerWidth < 600) {
    navUl.classList.remove('show');
    close.style.display = 'none';
    menu.style.display = 'block';
  }
});

let cursor = document.querySelector('.cursor');
setTimeout(() => {
  cursor.style.display = "block";
}, 4000)

// JavaScript (optional for page reload)
document.addEventListener("DOMContentLoaded", () => {
  // Trigger reflow to restart animation
  const navItems = document.querySelectorAll('.navbar li');
  navItems.forEach(item => {
    item.style.animation = 'none';
    item.offsetHeight; /* Trigger reflow */
    item.style.animation = null;
  });
});


// JavaScript to wrap words in spans
const textElements = document.querySelectorAll('.child2 p, .child2 h1, .child2 h2');
textElements.forEach(el => {
  const words = el.textContent.split(' ');
  el.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});





// GSAP ANIMATION START HERER

// NAVBAR LI
gsap.from("nav ul li", {
  y: -30,
  x: -10,
  duration: 0.6,
  scale: 0.7,
  opacity: 0,
  delay: 3.2,
  stagger: 0.3,


})
// END NAVBAR 

gsap.from(".miguel", {
  opacity: 0,
  delay: 3.3,
  scale: 0,
})

gsap.registerPlugin(ScrollTrigger);
gsap.from(".container h1", {
  x: -90,
  opacity: 0,
  scale: 0,
  fontSize: "5rem",
  duration: 0.6,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".container h1",
    start: "top 99%",
    toggleActions: "play none none none"
  }
});


// ABOUT
gsap.from(".about-section .about-para1", {
  x: 200,
  opacity: 0,
  delay: 0.3,
  ease: "power2.inOut",
  scrollTrigger: ".about-section .about-para1"
})
gsap.from(".about-section .about-para2", {
  x: -200,
  opacity: 0,
  delay: 0.3,
  ease: "power2.inOut",
  scrollTrigger: ".about-section .about-para2"
})
gsap.utils.toArray(".animate-text").forEach((el) => {
  gsap.from(el, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
gsap.utils.toArray(".animate-text2").forEach((el) => {
  gsap.from(el, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// SKILL
gsap.from(" #all-skill", {
  y: 50,
  opacity: 0,
  scale: 0,
  stagger: 0.15,
  scrollTrigger: " #all-skill"

})
gsap.from(" #all-skill2", {
  y: 50,
  opacity: 0,
  scale: 0,
  stagger: 0.15,
  scrollTrigger: " #all-skill2"

})
gsap.from(" #all-skill3", {
  y: 50,
  opacity: 0,
  scale: 0,
  stagger: 0.15,
  scrollTrigger: " #all-skill3"

})

gsap.from(".using", {
  opacity: 0,
  y: 100,
  stagger: 0.05,
  duration: 0.5,
  ease: "power2.inOut",
  scrollTrigger: ".using"
});
gsap.from(".learninig h2", {
  opacity: 0,
  y: -50,
  stagger: 0.05,
  duration: 0.5,
  ease: "power2.inOut",
  scrollTrigger: ".learninig h2"
});

gsap.from(".other-skill h2", {
  opacity: 0,
  y: -50,
  stagger: 0.05,
  duration: 0.5,
  ease: "power2.inOut",
  scrollTrigger: ".other-skill h2"
});

// HOME SLIDE UP EFFECT IN HOME PAGE
gsap.from(".words span", {
  y: 30,
  x: -50,
  opacity: 0,
  scale: 0.5,
  stagger: 0.4,
  ease: "power2.out",

})

gsap.to(".home-slider", {
  y: "-110%",
  delay: 2.8,
  duration: 2,
  ease: "power2.out",

})
gsap.from(".home-slider p", {
  y: 30,
  opacity: 0,
  delay: 0.6,
  duration: 0.5,
  ease: "power2.out"
})

// HOME SLIDE UP EFFECT IN HOME PAGE CODE END HERE



// PORTFOLIO SLIDER CODE HERE

let coded = document.querySelector(".portfolio .main .slide span:nth-child(2)");
let all = document.querySelector(".portfolio .main .slide span:nth-child(1)");
let design = document.querySelector(".portfolio .main .slide span:nth-child(3)");
let projects = document.querySelector(".portfolio .main .projects");
let currentActive = "all";
coded.addEventListener("click", () => {
  if (currentActive === "coded") return;  // Agar already 'coded' tab hai, kuch na karo
  currentActive = "coded";
  gsap.to(".all", {
    x: "-100%",
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      document.querySelector(".all").style.display = "none";
      document.querySelector(".coded").style.display = "grid";
      gsap.to(".coded", {
        x: "0%",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  })
  gsap.to(".design", {
    x: "100%",
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      document.querySelector(".design").style.display = "none";
      document.querySelector(".coded").style.display = "grid";
      gsap.to(".coded", {
        x: "0%",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  })

  gsap.to(".portfolio .main .slide span:nth-child(2)", {
    color: "white",
    borderBottom: "4px solid white",
    duration: 0.3,
    ease: "power2.out",
  })
  gsap.to(".portfolio .main .slide span:nth-child(1)", {
    color: "#7C7C7C",
    duration: 0.2,

    borderBottom: "4px solid #7C7C7C"
  })

  gsap.to(".portfolio .main .slide span:nth-child(3)", {
    color: "#7C7C7C",
    borderBottom: "4px solid #7C7C7C",
    duration: 0.3,
    ease: "power2.out",
  })
  console.log("coded")

})

all.addEventListener("click", () => {
  if (currentActive === "all") return;  // Agar already 'all' tab active hai, return kar do
  currentActive = "all";  // Nahi toh active tab update karo
  const tl = gsap.timeline();

  tl.to(".coded", {
    x: "100%",
    duration: 0.3,
    ease: "power2.out"
  }, 0); // Start immediately

  tl.to(".design", {
    x: "100%",
    duration: 0.3,
    ease: "power2.out"
  }, 0); // Start with .coded (parallel)

  tl.add(() => {
    document.querySelector(".coded").style.display = "none";
    document.querySelector(".design").style.display = "none";
    const all = document.querySelector(".all");
    all.style.display = "grid";
    gsap.set(all, { x: "-100%" }); // Start from left
  });

  tl.to(".all", {
    x: "0%",
    duration: 0.3,
    ease: "power2.out"
  });
  gsap.to(".portfolio .main .slide span:nth-child(1)", {
    color: "white",
    borderBottom: "4px solid white",
    duration: 0.3,
    ease: "power2.out",
  })

  gsap.to(".portfolio .main .slide span:nth-child(2)", {
    color: "#7C7C7C",
    duration: 0.2,
    borderBottom: "4px solid #7C7C7C"
  })
  gsap.to(".portfolio .main .slide span:nth-child(1)", {
    color: "#7C7C7C",
    duration: 0.2,
    borderBottom: "4px solid #7C7C7C"
  })
  gsap.to(".portfolio .main .slide span:nth-child(3)", {
    color: "#7C7C7C",
    borderBottom: "4px solid #7C7C7C",
    duration: 0.3,
    ease: "power2.out",
  })

  console.log("all")
})

design.addEventListener("click", () => {
  if (currentActive === "design") return;  // Agar already 'design' tab hai, kuch na karo
  currentActive = "design";
  const tl = gsap.timeline();

  // Step 1: Slide out .coded
  tl.to(".coded", {
    x: "-100%",
    duration: 0.3,
    ease: "power2.out"
  });

  // Step 2: Slide out .all
  tl.to(".all", {
    x: "-100%",
    duration: 0.3,
    ease: "power2.out"
  });

  // Step 3: Hide .coded and .all, show .design and set correct start position
  tl.add(() => {
    document.querySelector(".coded").style.display = "none";
    document.querySelector(".all").style.display = "none";

    const designSection = document.querySelector(".design");
    designSection.style.display = "grid";

    // ✅ Set x to "100%" only *after* making it visible
    gsap.set(designSection, { x: "100%" });
  });

  // Step 4: Slide in .design to x: 0%
  tl.to(".design", {
    x: "0%",
    duration: 0.3,
    ease: "power2.out"
  });

  // Update tab styles
  gsap.to(".portfolio .main .slide span:nth-child(3)", {
    color: "white",
    borderBottom: "4px solid white",
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(".portfolio .main .slide span:nth-child(2)", {
    color: "#7C7C7C",
    borderBottom: "4px solid #7C7C7C",
    duration: 0.2
  });
  gsap.to(".portfolio .main .slide span:nth-child(1)", {
    color: "#7C7C7C",
    borderBottom: "4px solid #7C7C7C",
    duration: 0.,
  });

  console.log("design");
});
// PORTFOLIO (WORK) SCROLL ANIMATION HERE USING GSAP
gsap.from(".portfolio h2", {
  y: 50,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".portfolio h2",
    start: "top 90% ",

  }
})

gsap.from(".slide span", {
  x: "-100%",
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".slide span",
    start: "top 90%",
  }
})

gsap.from(".all img", {
  y: 100,
  y: -100,
  x: 100,
  x: -100,
  opacity: 0,
  scale: 0.8,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".all img",
    start: "top 70%",
    ease: "power2.out,"
  }
})
gsap.from(".many", {
  x: 100,
  opacity: 0.05,
  scale: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".many",
    start: "bottom 118%",
    ease: "power2.out",

  }
})
//-------------------------------------------------------//
// PORTFOLIO (WORK) SCROLL ANIMATION HERE USING GSAP CODE END HERE
//-------------------------------------------------------//


// CONTACT FORM ANIMATION HERE USING GSAP START HERE

gsap.from(".contact-div h1", {
  y: -50,
  opacity: 0,
  scale: 0,

  scrollTrigger: {
    trigger: ".contact-div h1",
    start: "top 80%",
    ease: "power2.out",
  }
})

gsap.from(".para-div p:nth-child(1)", {
  x: "150%",
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".para-div p:nth-child(1)",
    start: "top 93%",
  }
})
gsap.from(".para-div p:nth-child(2)", {
  x: "-150%",
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".para-div p:nth-child(2)",
    start: "top 95%",
  }
})
gsap.from(".seprate-img img", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".seprate-img img",
    start: "top 92%"
  }
})

gsap.from(".other-details div",{
  y:100,
  stagger:0.2,
  opacity:0,
  scrollTrigger:{
    trigger:".other-details div",
    start:"bottom 90%",
    
  }
})
gsap.from(".contact-form",{
  x:"-100%",
  opacity:0,
  scrollTrigger:{
    trigger:".contact-form"
  }
})
//---------------------------------------------------//
// CONTACT FORM ANIMATION HERE USING GSAP CODE END HERE
//---------------------------------------------------//

// SEND MESSAGE BTN HERE
const btn = document.querySelector('#msg');

const topBorder = document.createElement('div');
topBorder.classList.add('top-border');
const bottomBorder = document.createElement('div');
bottomBorder.classList.add('bottom-border');

btn.appendChild(topBorder);
btn.appendChild(bottomBorder);

btn.addEventListener('mouseenter', () => {
  gsap.to(topBorder, { duration: 0.5, width: '100%', ease: 'power1.out' });
  gsap.to(bottomBorder, { duration: 0.5, width: '100%', ease: 'power1.out', transformOrigin: 'right center' });
});

btn.addEventListener('mouseleave', () => {
  gsap.to([topBorder, bottomBorder], { duration: 0.5, width: 0, ease: 'power1.in' });
});




// Contact Form Validation and EmailJS Integration

const form = document.getElementsByClassName('contact-form')[0];
const emailInput = document.getElementById('mail');
const errorMsg = document.getElementById('errorMsg');



form.addEventListener('submit', function (event) {
  const emailValue = emailInput.value;

  // Check if email contains '@'
  if (!emailValue.includes('@')) {
    event.preventDefault(); // Form submit roko
    errorMsg.style.display = 'block'; // Error dikhao
    emailInput.focus();
  } else {
    errorMsg.style.display = 'none'; // Error chhupa do
  }
});


form.addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('service_netb2yk', 'template_hob9ydm', this)
    .then(() => {
      alert('Message sent successfully!');
      form.reset();
    })
    .catch((error) => {
      alert('Failed to send message, please try again later.');
      console.error('EmailJS error:', error);
    });
});

// send message btn

// COLOR SWITCHER START HERE

let switherParent = document.querySelector("#switcher-parent");
let setting = document.querySelector("#switcher-parent .part1 i");

gsap.to("#switcher-parent", {
  right: "-190px",
  delay: 1,
})

setting.addEventListener("click", () => {
  switherParent.classList.toggle("active");
})

let colorsBoxes = document.querySelectorAll(".colors-parent .colors");
let reset = document.querySelector(".btn-div button");
let add = document.querySelectorAll(".add");
let addBg = document.querySelectorAll(".add-bg")
let border = document.querySelectorAll(".for-border");



colorsBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    let value = box.getAttribute("data-color");
    changeColor(value);
  })
})

function changeColor(color) {
  add.forEach((add) => {
    add.style.color = color;
    add.style.transition = "all 0.5s ease";


  })
  addBg.forEach((adBg) => {
    adBg.style.backgroundColor = color;
    adBg.style.transition = "all 0.5s ease";
  })
  border.forEach((boder) => {
    boder.style.border = `3.5px solid ${color}`;
    boder.style.transition = "all 0.5s ease";
  })

}

reset.addEventListener("click", () => {
  add.forEach((add) => {
    add.style.color = "";
    add.style.transition = "all 0.5s ease";

  })
  addBg.forEach((adBg) => {
    adBg.style.backgroundColor = "";
    adBg.style.transition = "all 0.5s ease"
  })
  border.forEach((boder) => {
    boder.style.border = ``;
    boder.style.transition = "all 0.5s ease";
  })
})
