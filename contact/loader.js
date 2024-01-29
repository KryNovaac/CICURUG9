const loader = document.querySelector(".loader");
const wrapper = document.querySelector(".wrapper");
const profile = document.querySelector(".satu");

window.onload = function() {
  // Buat profile terlihat
  profile.style.visibility = "visible";

  // Atur opacity loader menjadi transparan
  loader.style.opacity = 0.5;

  // Animasi fade-in untuk profile
  profile.style.animation = "fade-in 1s ease-in-out forwards";

  // Hapus animasi fade-out untuk loader dan wrapper
  loader.style.animation = "";
  wrapper.style.animation = "";
};

