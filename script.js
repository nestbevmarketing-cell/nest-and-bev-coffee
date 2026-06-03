// Find the button by its ID
const button = document.getElementById('magicButton');

// Listen for a click event
button.addEventListener('click', () => {
    // Change the background color of the page randomly
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});