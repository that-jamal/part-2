let twisted = document.getElementById("twisted")
let funny = document.getElementById("funny")
let intrs = document.getElementById("intrs")
let joke = document.getElementById("joke")
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
const flipCards = document.querySelectorAll('.flip-card');

joke.classList.add('animate__animated', 'animate__slideoutUp')
intrs.classList.add('animate__animated', 'animate__slideInUp')
funny.classList.add('animate__animated', 'animate__slideOutLeft')
twisted.classList.add('animate__animated', 'animate__slideInUp')
function fade() {
    if (intrs.classList.contains('animate__slideInUp')) {
        intrs.classList.add('animate__animated', 'custom-slideOutDown')
        intrs.classList.remove('animate__slideInUp')
    } else {
        intrs.classList.add('animate__slideInUp')
        intrs.classList.remove('custom-slideOutDown')
    }
    if (joke.classList.contains('animate__slideOutUp')) {
        joke.classList.add('animate__animated', 'animate__slideInDown')
        joke.classList.remove('animate__slideOutUp')
    } else {
        joke.classList.add('animate__slideOutUp')
        joke.classList.remove('animate__slideInDown')
    }
    if (funny.classList.contains('animate__slideOutLeft')) {
        funny.classList.add('animate__animated', 'animate__slideInLeft')
        funny.classList.remove('animate__slideOutLeft')
    } else {
        funny.classList.add('animate__slideOutLeft')
        funny.classList.remove('animate__slideInLeft')
    }
    if (twisted.classList.contains('animate__slideInUp')) {
        twisted.classList.add('animate__animated', 'custom-slideOutDown')
        twisted.classList.remove('animate__slideInUp')
    } else {
        twisted.classList.add('animate__slideInUp')
        twisted.classList.remove('custom-slideOutDown')
    }
}
document.getElementById("home").onclick = function () {
    document.getElementById("bag").classList.add('animate__slideInLeft')
    document.getElementById("cards").classList.add('animate__slideInLeft')
    console.log("a")
    document.getElementById("bag").classList.remove('animate__slideOutLeft')
    document.getElementById("cards").classList.remove('animate__slideOutLeft')

}
document.getElementById("prf").onclick = function () {
    document.getElementById("bag").classList.add('animate__animated', 'animate__slideOutLeft')
    document.getElementById("cards").classList.add('animate__animated', 'animate__slideOutLeft')
    console.log("a")
    document.getElementById("bag").classList.remove('animate__slideInLeft')
    document.getElementById("cards").classList.remove('animate__slideInLeft')

}

joke.onclick = function () {
    console.log("a")
};

btn1.onclick = function () {
    console.log("a")
};
flipCards.forEach(flipCard => {
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
    });
});

(function () {
    fade()
    setTimeout(arguments.callee, 2000);
})();
