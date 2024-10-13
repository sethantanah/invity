import { friendsList } from "./data.mjs";

// Get the table body element
const friendsTable = document.getElementById("friends-table");

// Populate the table with the friends list
friendsList.forEach((friend, index) => {
    if(friend.tableNumber !== ""){
        const row = document.createElement("tr");

        // ID Column
        const indexCell = document.createElement("td");
        indexCell.className = "py-2 px-4 border-b text-center";
        indexCell.textContent = (index + 1).toString();
        row.appendChild(indexCell);

    // ID Column
    const idCell = document.createElement("td");
    idCell.className = "py-2 px-4 border-b text-center";
    idCell.textContent = friend.tableNumber;
    row.appendChild(idCell);

    // Name Column
    const nameCell = document.createElement("td");
    nameCell.className = "py-2 px-4 border-b text-left";
    nameCell.textContent = friend.name;
    row.appendChild(nameCell);

    // Phone Column
    const phoneCell = document.createElement("td");
    phoneCell.className = "py-2 px-4 border-b text-left";
    phoneCell.textContent = friend.phone;
    row.appendChild(phoneCell);

    // Actions Column
    const actionCell = document.createElement("td");
    actionCell.className = "py-2 px-4 border-b text-center flex flex-row gap-2";
    
    // // WhatsApp Button
    // const message = `John and Vivian's 45th Anniversary Invitation.\nlink: https://johnandvivian.com/?share=${friend.id}`;
    // const whatsappLink = document.createElement("a");
    // whatsappLink.href = `https://wa.me/${friend.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`; // WhatsApp share link
    // whatsappLink.target = "_blank";
    // whatsappLink.className = "bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600";
    // whatsappLink.textContent = "WhatsApp";
    // actionCell.appendChild(whatsappLink);

    // // Space between buttons
    // actionCell.appendChild(document.createTextNode(" "));


     // SMS Button
  const smsMessage = `45th Annivesary of John and Vivian, we have reserved a seat at table  ${friend.tableNumber} for you.`;
  const smsLink = document.createElement("a");
  smsLink.href = `sms:${friend.phone}?body=${encodeURIComponent(smsMessage)}`; // SMS share link
  smsLink.className = "bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600";
  smsLink.textContent = "Send SMS";
  actionCell.appendChild(smsLink);

  // Space between buttons
  actionCell.appendChild(document.createTextNode(" "));

  // WhatsApp Button
  const whatsappMessage = `45th Annivesary of John and Vivian, we have reserved a seat at table  ${friend.tableNumber} for you.`;
  const whatsappLink2 = document.createElement("a");
  whatsappLink2.href = `https://wa.me/${friend.phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`; // WhatsApp share link
  whatsappLink2.target = "_blank";
  whatsappLink2.className = "bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600";
  whatsappLink2.textContent = "Table Number WhatsApp";
  actionCell.appendChild(whatsappLink2);

    // View Button
    const viewLink = document.createElement("a");
    // viewLink.href = `https://www.23333.com/?id=${friend.id}`; // View URL
    viewLink.href = `https://johnandvivian.com/?share=${friend.id}`;
    viewLink.target = "_blank";
    viewLink.className = "bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600";
    viewLink.textContent = "View";
    actionCell.appendChild(viewLink);

    row.appendChild(actionCell);

    friendsTable.appendChild(row);
    }
});