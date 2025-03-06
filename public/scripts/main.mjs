const loading = document.getElementById("loading");
const rsvpFormView = document.getElementById("rsvpFormView");
const thankYouView = document.getElementById("thankYouView");

const acceptBtn = document.getElementById("accept");
const rejectBtn = document.getElementById("reject");

const dinnerInvite = document.getElementById("toDinner");

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

window.onload = async () => {
  const friendId = getURLParameter("share");
  if (friendId == null) {
    alert("Click on the link sent to you again!");
    return;
  } else {
    const response = await fetch("/api/record/invitees-data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      response.json().then((data) => {
        const friend = data.find((friend) => friend.id == friendId);
        localStorage.setItem("invitee", JSON.stringify(friend));
        if (friend.todinner.trim() === "TRUE") {
          dinnerInvite.classList.remove("hidden");
        }
      });
    }
  }
};

async function respond(response) {
  window.localStorage.setItem("status", response);
  const friendId = getURLParameter("share");
  if (friendId == null) {
    alert("Click on the link sent to you again!");
    return;
  } else {
    rsvpFormView.classList.add("hidden");
    loading.classList.remove("hidden");
    let friend = localStorage.getItem("invitee");
    if (friend) {
      friend = JSON.parse(friend);
      response === "accept"
        ? submit("Attending", true, friend.name)
        : submit("Not Attending", false, friend.name);

      setTimeout(() => {
        thankYouView.classList.remove("hidden");
        loading.classList.add("hidden");
      }, 10000);
    }else{
      alert("Please reload the page!")
    }
  }
}

acceptBtn.addEventListener("click", () => {
  respond("accept");
});

rejectBtn.addEventListener("click", () => {
  respond("reject");
});

async function submit(status_text, status, name) {
  const thankYouTitle = document.getElementById("thankYouTitle");
  const thankYouMessage = document.getElementById("thankYouMessage");
  if (status === true) {
    thankYouTitle.textContent = "Thank you for accepting!";
    thankYouMessage.textContent = "We're excited to see you!";
  } else {
    thankYouTitle.textContent = "Thank you for letting us know!";
    thankYouMessage.textContent = "We'll miss you. Maybe next time!";
  }
  try {
    const response = await fetch("api/record/attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, attending: status_text }),
    });

    if (!response.ok) {
      alternativeStorage(name, status_text);
    } else {
    }
  } catch (error) {
    alternativeStorage(name, status_text);
    console.error("Error:", error);
  }
}

async function alternativeStorage(name, status) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  // Send data to server via POST request
  fetch("/api/record/save-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, status, formattedDate }),
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
}
