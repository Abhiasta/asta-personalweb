function Mailing(event) {
  event.preventDefault();

  const Name = document.getElementById(`Name`).value;
  const Email = document.getElementById(`Email`).value;
  const Phone = document.getElementById(`Phone`).value;
  const Subject = document.getElementById(`Subject`).value;
  const Message = document.getElementById(`Message`).value;

  console.log(Name);
  console.log(Email);
  console.log(Phone);
  console.log(Subject);
  console.log(Message);

  if (Name == "") {
    return alert("name cannot be empty");
  } else if (Email == "") {
    return alert("Email cannot be empty");
  } else if (Phone == "") {
    return alert("Phone cannot be empty");
  } else if (Subject == "") {
    return alert("Subject cannot be empty");
  } else if (Message == "") {
    return alert("Message cannot be empty");
  }

  const a = document.createElement("a");
  a.href = `mailto:${Email}?subject=${Subject}&body=${encodeURIComponent(
    Message
  )}`;
  a.click();
}
