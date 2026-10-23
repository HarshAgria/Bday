/* --------------------------------
CREATE STARS
-------------------------------- */

const stars =
document.getElementById("stars");

for (let i = 0; i < 100; i++) {

const star =
    document.createElement("div");

star.className = "star";

star.style.left =
    Math.random() * 100 + "%";

star.style.top =
    Math.random() * 100 + "%";

star.style.opacity =
    Math.random() * .7;

star.style.transform =
    `scale(${Math.random() * 2})`;

stars.appendChild(star);


}

/* --------------------------------
OPENING CINEMATIC
-------------------------------- */

window.addEventListener("load", () => {

const tl =
    gsap.timeline();

tl.to(".opening-line", {

    width: 180,

    duration: 1.2,

    ease: "power2.inOut"

})

.from(".opening p", {

    opacity: 0,

    y: 15,

    duration: .8

})

.from(".opening h1", {

    opacity: 0,

    y: 30,

    duration: 1.3,

    ease: "power3.out"

}, "-=.3")

.from(".opening-heart", {

    opacity: 0,

    scale: 0,

    duration: 1,

    ease: "back.out(2)"

})

.to(".opening", {

    opacity: 0,

    scale: 1.08,

    duration: 1.5,

    delay: 1.2,

    ease: "power3.inOut",

    onComplete: () => {

        document
            .querySelector(".opening")
            .remove();

        startLoveAnimations();

    }

});


});

/* --------------------------------
LOVE WORLD
-------------------------------- */

function startLoveAnimations() {

gsap.from(".hero-content > *", {

    opacity: 0,

    y: 30,

    duration: 1.2,

    stagger: .2,

    ease: "power3.out"

});


}

/* --------------------------------
FLOATING HEART PARTICLES
-------------------------------- */

function createHeart() {

const heart =
    document.createElement("div");

heart.className =
    "heart-particle";

heart.textContent =
    Math.random() > .5
        ? "♥"
        : "♡";

heart.style.left =
    Math.random() * 100 + "vw";

heart.style.bottom =
    "-30px";

heart.style.fontSize =
    10 +
    Math.random() * 20 +
    "px";

document
    .getElementById(
        "heartParticles"
    )
    .appendChild(heart);

gsap.to(heart, {

    y:
        -window.innerHeight -
        100,

    x:
        Math.random() * 180 -
        90,

    rotation:
        Math.random() * 360,

    opacity: .6,

    duration:
        8 +
        Math.random() * 5,

    ease: "none",

    onComplete: () =>
        heart.remove()

});


}

setInterval(
createHeart,
1200
);

/* --------------------------------
HEARTBEAT CLICK
-------------------------------- */

document.addEventListener(
"click",
(e) => {

    const burst =
        document.createElement(
            "div"
        );

    burst.textContent = "♥";

    burst.style.position =
        "fixed";

    burst.style.left =
        e.clientX + "px";

    burst.style.top =
        e.clientY + "px";

    burst.style.color =
        "#e95b7b";

    burst.style.fontSize =
        "20px";

    burst.style.pointerEvents =
        "none";

    burst.style.zIndex =
        "1000";

    document.body.appendChild(
        burst
    );

    gsap.fromTo(
        burst,

        {
            scale: 0,
            opacity: 1
        },

        {
            scale: 2,
            y: -70,
            opacity: 0,
            duration: 1,
            ease: "power2.out",

            onComplete: () =>
                burst.remove()
        }
    );

}


);