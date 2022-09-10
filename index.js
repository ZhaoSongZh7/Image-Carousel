const nextButton = document.querySelector('.next-image');
const previousButton = document.querySelector('.previous-image');
const pictureContainer = document.querySelector('.picture');
const slideDotContainer = document.querySelector('.slide-dot-container');
const imageArray = []
let imagePosition = 0;

imageArray[0] = 'assets/bike-red-1423575.jpg';
imageArray[1] = 'assets/green-frog-1361810.jpg';
imageArray[2] = 'assets/nuclear-power-plant-1314782.jpg';
imageArray[3] = 'assets/red-space-1496755.jpg';
imageArray[4] = 'assets/yellow-frontal-with-ivy-1228121.jpg'

document.querySelector('.image').src = imageArray[imagePosition];

nextButton.addEventListener('click', () => {
    nextImage();
    clearInterval(myTimer);
    myTimer = setInterval(nextImage, 10000);
});

previousButton.addEventListener('click', () => {
    previousImage();
});

function nextImage () {
    if (imagePosition < imageArray.length - 1) {
        imagePosition += 1
    } else {
        imagePosition = 0;
    }
    document.querySelector('.image').src = imageArray[imagePosition];
    specifyCurrentDot();
}

function previousImage () {
    if (imagePosition != 0) {
        imagePosition -= 1
    } else {
        imagePosition = imageArray.length - 1;
    }
    document.querySelector('.image').src = imageArray[imagePosition]
    specifyCurrentDot();
}

function specifyCurrentDot () {
    const selectAllSlideDot = document.querySelectorAll('.slide-dot');
    selectAllSlideDot.forEach((dot) => {
        dot.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });
    for (let i = 0; i < selectAllSlideDot.length; i++) {
        selectAllSlideDot[imagePosition].style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    };
}

for (let i = 0; i < imageArray.length; i++) {
    const slideDot = document.createElement('div');
    slideDot.classList.add('slide-dot');
    slideDotContainer.appendChild(slideDot);
    pictureContainer.appendChild(slideDotContainer);
    const selectAllSlideDot = document.querySelectorAll('.slide-dot');
    selectAllSlideDot[0].style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    slideDot.addEventListener('click', () => {
        const selectAllSlideDot = document.querySelectorAll('.slide-dot');
        selectAllSlideDot.forEach((dot) => {
            dot.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
        slideDot.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        document.querySelector('.image').src = imageArray[i];
        imagePosition = i;
    });
};

let myTimer = setInterval(nextImage, 10000)