// Smooth scroll to contact
function scrollToContact(){
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
}

/* =========================
   SCROLL PROGRESS BAR
========================= */
window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;

  document.getElementById("progress").style.width = scrolled + "%";
});

/* =========================
   FADE-IN ANIMATION
========================= */
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

elements.forEach(el => observer.observe(el));

/* =========================
   FORM HANDLING
========================= */
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const button = this.querySelector("button");

  // Change button text
  button.innerText = "✔ Booking Done";
  button.style.background = "#22c55e";

  // Show alert
  alert("🎉 Your appointment request has been sent!");

  // Reset form after 2 sec
  setTimeout(()=>{
    form.reset();
    button.innerText = "💖 Book Now";
    button.style.background = "linear-gradient(90deg,#ff4da6,#a855f7)";
  },2000);
});

/* =========================
   HEADER SHADOW ON SCROLL
========================= */
window.addEventListener("scroll", ()=>{
  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    header.style.boxShadow = "none";
  }
});