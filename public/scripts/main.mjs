const rsvpButton = document.querySelector('button');
const overlay = document.getElementById('overlay');
const popover = document.getElementById('rsvpPopover');
const thankYouScreen = document.getElementById('thankYouScreen');
const thankYouMessage = document.getElementById('thankYouMessage');

const acceptBtn = document.getElementById('accept');
const rejectBtn = document.getElementById('reject');

rsvpButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    popover.style.display = 'block';
});

function respond(response) {
    popover.style.display = 'none';
    overlay.style.display = 'none';
    thankYouScreen.style.display = 'flex';

    window.localStorage.setItem("status", response);
    response === 'accept' ? submit('Attending', true) : submit("Not Attending", false)

    setTimeout(() => {
        thankYouScreen.style.display = 'none';
    }, 3000);
}

acceptBtn.addEventListener('click', () => {
    respond('accept')
})

rejectBtn.addEventListener('click', () => {
    respond('reject')
})


async function submit(status) {
    try {
        const response = await fetch('/api/record/attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'name': 'Seth Joe', 'attending': status }),
        });

        const res = await response.json();

        if (status === true) {
            thankYouMessage.textContent = "We're delighted you'll be joining us for our celebration!";
        } else {
            thankYouMessage.textContent = "We're sorry you can't make it, but thank you for letting us know.";
        }
    } catch (error) {
        console.error('Error:', error);
    }

}
