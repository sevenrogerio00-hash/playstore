const API = "http://localhost:3000";

// pegar id da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// estrelas fake
function getStars() {
  const rating = (Math.random() * 2 + 3).toFixed(1);
  return `⭐ ${rating}`;
}

// instalar com barra
function installApp(link, btn) {
  btn.innerHTML = `<div class="progress-bar"><div class="progress-fill"></div></div>`;
  btn.disabled = true;

  const fill = btn.querySelector(".progress-fill");
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 20;
    fill.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      const a = document.createElement("a");
      a.href = link;
      a.download = "";
      a.click();

      btn.innerText = "Instalar";
      btn.disabled = false;
    }
  }, 200);
}

// carregar app
fetch(API + "/apps")
  .then(res => res.json())
  .then(data => {
    const app = data.find(a => a.id == id);

    const container = document.getElementById("app-details");

    container.innerHTML = `
      <div style="padding:20px; text-align:center;">
        <img src="${app.icon}" style="width:100px; border-radius:20px;">
        <h2>${app.name}</h2>
        <p>${app.description}</p>
        <p>${getStars()} • 100 mil downloads</p>

        <button onclick="installApp('${app.download}', this)">
          Instalar
        </button>
      </div>
    `;
  });