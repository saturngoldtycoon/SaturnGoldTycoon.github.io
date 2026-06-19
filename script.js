// Grab the button and the empty message paragraph
var myButton = document.getElementById('action-btn');
var myMessage = document.getElementById('message');

// Run this simple text update when clicked
myButton.addEventListener('click', function() {
    myMessage.innerText = "Entering Orbit ⚡";
});
