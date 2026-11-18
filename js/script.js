
// 1. Greeting based on time
const greeting = document.getElementById("greeting");

if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! Welcome to My Portfolio";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! Welcome to My Portfolio";
    } else {
        greeting.textContent = "Good Evening! Welcome to My Portfolio";
    }
}


// 2. Typing Effect
const typing = document.getElementById("typing");

if (typing) {
    const words = [
        "Engineering Technologist",
        "Automation Enthusiast",
        "Technology Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        const currentWord = words[wordIndex];

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }
    }

    setInterval(typeEffect, 150);
}


// 3. Hamburger Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
}


// 4. Dark Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

    });
}


// 5. Automatic Copyright Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 6. Read More
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

if (readMoreBtn && moreText) {

    readMoreBtn.addEventListener("click", function() {

        moreText.classList.toggle("show");

        if (moreText.classList.contains("show")) {
            readMoreBtn.textContent = "Read Less";
        } else {
            readMoreBtn.textContent = "Read More";
        }

    });

}


/* 7. Animated Skill Bars */

const skillBars = document.querySelectorAll(".skill-progress");

if (skillBars.length > 0) {

    window.addEventListener("load", function() {

        skillBars.forEach(function(bar) {

            const level = bar.getAttribute("data-level");

            bar.style.width = level + "%";

        });

    });

}


/* 8. Project Filter */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedFilter = button.getAttribute("data-filter");

        // Remove active class
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        // Filter projects
        projectCards.forEach(function(card) {

            const category = card.getAttribute("data-category");

            if (selectedFilter === "all" ||
                selectedFilter === category) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});
