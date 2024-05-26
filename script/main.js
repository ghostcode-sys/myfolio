let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

//globals 
let activePage = 1;

// imgs
let codepen = document.getElementById("codepen");
let mail = document.getElementById("email");
let linkedin = document.getElementById("linkedin");
let copyIcon = document.getElementById("copy")
let profile = document.getElementById("profile")

// objects 
let uppernav1 = new UpperNavigations1();
let uppernav2 = new UpperNavigations2();
let uppernav3 = new UpperNavigations3();
let profileBtn1 = new ProfileButtons(0, mail, social.gmail);
let profileBtn2 = new ProfileButtons(17.5, linkedin, social.linkedin);
let profileBtn3 = new ProfileButtons(35, codepen, social.codepen);
let aboutSec = new AboutSection();


// event listeners
let mouseX = null
let mouseY = null
let mouseDown = false

window.addEventListener("mousemove", (event) => {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
})

window.addEventListener("mousedown", (event) => {
    mouseDown = true;
})

window.addEventListener("mouseup", (event) => {
    mouseDown = false;
})

// animation of canvas
const main = () => {
    window.requestAnimationFrame(main);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    BigOutlines(canvas, ctx);
    UpperBox(canvas, ctx);
    uppernav1.update(canvas, ctx);
    uppernav2.update(canvas, ctx);
    uppernav3.update(canvas, ctx);
    aboutSec.update(canvas, ctx);
    profileBtn1.update(canvas, ctx);
    profileBtn2.update(canvas, ctx);
    profileBtn3.update(canvas, ctx);
}

const init = () => {
    let container = document.getElementById("myContainer");
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    main();

}

window.addEventListener('load', () => {
    init();
})

window.addEventListener("resize", () => {
    init();
})