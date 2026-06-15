// Highlight active page

const links = document.querySelectorAll("nav a");

links.forEach(link => {

if(link.href === window.location.href){

link.style.background = "#0066cc";

}

});

// Smooth fade-in

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});

// Simple welcome message

console.log("Welcome to Super Security");

function loginUser(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(username === "" || password === ""){
alert("Please enter username and password");
return;
}

alert("Login successful!");
}

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

if(name === "" || email === "" || message === ""){
alert("Please complete all fields");
return;
}

alert("Message sent successfully!");

contactForm.reset();

});

}