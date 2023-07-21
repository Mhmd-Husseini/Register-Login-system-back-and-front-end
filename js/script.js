function validateSignUpForm() {
  const username = document.getElementById("signup_username").value;
  const password = document.getElementById("signup_password").value;
  const firstName = document.getElementById("signup_fname").value;
  const lastName = document.getElementById("signup_lname").value;

  if (!username || !password || !firstName || !lastName) {
    alert("Please provide all required fields.");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup").addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateSignUpForm()) {
          fetch("http://127.0.0.1/Register-Login-system-back-and-front-end/apis/signup.php", {
            method: "POST",
            body: new FormData(event.target)
          })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message); 
          })
          .catch((error) => console.log(error));
        };
      });
    document.getElementById("signin").addEventListener("submit", function(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        fetch("http://127.0.0.1/Register-Login-system-back-and-front-end/apis/signin.php", {
          method: "POST",
          body: formData
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == "logged in") {
            window.location.href = `dashboard.html?username=${encodeURIComponent(data.username)}`;
        } else {
            alert(data.status);
          }
        })
        .catch((error) => console.log(error));
      });
      
  });
