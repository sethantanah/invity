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

thankYouScreen.addEventListener('click', ()=>{
    thankYouScreen.style.display = 'none';
})

function respond(response) {
    window.localStorage.setItem("status", response);
    const friendId = getURLParameter('share');
    if (friendId == null) {
        alert("Click on the link sent to you again!");
        return;
    }else{
        popover.style.display = 'none';
        overlay.style.display = 'none';
        thankYouScreen.style.display = 'flex';
        const friend = friendsList.find(friend => friend.id == friendId);
        response === 'accept' ? submit('Attending', true, friend.name) : submit("Not Attending", false, friend.name)
    
        setTimeout(() => {
            thankYouScreen.style.display = 'none';
        }, 20000);
    }
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
            alternativeStorage(name, status_text);
            //alert("Could not submit! Try again.");
        }else{
            alternativeStorage(name, status_text);
        }

    } catch (error) {
        alternativeStorage(name, status_text);
        console.error('Error:', error);
    }

}


async function alternativeStorage(name, status) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    // Send data to server via POST request
    fetch('/api/record/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, status, formattedDate }),
    })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
