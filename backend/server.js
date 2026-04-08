const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// "banco de dados" temporário
let apps = [
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
    download: "https://www.instagram.com/download/"
  },
  {
    id: 3,
    name: "Facebook",
    description: "Rede social",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png",
    download: "https://www.facebook.com/"
  },
  {
    id: 4,
    name: "YouTube",
    description: "Vídeos online",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    download: "https://www.youtube.com/"
  },
  {
    id: 5,
    name: "TikTok",
    description: "Vídeos curtos",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg",
    download: "https://www.tiktok.com/"
  },
  {
    id: 6,
    name: "Telegram",
    description: "Mensagens rápidas",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    download: "https://telegram.org/"
  },
  {
    id: 7,
    name: "Spotify",
    description: "Música online",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    download: "https://www.spotify.com/"
  },
  {
    id: 8,
    name: "Netflix",
    description: "Filmes e séries",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    download: "https://www.netflix.com/"
  },
  {
    id: 9,
    name: "Twitter",
    description: "Rede social",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    download: "https://twitter.com/"
  },
  {
    id: 10,
    name: "Uber",
    description: "Transporte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    download: "https://www.uber.com/"
  }
];


// rota teste
app.get('/', (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// listar apps
app.get('/apps', (req, res) => {
  res.json(apps);
});

// adicionar app (POST)
app.post('/apps', (req, res) => {
  const newApp = {
    id: Date.now(),
    ...req.body
  };

  apps.push(newApp);
  res.json(newApp);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});