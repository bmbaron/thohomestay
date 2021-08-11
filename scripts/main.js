let images = [
    '../images/c.jpg',
    '../images/d.jpg',
    '../images/e.jpg',
    '../images/f.jpg',
    '../images/g.jpg',
    '../images/h.jpg',
];

let mainImage = '../images/top-main.png';

let imageCounter = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

let slideshow = document.getElementsByClassName('slideshow')[0];

/* window.onload(changeImage());

function changeImage() {

    if(imageCounter == images.length) {
        imageCounter = 0;
    }
    slideshow.style.backgroundImage = "url('" + images[imageCounter] + "')";
    imageCounter++;

    changeSlides();
    
} */


async function changeSlides() {

    slideshow.classList.toggle('slideCenter');
    await sleep (5000);
    slideshow.classList.toggle('slideCenter');
    changeImage();

}





