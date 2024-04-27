const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Import the functions you need from the SDKs you need


// Initialize Firebase



document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");
  
    if (passwordInput && showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", function() {
            if (showPasswordCheckbox.checked) {
                // Change input type to "text" to show password
                passwordInput.type = "text";
            } else {
                // Change input type back to "password" to hide password
                passwordInput.type = "password";
            }
        });
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("pwph");
    const showPasswordCheckbox = document.getElementById("showPasswordin");
  
    if (passwordInput && showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", function() {
            if (showPasswordCheckbox.checked) {
                // Change input type to "text" to show password
                passwordInput.type = "text";
            } else {
                // Change input type back to "password" to hide password
                passwordInput.type = "password";
            }
        });
    }
  });
