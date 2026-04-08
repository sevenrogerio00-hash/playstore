const API = "http://localhost:3000";

// estrelas fake
function getStars() {
  const rating = (Math.random() * 2 + 3).toFixed(1);
  return `⭐ ${rating}`;
}

// downloads fake
function getDownloads() {
  const num = Math.floor(Math.random() * 900 + 100);
  return num + " mil downloads";
}

// abrir página do app
function openApp(id) {
  window.location.href = "app.html?id=" + id;
}

// instalar com barra de progresso
function installApp(link, btn) {
  btn.innerHTML = `
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
  `;
  btn.disabled = true;

  const fill = btn.querySelector(".progress-fill");

  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15;
    fill.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      // iniciar download
      const a = document.createElement("a");
      a.href = link;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      btn.innerText = "Instalar";
      btn.disabled = false;
    }
  }, 200);
}

// carregar apps
function loadApps() {
  const loading = document.getElementById("loading");
  const container = document.getElementById("apps");

  loading.style.display = "block";
  container.innerHTML = "";

  fetch(API + "/apps")
    .then(res => res.json())
    .then(data => {

      // embaralhar apps (tipo recomendados)
      data.sort(() => 0.5 - Math.random());

      const search = document.getElementById("search").value.toLowerCase();

      const filtered = data.filter(app =>
        app.name.toLowerCase().includes(search)
      );

      loading.style.display = "none";

      filtered.forEach((app, index) => {
        const div = document.createElement("div");
        div.className = "app";

        div.innerHTML = `
          <div onclick="openApp(${app.id})" style="display:flex; align-items:center; width:100%; cursor:pointer;">
            <img src="${app.icon}" loading="lazy">
            
            <div class="app-info">
              <h3>${app.name}</h3>
              <p>${app.description}</p>
              <div class="stars">${getStars()} • ${getDownloads()}</div>
            </div>
          </div>

          <button onclick="event.stopPropagation(); installApp('${app.download}', this)">
            Instalar
          </button>
        `;

        container.appendChild(div);

        // animação aparecer
        setTimeout(() => {
          div.classList.add("show");
        }, index * 100);
      });
    });
}

// iniciar
loadApps();