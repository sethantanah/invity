import { friendsList } from "./data.mjs";
const rsvpButton = document.querySelector('#rsv');
const overlay = document.getElementById('overlay');
const popover = document.getElementById('rsvpPopover');
const thankYouScreen = document.getElementById('thankYouScreen');
const thankYouMessage = document.getElementById('thankYouMessage');
const gallaryContainer = document.getElementById('gallery-container');

const acceptBtn = document.getElementById('accept');
const rejectBtn = document.getElementById('reject');

function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// const adminId = getURLParameter('admin');
// if (adminId === process.env.ADMIN) {
//     document.getElementById('share-link').classList.remove('hidden');
// }



rsvpButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    popover.style.display = 'block';

    // Dismiss modal when clicking on the overlay
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            popover.style.display = 'none';
        }
    });
});

function respond(response) {
    popover.style.display = 'none';
    overlay.style.display = 'none';
    thankYouScreen.style.display = 'flex';

    window.localStorage.setItem("status", response);
    const friendId = getURLParameter('share');
    if (friendId == null) {
        alert("Click on the link sent to you again!");
        return;
    }

    const friend = friendsList.find(friend => friend.id == friendId);
    response === 'accept' ? submit('Attending', true, friend.name) : submit("Not Attending", false, friend.name)

    setTimeout(() => {
        thankYouScreen.style.display = 'none';
    }, 30000);
}

acceptBtn.addEventListener('click', () => {
    respond('accept')
})

rejectBtn.addEventListener('click', () => {
    respond('reject')
})



async function submit(status_text, status, name) {
    if (status === true) {
        thankYouMessage.textContent = "We're delighted you'll be joining us for our celebration!";
    } else {
        thankYouMessage.textContent = "We're sorry you can't make it, but thank you for letting us know.";
    }
    try {
        const response = await fetch('api/record/attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'name': name, 'attending': status_text }),
        });

        if (!response.ok) {
            alert("Could not submit! Try again.");
        }

    } catch (error) {
        console.error('Error:', error);
    }

}
