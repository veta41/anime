const scrollToTop = () => {
  const btnScrollToTop = document.querySelector("#scrollToTopButton");

  btnScrollToTop.addEventListener("click", (e) => {
    e.preventDefault();

    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};
scrollToTop();
