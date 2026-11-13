
// ===== ELEMENTS =====

const playButton = document.getElementById("playButton");

const firstVideo = document.getElementById("firstVideo");
const secondVideo = document.getElementById("secondVideo");

const videoScreen = document.getElementById("videoScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const secondVideoScreen = document.getElementById("secondVideoScreen");
const videoEndScreen = document.getElementById("videoEndScreen");

const continueButton = document.getElementById("continueButton");
const skipButton = document.getElementById("skipButton");
const secondSkipButton = document.getElementById("secondSkipButton");

const videoError = document.getElementById("videoError");
const secondVideoError = document.getElementById("secondVideoError");


// ===== GOLDEN PARTICLES =====

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 8 + 5) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particleContainer.appendChild(particle);
}


// ===== FIRST VIDEO =====

playButton.addEventListener("click", async () => {

    playButton.style.display = "none";

    document.querySelector(".top-label").style.display = "none";
    document.querySelector(".video-content h1").style.display = "none";
    document.querySelector(".video-subtitle").style.display = "none";
    document.querySelector(".click-text").style.display = "none";

    firstVideo.style.display = "block";

    try {

        await firstVideo.play();

    } catch (error) {

        videoError.style.display = "block";
        playButton.style.display = "flex";

        console.log("First video error:", error);

    }

});


// ===== SHOW WELCOME SCREEN =====

function showWelcome() {

    firstVideo.pause();

    videoScreen.classList.add("hidden");

    welcomeScreen.classList.remove("hidden");

}


// FIRST VIDEO COMPLETED

firstVideo.addEventListener("ended", showWelcome);


// SKIP FIRST VIDEO

skipButton.addEventListener("click", showWelcome);


// ===== SECOND VIDEO START =====


continueButton.addEventListener("click", async () => {

    welcomeScreen.classList.add("hidden");
    secondVideoScreen.classList.remove("hidden");

    // Start video from the beginning at normal speed
    secondVideo.pause();
    secondVideo.currentTime = 0;
    secondVideo.playbackRate = 1;

    try {
        await secondVideo.play();
    } catch (error) {
        secondVideoError.style.display = "block";
        console.log("Second video error:", error);
    }

});



// ===== SHOW END SCREEN =====

function showVideoEnd() {

    secondVideo.pause();

    secondVideoScreen.classList.add("hidden");

    videoEndScreen.classList.remove("hidden");

}


// SECOND VIDEO COMPLETED

secondVideo.addEventListener("ended", showVideoEnd);


// SKIP SECOND VIDEO

secondSkipButton.addEventListener("click", showVideoEnd);



/* ===== STEP 3: BIRTHDAY + THREE MESSAGES ===== */

const birthdayIntro = document.getElementById("birthdayIntro");
const messagesScreen = document.getElementById("messagesScreen");
const messageComplete = document.getElementById("messageComplete");

const startMessages = document.getElementById("startMessages");

const messageNumber = document.getElementById("messageNumber");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");

const nextMessage = document.getElementById("nextMessage");
const showFullMessage = document.getElementById("showFullMessage");

const progressBars = document.querySelectorAll(
    "#messageProgress span"
);


// YOUR THREE ORIGINAL MESSAGES

