/* --------------- General Stuff ---------------- */

const header = document.querySelector(".header");

const submit = document.getElementById("contact_form");
const button = document.getElementById("button");

const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger__bg");
const section = document.querySelector(".section");

/* --------------- Sticky Navbar ---------------- */

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Hamburger Menu Form ---------------- */

// let isOpen = false;

// if ((document.body.classList = "open")) {
//   isOpen = true;
// }

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

hamburgerMenu.addEventListener("click", () => {
  document.body.classList.remove("open");
});

/* --------------- emailJS Form ---------------- */

button.addEventListener("click", function () {
  const fromName = document.getElementById("from_name");
  const phoneNum = document.getElementById("phone_num");
  const email = document.getElementById("email_id");

  let isFormValid = false;

  if (
    fromName.checkValidity() &&
    phoneNum.checkValidity() &&
    email.checkValidity()
  ) {
    isFormValid = true;
  }

  if (isFormValid) {
    let params = {
      from_name: fromName.value,
      phone_num: phoneNum.value,
      email_id: email.value,
      company_name: document.getElementById("company_name").value,
      message: document.getElementById("message").value,
    };
    emailjs
      .send("personal_email", "template_lar1gag", params)
      .then(function sendEmail() {
        const alertMessageEl = document.querySelector(".alert__message");
        alertMessageEl.style.display = "block";

        setTimeout(() => {
          alertMessageEl.style.display = "none";
        }, 3000);
      });
  }
});

/* --------------- Image Touch Mechanic ---------------- */

const galleryImage = document.querySelector(".gallery__img");

/*
const isTouch = function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
*/

// if (window.innerWidth < 770) {
//   galleryImage.addEventListener("touchStart", function () {});
// }
