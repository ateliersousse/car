document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightImg");
const lightVideo = document.getElementById("lightVideo");

document.querySelectorAll(".thumb").forEach(el => {
  el.addEventListener("click", () => {
    const videoSrc = el.getAttribute("data-video");
    if (videoSrc) {
      lightVideo.src = videoSrc;
      lightVideo.style.display = "block";
      lightImg.style.display = "none";
    } else {
      lightImg.src = el.querySelector("img").src;
      lightImg.style.display = "block";
      lightVideo.style.display = "none";
    }
    lightbox.style.display = "flex";
  });
});

document.getElementById("closeLight").addEventListener("click", () => {
  lightbox.style.display = "none";
  lightVideo.pause();
});

// Contact form to WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const msg = this.message.value;
  const text = `Nom: ${name}%0A📞 Téléphone: ${phone}%0A💬 Message: ${msg}`;
  const whatsappUrl = `https://wa.me/21626485396?text=${text}`;
  window.open(whatsappUrl, "_blank");
});
        
