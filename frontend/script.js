const apps = [
  {
    id: 1,
    name: "WhatsApp",
    description: "App de mensagens",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    download: "https://www.whatsapp.com/android/"
  },
  {
    id: 2,
    name: "Instagram",
    description: "Rede social",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    download: "https://www.instagram.com/"
  },
  {
    id: 3,
    name: "TikTok",
    description: "Vídeos curtos",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg",
    download: "https://www.tiktok.com/"
  },
  {
    id: 4,
    name: "Spotify",
    description: "Música online",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    download: "https://www.spotify.com/"
  }
];

const appList = document.getElementById("app-list");

apps.forEach(app => {
  const div = document.createElement("div");
  div.className = "app";

  div.innerHTML = `
    <img src="${app.icon}" width="50">
    <h3>${app.name}</h3>
    <p>${app.description}</p>
    <a href="${app.download}" target="_blank">
      <button>Instalar</button>
    </a>
  `;

  appList.appendChild(div);
});