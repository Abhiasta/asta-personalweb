function Mailing(event) {
  event.preventDefault();

  const Name = document.getElementById(`Name`).value;
  const Email = document.getElementById(`Email`).value;
  const Phone = document.getElementById(`Phone`).value;
  const Subject = document.getElementById(`Subject`).value;
  const Msg = document.getElementById(`Msg`).value;
}

// if (Name == "") {
//   return alert("name cannot be empty");
// }

console.log(Name);
console.log(Email);
console.log(Phone);
console.log(Subject);
console.log(Msg);
