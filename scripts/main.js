let images = [
    '../images/1.png',
    '../images/2.png',
    '../images/5.jpg',
    '../images/4.png',
    '../images/3.png',
    '../images/6.png',
];

let mainImage = '../images/top-main.png';

let photos = document.getElementsByClassName("examples");
for (let i = 0; i < photos.length; i++) {
    photos[i].src = images[i];
}




let imageCounter = 0;


const review = {
    content: "",
    name: "",
    photo: ""
};

const leftReview = Object.create(review);
leftReview.content = "&quot;If you want to experience something really local and the kindness of the Vietnamese, don't miss out on this beautiful experience!&quot;";
leftReview.name = "Jordane G.";
leftReview.photo = "../images/reviewers/jordane.png";

const centerReview = Object.create(review);
centerReview.content = "&quot;The homestay is absolutely great, the hospitality, food, cleanliless everything exceeded our expections.&quot;";
centerReview.name = "Trinh S.";
centerReview.photo = "../images/reviewers/trinh.png";

const rightReview = Object.create(review);
rightReview.content = "&quot;A truly authentic experience. The family is lovely and really look after you. Get there before tourism kicks in.&quot;";
rightReview.name = "Loretta I.";
rightReview.photo = "../images/reviewers/loretta.png";

const reviewObjects = [leftReview,centerReview,rightReview];


let reviews = document.getElementsByClassName("review");
for (let i = 0; i < reviews.length; i++) {
    let image = document.createElement('img');
    let name = document.createElement('h3');
    let review = document.createElement('h6');
    image.src = reviewObjects[i].photo;
    name.innerText = reviewObjects[i].name;
    review.innerHTML = reviewObjects[i].content;
    reviews[i].append(image, name, review);
}

let reviewButton = document.getElementById("review-button");
reviewButton.onclick = function () {
    window.open('https://www.google.com/maps/place/Tho+Homestay+and+Tea+Ceremony/@22.4981703,104.5267565,18z/data=!4m10!3m9!1s0x36ccee48eb8f3619:0xb03e740dab8648a1!5m2!4m1!1i2!8m2!3d22.4974492!4d104.5274056!9m1!1b1');
}





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