const birthdayMessages = [

    {
        title: "A Special Wish ❤️",

        text: `🎂✨ Happy Birthday! ❤️

I know humari friendship abhi nayi hai, but in this short time tumne jis tarah meri help ki hai aur mujhe support kiya hai, uske liye genuinely thank you. 😊

Tumhari ek baat achhi lagti hai ki tum bina kisi expectation ke dusron ki help karti ho. I hope tumhari life mein hamesha happiness, success aur lots of beautiful moments rahein.

Keep smiling, keep shining and never change the way you are. ❤️

May all your dreams come true. Have a wonderful birthday! 🥳🎉`
    },

    {
        title: "Ek Baat Kehni Thi... ❤️",

        text: `Ek baat aur kehna chahta hoon... ❤️

Pata nahi tumne kabhi notice kiya hai ya nahi, lekin kai baar aisa hota hai ki main hi message karta hoon, main hi baat shuru karta hoon. Kabhi-kabhi toh jab tak main message na karun, humari baat hi nahi hoti.

Main ye nahi chahta ki tum har waqt mujhse baat karo ya apne kaam chhodkar mujhe time do. Bas itna chahta hoon ki kabhi tumhari taraf se bhi message aaye, kabhi tum bhi khud se baat karne ki koshish karo.

Kabhi-kabhi aisa feel hota hai jaise main hi is friendship ko maintain karne ki koshish kar raha hoon. Aur honestly, friendship mein efforts dono taraf se hon toh zyada achha lagta hai.

I hope aage se tum meri is baat ko samjhogi. Main tumhari friendship ki kadar karta hoon, bas chahta hoon ki meri presence aur meri feelings ki bhi thodi kadar ho.

Once again, Happy Birthday! ❤️✨`
    },

    {
        title: "Happiest Birthday! 🌸",

        text: `🌸❤️ Happiest Birthday to You! ❤️🎂

Sabse pehle tumhe janamdin ki dher saari shubhkamnayein! 🥳✨

I hope tumhara aaj ka din tumhari life ke sabse beautiful days mein se ek ho. Tumhari life hamesha khushiyon se bhari rahe, tumhare chehre par ye smile hamesha bani rahe aur tum jo bhi sapne dekhti ho, woh sab ek din zaroor poore hon. ❤️

Kabhi socha nahi tha ki itne kam samay mein kisi naye insaan se itni achhi friendship ho jayegi. Tumse milna aur tumhara meri life mein ek achhe dost ki tarah aana mere liye achha experience raha hai. Tumne kai baar meri help ki, meri baaton ko samjha aur support kiya, uske liye genuinely thank you. Shayad main har baar express nahi kar pata, but I really appreciate it. 🥰

Bas meri yahi wish hai ki tum life mein bahut aage badho, tumhe har woh khushi mile jiski tum haqdaar ho. Tumhare aas-paas hamesha aise log rahein jo tumhari care karein, tumhari respect karein aur tumhari happiness ki wajah banein.

Life mein kabhi difficult time aaye toh himmat mat haarna. Khud par bharosa rakhna, kyunki tumhare andar apne sapne poore karne ki ability hai. Hamesha khush rehna, khulkar hasna aur apni life ke har chhote-bade moment ko enjoy karna. ❤️

Aur haan, ek request hai... Humari friendship mein kabhi formality mat aane dena. Jaise main kabhi tumhe message karta hoon, waise hi kabhi tum bhi yaad kar liya karna. Dosti tab aur achhi lagti hai jab dono taraf se thodi si care aur efforts hon. 😊

I wish you endless happiness, unlimited success, good health, beautiful memories and lots of love.

May this new year of your life bring you everything your heart has been wishing for. ✨

Once again, happiest birthday! Keep smiling, keep shining and always stay the wonderful person you are.

Enjoy your special day to the fullest! 🎂🦋❤️`
    }

];


// MESSAGE VARIABLES

let currentMessage = 0;
let typingTimer = null;
let isTyping = false;


// START BIRTHDAY ANIMATION

document.getElementById("birthdayContinueButton")
.addEventListener("click", () => {

    videoEndScreen.classList.add("hidden");

    birthdayIntro.classList.remove("hidden");

});


// START READING MESSAGES

startMessages.addEventListener("click", () => {

    birthdayIntro.classList.add("hidden");

    messagesScreen.classList.remove("hidden");

    currentMessage = 0;

    displayMessage();

});


// DISPLAY MESSAGE

