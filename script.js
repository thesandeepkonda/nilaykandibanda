// ==========================================
// POWER BI PORTFOLIO JAVASCRIPT
// ==========================================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});

// ==========================================
// Sticky Navbar
// ==========================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.padding = "15px 8%";
        navbar.style.background = "rgba(13,17,23,.95)";
        navbar.style.boxShadow = "0 15px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.padding = "22px 8%";
        navbar.style.background = "rgba(10,15,25,.72)";
        navbar.style.boxShadow = "none";

    }

});

// ==========================================
// Scroll Reveal
// ==========================================

const reveals = document.querySelectorAll(".fade-up");

function revealElements() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ==========================================
// Animated Counters
// ==========================================

const counters = document.querySelectorAll(".hero-info h2");

function animateCounter(counter) {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

        count += increment;

        if (count >= target) {

            counter.innerText = target + "+";

            clearInterval(timer);

        } else {

            counter.innerText = count + "+";

        }

    }, 20);

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const heroInfo = document.querySelector(".hero-info");

    if (!heroInfo) return;

    const top = heroInfo.getBoundingClientRect().top;

    if (top < window.innerHeight && !counterStarted) {

        counters.forEach(animateCounter);

        counterStarted = true;

    }

});

// ==========================================
// Progress Bars Animation
// ==========================================

const progressBars = document.querySelectorAll(".progress span");

function animateBars() {

    progressBars.forEach(bar => {

        const width = bar.style.width || getComputedStyle(bar).width;

        bar.style.width = "0";

        setTimeout(() => {

            if (bar.classList.contains("powerbi")) bar.style.width = "98%";
            if (bar.classList.contains("dax")) bar.style.width = "95%";
            if (bar.classList.contains("sql")) bar.style.width = "90%";
            if (bar.classList.contains("excel")) bar.style.width = "97%";
            if (bar.classList.contains("powerquery")) bar.style.width = "94%";
            if (bar.classList.contains("etl")) bar.style.width = "89%";
            if (bar.classList.contains("datamodel")) bar.style.width = "91%";
            if (bar.classList.contains("reporting")) bar.style.width = "96%";

        }, 300);

    });

}

window.addEventListener("load", animateBars);

// ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// Dashboard Card Hover Effect
// ==========================================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(242,200,17,.15),
            rgba(27,36,48,1) 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1b2430";

    });

});

// ==========================================
// Console Welcome Message
// ==========================================

console.log("%cWelcome to Nilay Kandibanda's Portfolio",
    "color:#F2C811;font-size:20px;font-weight:bold;");

console.log("%cPower BI Consultant | Data Analytics | Business Intelligence",
    "color:white;font-size:14px;");
