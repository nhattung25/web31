const getGameList = function () {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d48a39b357mshf6f41aa52b9e20ep1ad2e6jsnfe8c43a57d1c",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  return fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    options
  ).then((response) => response.json());
};

const platform = function (platform) {
  if (platform === "PC (Window") {
    return `PC <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
  <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
</svg>`;
  } else
    return `web <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>`;
};

const toGameCard = function (games) {
  return `
        <a href="">
    <div class="card-container">
      <div class="thumbnail">
        <img src="${games.thumbnail}" alt="${games.title}" />
      </div>
      <div class="name-tag">
        <div class="name">${games.title}</div>
        <div class="tag">FREE</div>
      </div>
      <div class="shortDes">${games.short_description}</div>
      <div class="type-plat">
        <div class="type">${games.genre}</div>
        <div class="platform">${games.platform}</div>
      </div>
    </div>
</a>
      `;
};

window.onload = function () {
  const gameList = document.querySelector(".game-list");
  getGameList().then(function (games) {
    gameList.innerHTML = games.map(toGameCard).join("");
  });
};
