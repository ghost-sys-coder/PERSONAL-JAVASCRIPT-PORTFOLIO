/**
 * ! Responsive Navigation
 */
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle("active");
}


/**
 * ! Handling the active class when changing sections
 */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add('active');
            })
        }
    });

/**
 * ! Handling the Sticky Navigation bar
 */
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

/**
 * ! Remove toggle icon and navbar when click
 */
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}


/**
 * ! Loading Portfolio Projects
 */

const portfolioContainer = document.querySelector(".portfolio--container");

const loadProjects = () => {
    return (
        portfolioContainer.innerHTML = portfolioItems.map((project, index) => {
            const { imgUrl, title, desc, projectUrl, githubUrl, username, password } = project;

            return `
                <div key=${index} class="portfolio--box">
                    <img src=${imgUrl} alt=${title} />
                    <div class="portfolio--layer">
                        <div class="user--account">
                            <h3 class="username">Test Email:<span>${username}</span></h3>
                            <h3 class="password">Test Password: <span>${password}</span></h3>
                        </div>
                        <h4>${title}</h4>
                        <p>${desc}</p>
                        <div class="links">
                            <a href=${projectUrl} target="_blank">
                            <i class="bx bx-link-external"></i>
                            </a>
                            <a href=${githubUrl} target="_blank">
                            <i class='bx bxl-github'></i>
                            </a>
                        </div>
                    </div>
                </div>
            `
        }).join("")
    )
}

window.addEventListener("DOMContentLoaded", loadProjects);

window.onload = () => {
    const userAccount = portfolioContainer.querySelectorAll('.user--account');
    userAccount.forEach(account => {
        const span = account.querySelector('span');
        if (span.textContent === "") {
            account.style.display = 'none';
        }
    })
}



/**
 * ! Scroll Reveal
 */

ScrollReveal({
    // reset: true,
    distance: "20px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home--cotent, .heading', {origin: 'top'});
ScrollReveal().reveal('.home--image, .services--container, .portfolio--box, .contact, form', { origin: 'bottom' });
ScrollReveal().reveal('.about--image', { origin: 'left' });
ScrollReveal().reveal('.home--content, h1, h3', { origin: "left" });
ScrollReveal().reveal(".portfolio--container, .portfolio--box", { origin: "right" });

/**
 * ! Typed JS
 */
const typed = new Typed('.multiple--text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/**
 * ! Handling Form Data
 */

const form = document.querySelector("form");
const fullName = form.querySelector("#fullname");
const email = form.querySelector("#email");
const mobile = form.querySelector("#mobile");
const emailSubject = form.querySelector("#emailSubject");
const message = form.querySelector("#message");

const formBtn = form.querySelector("input[type='submit']");
const alertBox = document.querySelector(".alert");




form.onsubmit = async (event) => {
    event.preventDefault();
   
    const response = await fetch("/home/", {
        method: "POST",
        cache: "no-cache",
        mode: "cors",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullName: fullName.value,
            email: email.value,
            mobile: mobile.value,
            emailSubject: emailSubject.value,
            message: message.value
        })
    });

    formBtn.value = "Sending...";

    if (response.status === 200) {
        fullName.value = "";
        email.value = "";
        mobile.value = "";
        emailSubject.value = "";
        message.value = "";

        formBtn.value = "Send Message";
        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 2000)
    }
    
}

/**
 * ! Services Box
 */
const serviceBoxes = document.querySelectorAll(".services--box");
serviceBoxes.forEach(serviceBox => {
    const btn = serviceBox.querySelector("button");
    const infoBox = serviceBox.querySelector(".tech--stack");

    const closeBox = infoBox.querySelector("i");

    btn.onclick = () => {
        infoBox.style.display = "block";
    }

    closeBox.onclick = () => {
        infoBox.style.display = "none";
    }
});

/**
 * ! About Content Section
 */

const aboutContent = document.querySelector(".about--content");
const aboutContentBtn = aboutContent.querySelector('button');
const hideText = aboutContent.querySelector(".hide--text");

aboutContentBtn.addEventListener("click", () => {

    if (hideText.classList.contains("hide--text")) {
        hideText.classList.remove("hide--text");
        aboutContentBtn.innerText = "Show Less";
    } else {
        hideText.classList.add("hide--text");
        aboutContentBtn.innerText = "Read More"
    }
});
