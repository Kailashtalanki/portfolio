const tabLinks = Array.from(document.querySelectorAll(".tab-links"));
const tabContents = Array.from(document.querySelectorAll(".tab-contents"));

function openTab(tabName) {
    tabLinks.forEach(tabLink => tabLink.classList.remove("active-link"));
    tabContents.forEach(tabContent => tabContent.classList.remove("active-tab"));

    document.getElementById(tabName + "-tab").classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

const sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwT6FrB9xzBwyZ4XGqIgc5NvfUJD3XyOWyVeZp89wx3dyrUs2JNVxI5yOZpsHi-LPnL/exec';
const msg = document.getElementById('msg');
const form = document.getElementById('submit-form');
const loadingContainer = document.getElementById('loading-container');

form.addEventListener('submit', e => {
    e.preventDefault();
    loadingContainer.classList.add('active');
    form.classList.add('blurred');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
            loadingContainer.classList.remove('active');
            form.classList.remove('blurred');
            msg.innerHTML = "Thank you for contacting me. Will get back to you ASAP!";
            form.reset();
            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message));
});