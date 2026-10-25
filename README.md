# Araff Lounge & Hookah — Web Sitesi

Bu sitenin tüm kaynak kodu, görselleri ve hakları **Araff Lounge & Hookah**'a aittir.
Site sade HTML + CSS + JavaScript ile yazılmıştır: derleme aracı, veritabanı, özel bir platform veya
lisans ücreti yoktur. Herhangi bir web ajansı ya da yazılımcı bu klasörü açıp doğrudan çalışabilir.

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa |
| `menu.html` | Menünün tamamı (13 kategori, 88 ürün), arama, ürün detay penceresi |
| `cafemiz.html` | Hikâye ve iç / dış mekân galerisi |
| `konum.html` | Harita, adres, çalışma saatleri (canlı açık / kapalı), yol tarifi |
| `kaynaklar.html` | Ürün fotoğraflarının kaynak listesi |

Diller: Türkçe (varsayılan), İngilizce, Arapça (sağdan sola), Rusça. Sağ üstteki dünya simgesiyle değiştirilir.

## Klasör yapısı

```
index.html, menu.html, cafemiz.html, konum.html, kaynaklar.html
css/style.css          Tüm tasarım (renkler en üstte :root içinde)
js/main.js             Ortak üst menü, alt bilgi, animasyonlar, telefon / adres / sosyal medya
js/menu-data.js        Menü: kategoriler, ürünler, açıklamalar, fiyatlar (Türkçe)
js/menu-i18n.js        Menünün İngilizce / Arapça / Rusça çevirileri
js/i18n.js             Dil sistemi ve sayfa metinlerinin çevirileri
js/catalog.js, menu.js Menü sayfasının çalışması
js/credits-data.js     kaynaklar.html sayfasının verisi
assets/logo-*.png      Logo (koyu ve açık renk)
assets/cafe/           Mekân fotoğrafları
assets/menu/           Ürün fotoğrafları (800×800, beyaz zemin, dosya adı = ürün id'si)
```

## Sık yapılan güncellemeler

- **Fiyat değiştirmek:** `js/menu-data.js` içinde ürünün `price` değerini değiştirin.
- **Yeni ürün eklemek:** `js/menu-data.js` içinde ilgili kategoriye `{ id, name, price, desc }` ekleyin,
  `assets/menu/<id>.jpg` fotoğrafını koyun ve `js/menu-i18n.js` içine çevirisini ekleyin
  (çeviri eklenmezse ürün diğer dillerde Türkçe görünür).
- **Telefon, adres, Instagram, Facebook:** `js/main.js` dosyasının en üstü; `konum.html` içindeki adres ve telefon.
- **Çalışma saatleri:** `js/main.js` (alt bilgi) ve `konum.html` en alttaki script.
- **Metin çevirisi:** `js/i18n.js`. Anahtar Türkçe metnin kendisidir; sayfaya yeni bir Türkçe metin
  eklendiğinde aynısını anahtar olarak sözlüğe ekleyip İngilizce / Arapça / Rusça karşılıklarını yazın.
- Bir dili doğrudan açan bağlantı: `index.html?lang=en` (`ar`, `ru`).

## Bilgisayarda çalıştırma

`index.html` dosyasına çift tıklamak yeterlidir. Yerel sunucuyla açmak için klasörün içinde:

```bash
python -m http.server 8090
```

ve tarayıcıda `http://localhost:8090`.

## Yayına alma

Klasör olduğu gibi herhangi bir statik hosting'e yüklenir (Netlify, Cloudflare Pages, Vercel, GitHub Pages
veya cPanel'li klasik bir hosting). Sunucu tarafı kod yoktur.

## Sahiplik ve erişim (Araff için)

Siteyi istediğiniz firmayla çalışabileceğiniz şekilde tamamen kendi kontrolünüzde tutmak için
**her hesabı Araff'ın kendi e-postasıyla** açın:

1. **Kod — GitHub:** Araff adına bir GitHub hesabı veya organizasyonu açın ve bu klasörü oraya
   (gizli / private bir depo olarak) yükleyin. Bir firmayla çalışacağınız zaman depoya *collaborator*
   olarak davet edin; iş bitince erişimini kaldırın. Tüm değişiklik geçmişi depoda kalır.
2. **Hosting:** Netlify veya Cloudflare Pages hesabını Araff'ın e-postasıyla açıp GitHub deposuna bağlayın.
   Depoya yapılan her değişiklik siteye otomatik yansır; firmalara hosting şifresi vermeniz gerekmez.
3. **Alan adı (domain):** Alan adı Araff'ın adına ve Araff'ın hesabında kayıtlı olmalı
   (eski `arafcafe.com` askıdadır; sağlayıcınızdan yenileyebilirsiniz).
4. **Şifreler:** Bu üç hesabın şifresi yalnızca Araff'ta kalsın. Firmalara şifre değil,
   kendi hesaplarıyla erişim (davet) verin.

## Lisanslar

- Kod, tasarım ve metinler: Araff'a devredilmiştir.
- Yazı tipleri: Playfair Display, Jost, Amiri, IBM Plex Sans Arabic — Google Fonts üzerinden, SIL Open Font
  License (ücretsiz, ticari kullanım serbest).
- Ürün fotoğrafları: Pexels (Pexels License — ücretsiz, ticari kullanım serbest, kaynak gösterme zorunlu değil).
  Liste: `kaynaklar.html` ve `assets/menu/CREDITS.json`. Araff'ın kendi ürünleri değildir; kendi
  çekimlerinizle aynı dosya adıyla değiştirmeniz önerilir.
- Mekân fotoğrafları (`assets/cafe/`): Araff'ın kendi paylaşımlarından alınmıştır, düşük çözünürlüklüdür;
  orijinalleriyle değiştirmeniz önerilir.

## Yayından önce kontrol

- [ ] Güncel fiyatlar (`js/menu-data.js`). Pinkman nargile fiyatı (480 ₺) teyit edilmeli.
- [ ] Çalışma saatleri ve telefon numarası.
- [ ] Arapça ve Rusça çevirilerin ana dili konuşan biri tarafından okunması.

---

## For developers (English)

Plain static site: HTML + CSS + vanilla JavaScript, no build step, no dependencies to install, no backend.
Open the folder and edit. Menu data lives in `js/menu-data.js` (Turkish) with translations in `js/menu-i18n.js`;
UI strings are translated in `js/i18n.js`, keyed by the exact Turkish source text. Arabic switches the page to
`dir="rtl"`. Shared header/footer are injected by `js/main.js`. Deploy by uploading the folder to any static host.
