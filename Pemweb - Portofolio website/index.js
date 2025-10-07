document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const notif = document.querySelector(".notifEmail");
  const notifText = notif ? notif.querySelector("p") : null;

  if (form && notif && notifText) {
    notif.style.display = "none";

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        notif.style.display = "block";
        notif.style.color = "lightgreen";
        notifText.textContent = "Pesan berhasil terkirim!";
        form.reset();
        setTimeout(() => notif.style.display = "none", 3000);
      } else {
        notif.style.display = "block";
        notif.style.color = "red";
        notifText.textContent = "Harap isi semua field!";
      }
    });
  }

  // --- LIGHT MODE SWITCH ---
  let lightmode = localStorage.getItem('lightmode');
  const themeSwitch = document.getElementById('toggleMode');

  const enableLightMode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
  };

  const disableLightMode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
  };

  if (lightmode === 'active') enableLightMode();

  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      lightmode = localStorage.getItem('lightmode');
      lightmode !== 'active' ? enableLightMode() : disableLightMode();
    });
  }
});

// --- Fitur Sembunyikan / Tampilkan Foto ---
const photo = document.getElementById("profilePhoto");
const toggleBtn = document.getElementById("togglePhotoBtn");

toggleBtn.addEventListener("click", () => {
  if (photo.style.display === "none") {
    photo.style.display = "block";
    toggleBtn.textContent = "Sembunyikan Foto";
  } else {
    photo.style.display = "none";
    toggleBtn.textContent = "Tampilkan Foto";
  }
});
