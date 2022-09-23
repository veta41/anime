const bgEl = document.querySelectorAll(".set-bg");
console.log(bgEl);

for (let index = 0; index < bgEl.length; index++) {
  const src = bgEl[index].dataset.setbg;

  bgEl[index].style.backgroundImage = `url(${src})`;
}
