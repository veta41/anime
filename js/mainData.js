const mainData = () => {
  const renderAnimeList = (array, genres) => {
    console.log(array);
    console.log(genres);
  };

  const renderTopAnime = (array) => {
    const wrapper = document.querySelector(".filter__gallery");
    wrapper.innerHTML = "";

    array.forEach((item) => {
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `
			<div class="product__sidebar__view__item set-bg" data-setbg="${item.image}">
				<div class="ep">${item.rating} / 10</div>
				<div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
				<h5><a href="/anime-details.html">${item.title}</a></h5>
	  		</div>
			`
      );
    });

    wrapper.querySelectorAll(".set-bg").forEach((element) => {
      element.style.backgroundImage = `url(${element.dataset.setbg})`;
    });
  };

  fetch("./db.json")
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      const ganres = new Set();

      renderTopAnime(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));

      data.anime.forEach((item) => {
        GeolocationCoordinates.add(item.ganre);
      });

      renderAnimeList(data.anime, ganres);
    });
};
mainData();
