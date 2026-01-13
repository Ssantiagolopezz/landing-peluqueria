const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const visible = 150;

    if (top < window.innerHeight - visible) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const phone = "5493564304440"; // cambiar por el del cliente
  const text = `Hola, soy ${name}. ${message}`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}