function displayMessage() {

    clearTimeout(typingTimer);

    isTyping = true;

    const message = birthdayMessages[currentMessage];

    // Update title and number

    messageNumber.textContent =
        `MESSAGE 0${currentMessage + 1} / 03`;

    messageTitle.textContent = message.title;

    messageText.textContent = "";

    // Update progress bars

    progressBars.forEach((bar, index) => {

        bar.classList.toggle(
            "active",
            index <= currentMessage
        );

    });

    // Reset card animation

    const card = document.getElementById("messageCard");

    card.style.animation = "none";

    void card.offsetWidth;

    card.style.animation = "cardReveal 0.8s ease";

    // Reset buttons

    showFullMessage.style.display = "block";

    nextMessage.style.display = "none";

    nextMessage.disabled = true;

    // Start typewriter

    typeMessage(message.text, 0);

}


// TYPEWRITER EFFECT

function typeMessage(text, index) {

    if (index < text.length) {

        messageText.textContent += text.charAt(index);

        typingTimer = setTimeout(() => {

            typeMessage(text, index + 1);

        }, 9);

    } else {

        finishTyping();

    }

}


// FINISH TYPING

function finishTyping() {

    clearTimeout(typingTimer);

    isTyping = false;

    showFullMessage.style.display = "none";

    nextMessage.disabled = false;

    nextMessage.style.display = "block";

    // Change button on final message

    if (currentMessage === 2) {

        nextMessage.textContent = "Finish Messages ✨";

    } else {

        nextMessage.textContent = "Next Message →";

    }

}


// SHOW FULL MESSAGE IMMEDIATELY

showFullMessage.addEventListener("click", () => {

    clearTimeout(typingTimer);

    messageText.textContent =
        birthdayMessages[currentMessage].text;

    finishTyping();

});


// NEXT MESSAGE BUTTON

nextMessage.addEventListener("click", () => {

    if (isTyping) return;

    if (currentMessage < 2) {

        currentMessage++;

        displayMessage();

    } else {

        messagesScreen.classList.add("hidden");

        messageComplete.classList.remove("hidden");

    }

});


/* ===== STEP 4: CINEMATIC PHOTO SLIDESHOW ===== */

const galleryScreen = document.getElementById("galleryScreen");
const openGallery = document.getElementById("openGallery");
const galleryImage = document.getElementById("galleryImage");
const photoCounter = document.getElementById("photoCounter");
const photoCaption = document.getElementById("photoCaption");
const galleryDots = document.getElementById("galleryDots");

const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const galleryFinish = document.getElementById("galleryFinish");

const galleryPhotos = [
    "assets/image/image1.png",
    "assets/image/image2.png",
    "assets/image/image3.png",
    "assets/image/image4.jpg",
    "assets/image/image5.jpg",
    "assets/image/image6.jpg",
    "assets/image/image7.jpg"
];

let currentPhoto = 0;


// Open gallery
if (openGallery) {
    openGallery.addEventListener("click", () => {
        messageComplete.classList.add("hidden");
        galleryScreen.classList.remove("hidden");

        currentPhoto = 0;
        showPhoto();
    });
}


// Create dots only once
galleryDots.innerHTML = "";

galleryPhotos.forEach((photo, index) => {
    const dot = document.createElement("button");

    dot.className = "gallery-dot";
    dot.setAttribute("aria-label", "Show photo " + (index + 1));

    dot.addEventListener("click", () => {
        currentPhoto = index;
        showPhoto();
    });

    galleryDots.appendChild(dot);
});


// Show selected photo
function showPhoto() {

    galleryImage.classList.add("changing");

    const selectedPhoto = galleryPhotos[currentPhoto];

    galleryImage.onload = () => {
        galleryImage.classList.remove("changing");
        photoCaption.textContent =
            "Beautiful Memory " + (currentPhoto + 1) + " ✨";
    };

    galleryImage.onerror = () => {
        galleryImage.classList.remove("changing");
        photoCaption.textContent = "Photo not found: " + selectedPhoto;
        console.error("Image not found:", selectedPhoto);
    };

    photoCounter.textContent =
        "0" + (currentPhoto + 1) + " / 07";

    document.querySelectorAll(".gallery-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentPhoto);
    });

    galleryImage.src = selectedPhoto;
}


