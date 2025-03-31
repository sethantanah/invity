const baseURL = window.location.origin;
const loading = document.getElementById("loading");
const response = await fetch("/api/record/invitees-data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

if (response.status === 200) {
  loading.style.display = "none";
  response.json().then((data) => {
    // Get the table body element
    const friendsTable = document.getElementById("friends-table");

    // Populate the table with the friends list
    data.forEach((friend, index) => {
      const phoneNumber = friend.phone[0] === '+' ?  friend.phone : `+${friend.phone}`;
      const row = document.createElement("tr");
      // Phone Column
      const phoneCell = document.createElement("td");
      phoneCell.className = "py-2 px-4 border-b text-left";
      phoneCell.textContent =  phoneNumber;
      row.appendChild(phoneCell);

      // Name Column
      const nameCell = document.createElement("td");
      nameCell.className = "py-2 px-4 border-b text-left";
      nameCell.textContent = friend.name;
      row.appendChild(nameCell);

      // Actions Column
      const actionCell = document.createElement("td");
      actionCell.className =
        "py-2 px-4 border-b text-center flex flex-row gap-2";

      // // WhatsApp Button
      const message = `From the Frimpong family, we would like to thank you all for your unwavering support and prayers to make our day a success. May Jehovah God continually bless you all. Num. 6:24-26`;
      const whatsappLink = document.createElement("a");
      whatsappLink.href = `https://wa.me/${phoneNumber.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(message)}`; // WhatsApp share link
      whatsappLink.target = "_blank";
      whatsappLink.className =
        "bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600";
      whatsappLink.textContent = "WhatsApp";
      actionCell.appendChild(whatsappLink);

      // Space between buttons
      actionCell.appendChild(document.createTextNode(" "));

      // SMS Button
      const smsMessage = `From the Frimpong family, we would like to thank you all for your unwavering support and prayers to make our day a success. May Jehovah God continually bless you all. Num. 6:24-26`;
      const smsLink = document.createElement("a");
      smsLink.href = `sms:${phoneNumber}?body=${encodeURIComponent(
        smsMessage
      )}`; // SMS share link
      smsLink.className =
        "bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600";
      smsLink.textContent = "Send SMS";
      // actionCell.appendChild(smsLink);

      // Space between buttons
      actionCell.appendChild(document.createTextNode(" "));

      // ID Column
      const idCell = document.createElement("td");
      idCell.className = "py-2 px-4 border-b text-center";
      idCell.textContent = friend.tableNumber;
      row.appendChild(idCell);

      // View Button
      const viewLink = document.createElement("a");
      viewLink.href = `${baseURL}/?share=${friend.id}`;
      viewLink.target = "_blank";
      viewLink.className =
        "bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600";
      viewLink.textContent = "View";
      actionCell.appendChild(viewLink);

      row.appendChild(actionCell);

      friendsTable.appendChild(row);
    });
  });
}
