const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (name && email) {
    alert(`Thank you, ${name}! We appreciate your feedback.`);
  } else {
    alert("Please fill out all fields.");
    e.preventDefault();
  }
});
