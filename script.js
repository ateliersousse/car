// تحديث السنة تلقائياً
document.getElementById("year").textContent = new Date().getFullYear();

// Lightbox setup
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightImg");
const lightVideo = document.getElementById("lightVideo");
const closeLight = document.getElementById("closeLight");

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

const closeLightbox = () => {
  lightbox.style.display = "none";
  lightVideo.pause();
  lightVideo.currentTime = 0;
};
closeLight.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeLightbox(); });

// Contact form to WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = encodeURIComponent(this.name.value.trim());
  const phone = encodeURIComponent(this.phone.value.trim());
  const msg = encodeURIComponent(this.message.value.trim());
  if(!name) return alert("Veuillez entrer votre nom / الرجاء إدخال الاسم");
  const text = `Nom: ${name}%0A📞 Téléphone: ${phone}%0A💬 Message: ${msg}`;
  const whatsappUrl = `https://wa.me/21626485396?text=${text}`;
  window.open(whatsappUrl, "_blank");
});

// SEO dynamique (optionnel) - أي keyword من input field يعرض portfolio/video
const keywordInput = document.createElement("input");
keywordInput.type = "text";
keywordInput.placeholder = "Tapez type de voiture ou pièce pour filtrer...";
keywordInput.id = "seoKeyword";
keywordInput.style.width = "100%";
keywordInput.style.margin = "10px 0";
document.querySelector(".container").prepend(keywordInput);

keywordInput.addEventListener("input", () => {
  const keyword = keywordInput.value.toLowerCase();
  document.querySelectorAll("#portfolio-grid .thumb").forEach(el => {
    const label = el.querySelector(".label").textContent.toLowerCase();
    el.style.display = label.includes(keyword) ? "block" : "none";
  });
  // تحديث meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if(keyword) metaDesc.setAttribute("content", `Découvrez nos services pour ${keyword} / شوف خدماتنا ل${keyword}`);
  else metaDesc.setAttribute("content", "Services professionnels de peinture, réparation, polissage, correction couleur et accessoires pour voitures de luxe. شوف صور وفيديوهات قبل وبعد لكل أنواع السيارات وقطع الغيار");
});
    
        
