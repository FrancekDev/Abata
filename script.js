/* --------------- General Stuff ---------------- */

const header = document.querySelector(".header");

const submit = document.getElementById("contact_form");
const button = document.getElementById("button");

const hamburger = document.querySelector(".hamburger");

/*
const from_name = document.getElementById("from_name");
const phone_num = document.getElementById("phone_num").value;
const email_id = document.getElementById("email_id").value;
const company_name = document.getElementById("company_name").value;
const message = document.getElementById("message").value;
*/
/* --------------- Sticky Navbar ---------------- */

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Hamburger Menu Form ---------------- */

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
  document.body.classList.toggle("close");
});

/* --------------- emailJS Form ---------------- */

/*-----> RADI ali ne rquired <-----*/

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
      from_name: document.getElementById("from_name").value,
      phone_num: document.getElementById("phone_num").value,
      email_id: document.getElementById("email_id").value,
      company_name: document.getElementById("company_name").value,
      message: document.getElementById("message").value,
    };
    emailjs
      .send("personal_email", "template_lar1gag", params)
      .then(function () {
        alert(`Poslano!`);
      });
  }
});

/* RADI ali ne šalje vrijednosti
let params = {
  from_name: document.getElementById("from_name").value,
  phone_num: document.getElementById("phone_num").value,
  email_id: document.getElementById("email_id").value,
  company_name: document.getElementById("company_name").value,
  message: document.getElementById("message").value,
};

submit.addEventListener("click", function () {
  if (from_name.checkValidity()) {
    console.log("sending");

    emailjs
      .send("personal_email", "template_lar1gag", params)
      .then(function () {
        alert(`Poslano!`);
      });
  }
});
*/
