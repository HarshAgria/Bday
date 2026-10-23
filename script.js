/* =========================================================
   SHIVANI BIRTHDAY EXPERIENCE
   FRIEND MODE
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const cursor = document.querySelector(".cursor");
const particlesContainer = document.getElementById("particles");

const startStory = document.getElementById("startStory");

const heartGateway = document.getElementById("heartGateway");
const friendChoice = document.getElementById("friendChoice");
const heartChoice = document.getElementById("heartChoice");

const friendWorld = document.getElementById("friend-world");
const friendEnding = document.getElementById("friendEnding");


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.15,
        ease: "power2.out"
    });

});


/* Cursor hover */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {

        gsap.to(cursor, {
            scale: 1.5,
            duration: .2
        });

    });

    button.addEventListener("mouseleave", () => {

        gsap.to(cursor, {
            scale: 1,
            duration: .2
        });

    });

});


/* =========================================================
   FLOATING PARTICLES
   ========================================================= */

const particleCharacters = [
    "♥",
    "♡",
    "✦",
    "✧",
    "•",
    "💗",
    "🌸"
];

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.textContent =
        particleCharacters[
            Math.floor(Math.random() * particleCharacters.length)
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.fontSize =
        (Math.random() * 14 + 8) + "px";

    particle.style.animationDuration =
        (Math.random() * 8 + 8) + "s";

    particle.style.animationDelay =
        Math.random() * 3 + "s";

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 16000);
}


/* Start particle system */

for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 300);
}

setInterval(createParticle, 700);


/* =========================================================
   HERO → STORY
   ========================================================= */

startStory.addEventListener("click", () => {

    const firstChapter =
        document.querySelector(".story-section.chapter");

    gsap.to(window, {
        duration: 1.4,
        scrollTo: {
            y: firstChapter,
            offsetY: 20
        },
        ease: "power3.inOut"
    });

});


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

const sections =
    document.querySelectorAll(".story-section");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const section = entry.target;

                gsap.fromTo(
                    section.querySelector(".chapter-content, .hero-content, .photo-content"),
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out"
                    }
                );

            });

        },
        {
            threshold: .25
        }
    );


sections.forEach(section => {
    observer.observe(section);
});


/* =========================================================
   HEART GATEWAY APPEARANCE
   ========================================================= */

const gatewayObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                gsap.fromTo(
                    ".gateway-content",
                    {
                        opacity: 0,
                        scale: .92,
                        y: 40
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power3.out"
                    }
                );

            });

        },
        {
            threshold: .35
        }
    );


gatewayObserver.observe(heartGateway);


/* =========================================================
   FRIENDSHIP CHOICE
   ========================================================= */

friendChoice.addEventListener("click", () => {

    /*
        Hide the gateway smoothly.
    */

    gsap.to(heartGateway, {

        opacity: 0,

        scale: .95,

        duration: .8,

        ease: "power2.inOut",

        onComplete: () => {

            heartGateway.style.display = "none";

            friendEnding.classList.add("show");

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

            gsap.fromTo(
                ".ending-content",
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out"
                }
            );

        }

    });

});


/* =========================================================
   HEART CHOICE
   ========================================================= */

heartChoice.addEventListener("click", () => {

    beginHeartTransition();

});


/* =========================================================
   CINEMATIC HEART TRANSITION
   ========================================================= */

