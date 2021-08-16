let images = [
    'https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/1.png',
    'https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/2.png',
    'https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/5.jpg',
    'https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/4.png',
    'https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/3.png',
    'https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/6.png',
];

let photos = document.getElementsByClassName("examples");
for (let i = 0; i < photos.length; i++) {
    photos[i].src = images[i];
}

const review = {
    content: "",
    name: "",
    photo: ""
};

const leftReview = Object.create(review);
leftReview.content = "&quot;If you want to experience something really local and the kindness of the Vietnamese, don't miss out on this beautiful experience!&quot;";
leftReview.name = "Jordane G.";
leftReview.photo = "https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/reviewers/jordane.png";
leftReview.photo.alt = "reviewer Jordane G.";

const centerReview = Object.create(review);
centerReview.content = "&quot;The homestay is absolutely great, the hospitality, food, cleanliless everything exceeded our expections.&quot;";
centerReview.name = "Trinh S.";
centerReview.photo = "https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/reviewers/trinh.png";
centerReview.photo.alt = "reviewer Trinh S.";


const rightReview = Object.create(review);
rightReview.content = "&quot;A truly authentic experience. The family is lovely and really look after you. Get there before tourism kicks in.&quot;";
rightReview.name = "Loretta I.";
rightReview.photo = "https://raw.githubusercontent.com/bmbaron/thohomestay/master/images/reviewers";
rightReview.photo.alt = "reviewer Loretta I.";


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





