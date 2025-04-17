// let yourName = null;

// // Loop sampai pengguna memasukkan nama
// while (!yourName) {
//     yourName = prompt("What is your name?");
    
//     // Jika user menekan cancel, tetap minta input
//     if (yourName === null || yourName.trim() === "") {
//         alert("Name is required to continue. Please enter your name.");
//         yourName = null; // Reset untuk meminta lagi
//     }
// }

// const welcomeEl = document.getElementById("welcome-message");
// if (welcomeEl) {
//     welcomeEl.innerText = `Hi ${yourName}, Welcome to Our Website`;
// }

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.banner-slide');

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";

    setTimeout(() => plusSlides(1), 10000);
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById("message").value;
    const timeNow = new Date().toString();

    document.getElementById("result-name").innerText = name;
    document.getElementById("result-dob").innerText = dob;
    document.getElementById("result-gender").innerText = gender;
    document.getElementById("result-message").innerText = message;
    document.getElementById("current-time").innerText = timeNow;
});