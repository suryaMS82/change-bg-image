var button = document.querySelector('.btn');
var body= document.querySelector('body');
button.addEventListener('click',bgchange);
var img = ["url('images/image-1.jpg')","url('images/image-2.jpg')","url('images/image-3.jpg')","url('images/image-5.jpg')","url('images/image-4.jpg')","url('images/image-6.jpg')","url('images/image-7.jpg')","url('images/image-8.jpg')","url('images/image-9.jpg')"];

function bgchange(){
    var random= Math.floor(Math.random()*img.length);
    body.style.backgroundImage = img[random];
}
