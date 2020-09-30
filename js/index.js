const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// navigation bar
let navAnchors = document.querySelectorAll('nav a');
navAnchors[0].textContent = "Services";
navAnchors[1].textContent = "Product";
navAnchors[2].textContent = "Vision";
navAnchors[3].textContent = "Features";
navAnchors[4].textContent = "About";
navAnchors[5].textContent = "Contact";

const logoImage = document.querySelector('#logo-img');
logoImage.src = "img/logo.png";

// cta
const newh1 = document.querySelector('h1');
newh1.textContent = "DOM Is Awesome";

const newButton = document.querySelector('button');
newButton.textContent = "Get Started";

const headerImage = document.querySelector('#cta-img');
headerImage.src = "img/header-img.png";

// main content

const middleContentH = document.querySelectorAll(".text-content h4");
const middleContentP = document.querySelectorAll(".text-content p");

middleContentH[0].textContent = "Features";
middleContentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

middleContentH[1].textContent = "About";
middleContentP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

middleContentH[2].textContent = "Services";
middleContentP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

middleContentH[3].textContent = "Product";
middleContentP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

middleContentH[4].textContent = "Vision";
middleContentP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImage = document.querySelector("#middle-img");

middleImage.src = "img/mid-page-accent.jpg";

// contact section 

const contactH = document.querySelector(".contact h4");

contactH.textContent = "Contact";

const contactP = document.querySelectorAll(".contact p");

contactP[0].textContent = "123 Way 456 Street Somewhere, USA";
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";

//footer

const footerP = document.querySelector('footer p');
footerP.textContent = "Copyright Great Idea! 2018";


// adding new content
const newNav = document.querySelector('nav');
const newA1 = document.createElement('a');
const newA2 = document.createElement('a');

newA1.textContent = "Keyboard";
newA2.textContent = "Mouse";
newNav.appendChild(newA1);
newNav.prepend(newA2);


// changing color of nav text
const greenLoop = document.querySelectorAll('a');
greenLoop.forEach((item) => {
    item.style.color = "green";
});