function beginHeartTransition() {

    /*
        Disable scrolling during transition.
    */

    document.body.style.overflow = "hidden";


    /*
        Create cinematic overlay.
    */

    const overlay =
        document.createElement("div");

    overlay.id = "heart-transition";

    overlay.innerHTML = `

        <div class="transition-glow"></div>

        <div class="transition-content">

            <div class="transition-line">
                Okay...
            </div>

            <div class="transition-line second">
                You asked.
            </div>

            <div class="transition-heart">
                ♥
            </div>

            <div class="transition-final">
                So here it is.
            </div>

        </div>

    `;

    document.body.appendChild(overlay);


    /*
        Transition CSS.
    */

    const transitionStyle =
        document.createElement("style");

    transitionStyle.textContent = `

        #heart-transition {

            position: fixed;

            inset: 0;

            z-index: 999999;

            background:
                radial-gradient(
                    circle at center,
                    #39101d,
                    #10070c 55%,
                    #050306
                );

            display: flex;

            align-items: center;

            justify-content: center;

            overflow: hidden;

        }


        .transition-glow {

            position: absolute;

            width: 300px;

            height: 300px;

            border-radius: 50%;

            background: #ff285d;

            filter: blur(100px);

            opacity: 0;

        }


        .transition-content {

            position: relative;

            text-align: center;

            color: white;

            z-index: 2;

        }


        .transition-line {

            opacity: 0;

            font-family:
                'Dancing Script',
                cursive;

            font-size: 4rem;

        }


        .transition-line.second {

            color: #ff6685;

        }


        .transition-heart {

            font-size: 6rem;

            color: #ff315f;

            opacity: 0;

            transform: scale(.2);

            text-shadow:
                0 0 20px #ff315f,
                0 0 60px #ff315f,
                0 0 120px rgba(255,49,95,.7);

        }


        .transition-final {

            margin-top: 20px;

            font-family:
                'Dancing Script',
                cursive;

            font-size: 2rem;

            opacity: 0;

            color: #ffb4c4;

        }


        @media(max-width:768px) {

            .transition-line {
                font-size: 3rem;
            }

            .transition-heart {
                font-size: 5rem;
            }

        }

    `;

    document.head.appendChild(transitionStyle);


    /*
        Cinematic sequence.
    */

    const timeline = gsap.timeline();


    timeline

        .to(".transition-glow", {
            opacity: .5,
            scale: 1.4,
            duration: 1.5,
            ease: "power2.out"
        })

        .to(".transition-line", {
            opacity: 1,
            duration: .9,
            stagger: .8,
            ease: "power2.out"
        })

        .to(".transition-line", {
            opacity: 0,
            y: -20,
            duration: .7,
            delay: .7
        })

        .to(".transition-heart", {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(2)"
        })

        .to(".transition-heart", {
            scale: 1.15,
            duration: .5,
            repeat: 2,
            yoyo: true
        })

        .to(".transition-final", {
            opacity: 1,
            duration: 1
        })

        .to(".transition-heart", {
            scale: 30,
            duration: 2,
            ease: "power4.in"
        })

        .to("#heart-transition", {
            opacity: 0,
            duration: 1,
            delay: -.5,

            onComplete: () => {

                /*
                    For now we send the user
                    to love.html.

                    We'll build love.html
                    in the next step.
                */

                window.location.href = "love.html";

            }

        });

}


/* =========================================================
   INITIAL PAGE ANIMATION
   ========================================================= */

window.addEventListener("load", () => {

    const tl = gsap.timeline();

    tl.from(".hero .tiny-label", {
        opacity: 0,
        y: 20,
        duration: .8
    })

    .from(".hero h1", {
        opacity: 0,
        y: 40,
        scale: .95,
        duration: 1.2,
        ease: "power3.out"
    }, "-=.3")

    .from(".hero-subtitle", {
        opacity: 0,
        y: 25,
        duration: 1
    }, "-=.5")

    .from(".start-btn", {
        opacity: 0,
        y: 25,
        duration: .8,
        ease: "back.out"
    }, "-=.5")

    .from(".scroll-hint", {
        opacity: 0,
        duration: .8
    }, "-=.3");

});


/* =========================================================
   REUNION DOOR — KNOCK KNOCK
   ========================================================= */

const reunionDoor = document.getElementById("reunionDoor");
const doorWrapper = document.querySelector(".door-wrapper");
const knockText = document.getElementById("knockText");
const doorRevealLine = document.getElementById("doorRevealLine");

if (reunionDoor && doorWrapper) {

    let doorOpened = false;

    reunionDoor.addEventListener("click", () => {

        if (doorOpened) return;

        doorOpened = true;

        /* Knock effect */

        gsap.timeline()

            .to(reunionDoor, {
                x: -3,
                duration: .08,
                repeat: 3,
                yoyo: true,
                ease: "power1.inOut"
            })

            .to(knockText, {
                opacity: 0,
                duration: .3
            })

            /* Open the door */

            .to(reunionDoor, {
                rotateY: -82,
                duration: 1.2,
                ease: "power3.inOut",

                onStart: () => {

                    doorWrapper.classList.add("opened");

                }

            })

            /* Reveal the line */

            .to(doorRevealLine, {

                opacity: 1,
                y: -5,

                duration: .8,

                ease: "power2.out"

            });

        /* Heart burst */

        const rect =
            reunionDoor.getBoundingClientRect();

        heartBurst(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2
        );

    });

}