// Next photo
nextPhoto.addEventListener("click", () => {
    currentPhoto = (currentPhoto + 1) % galleryPhotos.length;
    showPhoto();
});


// Previous photo
previousPhoto.addEventListener("click", () => {
    currentPhoto =
        (currentPhoto - 1 + galleryPhotos.length) % galleryPhotos.length;
    showPhoto();
});



/* ===== STEP 5: FIREWORKS FINALE ===== */

const finaleScreen = document.getElementById("finaleScreen");
const fireworksCanvas = document.getElementById("fireworksCanvas");
const replayFireworks = document.getElementById("replayFireworks");

const fireCtx = fireworksCanvas.getContext("2d");

let fireworksParticles = [];
let lastFireworkTime = 0;
let fireworksAnimationStarted = false;

const fireworkColors = [
    "#ff4fc8",
    "#00d9ff",
    "#ffd166",
    "#a56bff",
    "#7cffcb",
    "#ff784f"
];


// Canvas size
function resizeFireworksCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    fireworksCanvas.width = window.innerWidth * ratio;
    fireworksCanvas.height = window.innerHeight * ratio;

    fireCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

resizeFireworksCanvas();

window.addEventListener("resize", resizeFireworksCanvas);


// Create one firework burst
function createFirework(x, y) {

    const color = fireworkColors[
        Math.floor(Math.random() * fireworkColors.length)
    ];

    const particleCount = 65;

    for (let i = 0; i < particleCount; i++) {

        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 4 + 1.5;

        fireworksParticles.push({
            x: x,
            y: y,

            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,

            alpha: 1,
            radius: Math.random() * 2.5 + 1,

            color: color
        });
    }
}


// Draw and animate fireworks
function animateFireworks(timestamp) {

    const width = window.innerWidth;
    const height = window.innerHeight;

    fireCtx.clearRect(0, 0, width, height);

    if (!finaleScreen.classList.contains("hidden")) {

        if (timestamp - lastFireworkTime > 850) {

            createFirework(
                Math.random() * width * 0.8 + width * 0.1,
                Math.random() * height * 0.55 + height * 0.08
            );

            lastFireworkTime = timestamp;
        }
    }

    for (let i = fireworksParticles.length - 1; i >= 0; i--) {

        const p = fireworksParticles[i];

        p.x += p.vx;
        p.y += p.vy;

        p.vy += 0.035;
        p.vx *= 0.992;

        p.alpha -= 0.012;

        fireCtx.globalAlpha = Math.max(0, p.alpha);

        fireCtx.beginPath();

        fireCtx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        );

        fireCtx.fillStyle = p.color;
        fireCtx.shadowBlur = 15;
        fireCtx.shadowColor = p.color;

        fireCtx.fill();

        if (p.alpha <= 0) {
            fireworksParticles.splice(i, 1);
        }
    }

    fireCtx.globalAlpha = 1;
    fireCtx.shadowBlur = 0;

    requestAnimationFrame(animateFireworks);
}


// Start animation only once
if (!fireworksAnimationStarted) {
    fireworksAnimationStarted = true;
    requestAnimationFrame(animateFireworks);
}


// Show fireworks finale
galleryFinish.addEventListener("click", () => {

    galleryScreen.classList.add("hidden");

    finaleScreen.classList.remove("hidden");

    fireworksParticles = [];
    lastFireworkTime = 0;

    // Initial grand celebration
    createFirework(
        window.innerWidth * 0.3,
        window.innerHeight * 0.3
    );

    createFirework(
        window.innerWidth * 0.7,
        window.innerHeight * 0.3
    );

    createFirework(
        window.innerWidth * 0.5,
        window.innerHeight * 0.2
    );

});


// Celebrate again button
replayFireworks.addEventListener("click", () => {

    createFirework(
        window.innerWidth * 0.25,
        window.innerHeight * 0.3
    );

    createFirework(
        window.innerWidth * 0.5,
        window.innerHeight * 0.25
    );

    createFirework(
        window.innerWidth * 0.75,
        window.innerHeight * 0.3
    );

});

