// Function to validate email using a regular expression
function emailValidate() {
    const email = document.getElementById("email").value.trim();
    const emailReg = /^[a-z0-9]+@[a-z]+\.[^\s@]+$/;

    return emailReg.test(email);
}

// Function to store user data in local storage
function storeData() {
    const firstName = document.getElementById("FirstName").value.trim();
    const lastName = document.getElementById("LastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const userName = document.getElementById("userName").value.trim();

    const user = {
        "name": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phone": phone,
        "userName": userName
    };

    // Check if the browser supports local storage
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
    } else {
        alert("Sorry! Your browser does not support local storage");
    }
}

// Event listener for form submission
const submit = document.getElementById("submit");

submit.addEventListener("click", async (e) => {
    e.preventDefault();

    // Get form input values
    const firstName = document.getElementById("FirstName").value.trim();
    const lastName = document.getElementById("LastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("Phone").value.trim();
    const userName = document.getElementById("userName").value.trim();

 // If all fields are valid, proceed with saving user data 
        const user = {
            "name": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phone": phone,
            "userName": userName
        };

        try {
            // Make a POST request to save user data
            const response = await fetch("http://localhost:8080/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                window.alert("User saved successfully 🤩");
                window.location.href = "http://127.0.0.1:5500/index.html";
            } else {
                window.alert(user.email + " is already in use. Please go for sign-up.");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred while saving user");
        }
    } 
);
// Feedback


sendMessage.addEventListener("click", async (e) => {
    e.preventDefault();

    // Get form input values
    const name = document.getElementById("contact-your-name-2").value.trim();
    const email = document.getElementById("contact-email-2").value.trim();
    const phone = document.getElementById("contact-phone-2").value.trim();
    const message =document.getElementById("contact-message-2")

 // If all fields are valid, proceed with saving user data 
        const mess = {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message
        };

        try {
            // Make a POST request to save user data
            const response = await fetch("http://localhost:8080/user/Email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mess),
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                window.alert("send successfully 🤩");
                window.location.href = "http://127.0.0.1:5500/index.html";
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred while sending Feedback user");
        }
    } 
);
