const loader = document.querySelector(".loader");
const wrapper = document.querySelector(".wrapper");

window.onload = function() {
  setTimeout(function() {
    let opacity = 1;
    const interval = setInterval(function() {
      opacity -= 0.01;
      loader.style.opacity = opacity;
      wrapper.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(interval);
        loader.parentNode.removeChild(loader);
        wrapper.parentNode.removeChild(wrapper);
      }
    }, 10);
  }, 3000);
};