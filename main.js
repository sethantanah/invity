const rsvpButton = document.querySelector('button');
const overlay = document.getElementById('overlay');
const popover = document.getElementById('rsvpPopover');
const thankYouScreen = document.getElementById('thankYouScreen');
const thankYouMessage = document.getElementById('thankYouMessage');

rsvpButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    popover.style.display = 'block';
});

function respond(response) {
    popover.style.display = 'none';
    overlay.style.display = 'none';
    thankYouScreen.style.display = 'flex';
    
    if (response === 'accept') {
        thankYouMessage.textContent = "We're delighted you'll be joining us for our celebration!";
    } else {
        thankYouMessage.textContent = "We're sorry you can't make it, but thank you for letting us know.";
    }

    setTimeout(() => {
        thankYouScreen.style.display = 'none';
    }, 3000);
}