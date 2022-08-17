

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

// option -4 By function with addEventListener

const pinkButtonFunction = document.getElementById('pink-button');

pinkButtonFunction.addEventListener('click', pinkButton);

function pinkButton() {
    document.body.style.backgroundColor = 'pink';
}

// Another option of 4 with addEventLisener part-1

const greenButtonFunction = document.getElementById('green-button');

greenButtonFunction.addEventListener('click', function greenButton() {
    document.body.style.backgroundColor = 'green';
});

// Another option of 4 with addEventLisener part-2

document.getElementById('orange-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})
