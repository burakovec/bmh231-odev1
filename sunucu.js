const http = require("http");
const dayjs = require("dayjs");

const PORT = 3000;
const AGEP_TARIH = "2026-11-01";

function send(res, statusCode, contentType, body, extraHeaders = {}) {
  const headers = {
    "Content-Type": `${contentType}; charset=utf-8`,
    ...extraHeaders,
  };
  res.writeHead(statusCode, headers);
  res.end(body);
}

function anaSayfaHtml() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>BMH231 Ödev 1</title>
</head>
<body>
  <h1>BMH231 Web Programlama</h1>
  <p>Küçük Node.js HTTP sunucusuna hoş geldiniz.</p>
  <p><a href="/hakkimda">Hakkımda</a></p>
</body>
</html>`;
}


function hakkimdaHtml() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Hakkımda</title>
</head>
<body>
  <h1>Hakkımda</h1>
  <p>Merhaba, ben Burak Öveç. Bilgisayar Mühendisliği öğrencisiyim.</p>
  <p>BMH231 Web Programlama dersi kapsamında bu küçük sunucuyu geliştirdim.</p>
  <p><a href="/">Ana sayfaya dön</a></p>
</body>
</html>`;
}

function dersJson() {
  return JSON.stringify({
    kod: "BMH231",
    ad: "Web Programlama",
    gun: "Belirlenecek",
  });
}

function agepJson() {
  const bugun = dayjs().startOf("day");
  const agep = dayjs(AGEP_TARIH).startOf("day");
  const kalanGun = agep.diff(bugun, "day");
  return JSON.stringify({
    agepSonTeslim: AGEP_TARIH,
    kalanGun,
  });
}

const server = http.createServer((req, res) => {
  const method = req.method || "GET";
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const path = url.pathname;

  console.log(`${method} ${path}`);

  if (method !== "GET") {
    send(res, 405, "text/plain", "Yöntem desteklenmiyor", { Allow: "GET" });
    return;
  }

  if (path === "/") {
    send(res, 200, "text/html", anaSayfaHtml());
    return;
  }


  if (path === "/hakkimda") {
    send(res, 200, "text/html", hakkimdaHtml());
    return;
  }

  if (path === "/api/ders") {
    send(res, 200, "application/json", dersJson());
    return;
  }

  if (path === "/api/agep") {
    send(res, 200, "application/json", agepJson());
    return;
  }

  send(res, 404, "text/plain", "Sayfa bulunamadı");
});

server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
