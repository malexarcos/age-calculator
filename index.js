function calculateAge() {
  const input = document.getElementById("age").value;
  const age = parseInt(input);

  if (isNaN(age) || age < 0) {
    // Display error message
    const result = document.getElementById("result");
    result.innerText = "Please enter a valid age.";
    result.style.color = "red";
  } else {
    // Calculate age and display result
    const today = new Date();
    const birthDate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate());
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = birthDate.getFullYear();
    const result = document.getElementById("result");
    result.innerText = "You were born in " + formattedDate + ".";
    result.style.color = "black";
  }
}
