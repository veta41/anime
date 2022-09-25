const bgElements = () => {
  const bgEl = document.querySelectorAll(".set-bg");

  bgEl.forEach((element) => {
    element.style.backgroundImage = `url(${element.dataset.setbg})`;
  });
};

bgElements();
