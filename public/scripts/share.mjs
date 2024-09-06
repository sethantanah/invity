import { friendsList } from "./data.mjs";

// Get the table body element
const friendsTable = document.getElementById("friends-table");

// Populate the table with the friends list
friendsList.forEach(friend => {
    const row = document.createElement("tr");

    // ID Column
    const idCell = document.createElement("td");
    idCell.className = "py-2 px-4 border-b text-center";
    idCell.textContent = friend.id;
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
    actionCell.className = "py-2 px-4 border-b text-center";
    
    // WhatsApp Button
    const message = `Your invitation ${friend.name}, link: https://johnandvivian.com/?share=${friend.id}`;
    const whatsappLink = document.createElement("a");
    whatsappLink.href = `https://wa.me/${friend.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`; // WhatsApp share link
    whatsappLink.target = "_blank";
    whatsappLink.className = "bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600";
    whatsappLink.textContent = "WhatsApp";
    actionCell.appendChild(whatsappLink);

    // Space between buttons
    actionCell.appendChild(document.createTextNode(" "));

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
});