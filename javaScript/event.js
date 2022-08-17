

// Option - 2

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option -2 By function

const blueButtonFunction = document.getElementById('blue-button');
// console.log(blueButtonFunction);
blueButtonFunction.onclick = blueButton;

function blueButton() {
    document.body.style.backgroundColor = 'blue';
}

// option -3 By function

const purpleButtonFunction = document.getElementById('purple-button');
// console.log(blueButtonFunction);
purpleButtonFunction.onclick = function purpleButton() {
    document.body.style.backgroundColor = 'purple';
}