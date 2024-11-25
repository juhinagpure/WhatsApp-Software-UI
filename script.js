document.getElementById("attachButton").addEventListener("click", () => {
  const fileList = document.getElementById("fileList");
  const messageInput = document.getElementById("messageInput").value.trim();

  if (messageInput === "") {
    alert("Please write a message before attaching.");
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>example.jpg</td>
    <td>Image</td>
    <td>${messageInput}</td>
  `;
  fileList.appendChild(newRow);

  document.getElementById("messageInput").value = "";
});

document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("fileList").innerHTML = "";
});

document.getElementById("addContactsButton").addEventListener("click", () => {
  const contactsList = document.getElementById("contactsList");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>1</td>
    <td>+1234567890</td>
    <td>Active</td>
  `;
  contactsList.appendChild(newRow);
});

document
  .getElementById("importContactsButton")
  .addEventListener("click", () => {
    alert("Contacts Imported Successfully!");
  });

document.getElementById("saveLogButton").addEventListener("click", () => {
  alert("Log Saved!");
});

document.getElementById("deleteLogButton").addEventListener("click", () => {
  document.getElementById("logInput").value = "";
});

document.getElementById("getQRCodeButton").addEventListener("click", () => {
  alert("Generating QR Code...");
});

document.getElementById("logoutButton").addEventListener("click", () => {
  alert("Logged Out Successfully!");
});
