# BMH231 - Ödev 1

BMH231 Web Programlama dersi için Node.js `http` modülü ve `dayjs` ile yazılmış küçük bir HTTP sunucusu.

## Amaç

Git, GitHub ve npm kullanarak sürüm kontrollü basit bir web sunucusu geliştirmek; HTML ve JSON yanıtları sunmak.

## Kurulum ve çalıştırma

```bash
git clone https://github.com/burakovec/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde dinler.

## Desteklenen yollar

| Yol | Açıklama |
|-----|----------|
| `GET /` | Ana sayfa (HTML) |
| `GET /hakkimda` | Kısa tanıtım sayfası (HTML) |
| `GET /api/ders` | Ders bilgisi (JSON) |
| `GET /api/agep` | AGEP son teslim tarihi ve kalan gün (JSON) |
| Diğer yollar | `404` — Sayfa bulunamadı |
| GET dışı yöntemler | `405` — Allow: GET |

## Gereksinimler

- Node.js (LTS)
- npm
