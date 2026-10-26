/* Araff — languages. Turkish is the source text in the HTML; this file translates it in place.
   Dictionary key = the exact Turkish text (whitespace-normalised) → [English, Arabic, Russian].
   Load order on every page: menu-data.js → menu-i18n.js → i18n.js → main.js */
(function () {
  "use strict";
  const LANGS = {
    tr: { code: "TR", name: "Türkçe", loc: "tr-TR", i: -1 },
    en: { code: "EN", name: "English", loc: "en-GB", i: 0 },
    ar: { code: "AR", name: "العربية", loc: "ar-u-nu-latn", i: 1, dir: "rtl" },
    ru: { code: "RU", name: "Русский", loc: "ru-RU", i: 2 }
  };

  let lang = "tr";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS[q]) localStorage.setItem("araff_lang", q);
    const s = localStorage.getItem("araff_lang");
    if (s && LANGS[s]) lang = s;
  } catch (_) { /* storage blocked: stay Turkish */ }
  const L = LANGS[lang];

  const D = {
    /* ---- nav / layout ---- */
    "Ana Sayfa": ["Home", "الرئيسية", "Главная"],
    "Menü": ["Menu", "القائمة", "Меню"],
    "Cafemiz": ["Our Café", "مقهانا", "Наше кафе"],
    "Konum": ["Location", "الموقع", "Как добраться"],
    "Araff ana sayfa": ["Araff home page", "الصفحة الرئيسية لأراف", "Главная страница Araff"],
    "Ana menü": ["Main menu", "القائمة الرئيسية", "Главное меню"],
    "Menüyü aç": ["Open menu", "افتح القائمة", "Открыть меню"],
    "Dil seçin": ["Choose language", "اختر اللغة", "Выберите язык"],
    "Her gün 08:00 – 01:00": ["Daily 08:00 – 01:00", "يومياً 08:00 – 01:00", "Ежедневно 08:00 – 01:00"],
    "Kahve Araff'ta içilir.": ["Coffee is best at Araff.", "القهوة تُشرب في أراف.", "Кофе пьют в Araff."],
    "Adres": ["Address", "العنوان", "Адрес"],
    "Saatler": ["Hours", "ساعات العمل", "Часы работы"],
    "Pazartesi 08:00 – 02:00": ["Monday 08:00 – 02:00", "الاثنين 08:00 – 02:00", "Понедельник 08:00 – 02:00"],
    "Salı – Pazar 08:00 – 01:00": ["Tuesday – Sunday 08:00 – 01:00", "الثلاثاء – الأحد 08:00 – 01:00", "Вторник – воскресенье 08:00 – 01:00"],
    "Serpme kahvaltı her gün": ["Turkish breakfast spread daily", "فطور تركي مفتوح يومياً", "Турецкий завтрак каждый день"],
    "İletişim": ["Contact", "التواصل", "Контакты"],
    "Yol tarifi": ["Directions", "الاتجاهات", "Маршрут"],
    "Lounge · Cafe · Bistro · Hookah": ["Lounge · Café · Bistro · Hookah", "لاونج · مقهى · بيسترو · أرجيلة", "Лаунж · Кафе · Бистро · Кальян"],

    "Görsel kaynakları": ["Photo credits", "مصادر الصور", "Источники фото"],
    "Görsel Kaynakları · Araff Lounge & Hookah": ["Photo Credits · Araff Lounge & Hookah", "مصادر الصور · أراف لاونج آند هوكا", "Источники фото · Araff Lounge & Hookah"],
    "Lisanslar": ["Licences", "التراخيص", "Лицензии"],
    "Menüdeki ürün fotoğrafları Pexels'in ücretsiz lisanslı görsellerinden hazırlanmış, arka planları beyaza çevrilmiştir.": ["Menu product photos are free-licensed images from Pexels, with backgrounds changed to white.", "صور أصناف القائمة مأخوذة من صور مجانية الترخيص على Pexels، مع تحويل خلفياتها إلى الأبيض.", "Фото блюд в меню — изображения со свободной лицензией с Pexels, фон заменён на белый."],

    /* ---- titles / meta ---- */
    "Araff Lounge & Hookah · Eskişehir": ["Araff Lounge & Hookah · Eskişehir", "أراف لاونج آند هوكا · إسكي شهير", "Araff Lounge & Hookah · Эскишехир"],
    "Menü · Araff Lounge & Hookah": ["Menu · Araff Lounge & Hookah", "القائمة · أراف لاونج آند هوكا", "Меню · Araff Lounge & Hookah"],
    "Cafemiz · Araff Lounge & Hookah": ["Our Café · Araff Lounge & Hookah", "مقهانا · أراف لاونج آند هوكا", "Наше кафе · Araff Lounge & Hookah"],
    "Konum · Araff Lounge & Hookah": ["Location · Araff Lounge & Hookah", "الموقع · أراف لاونج آند هوكا", "Как добраться · Araff Lounge & Hookah"],
    "Eskişehir'in en güzel manzarasında kahve, serpme kahvaltı ve premium nargile. Araff Lounge & Hookah, Odunpazarı.": ["Coffee, Turkish breakfast and premium hookah with Eskişehir's best view. Araff Lounge & Hookah, Odunpazarı.", "قهوة وفطور تركي وأرجيلة فاخرة مع أجمل إطلالة في إسكي شهير. أراف لاونج آند هوكا، أودون بازاري.", "Кофе, турецкий завтрак и премиальный кальян с лучшим видом Эскишехира. Araff Lounge & Hookah, Одунпазары."],
    "Araff menüsü: serpme kahvaltı, omlet ve menemen, tost, burger, pizza, makarna, tatlılar, kahveler, soğuk içecekler ve premium nargile.": ["Araff menu: Turkish breakfast, omelettes and menemen, toasties, burgers, pizza, pasta, desserts, coffee, cold drinks and premium hookah.", "قائمة أراف: فطور تركي، عجة ومنمن، توست، برغر، بيتزا، معكرونة، حلويات، قهوة، مشروبات باردة وأرجيلة فاخرة.", "Меню Araff: турецкий завтрак, омлеты и менемен, тосты, бургеры, пицца, паста, десерты, кофе, холодные напитки и премиальный кальян."],
    "Araff'ın cam salonu, panoramik terası ve Eskişehir manzarası. İç ve dış mekân fotoğrafları.": ["Araff's glass salon, panoramic terrace and Eskişehir view. Interior and exterior photos.", "صالة أراف الزجاجية وشرفتها البانورامية وإطلالة إسكي شهير. صور من الداخل والخارج.", "Стеклянный зал Araff, панорамная терраса и вид на Эскишехир. Фото интерьера и экстерьера."],
    "Araff Lounge & Hookah adresi, çalışma saatleri ve yol tarifi. Çankaya Mah. Şht. Mustafa Yıldız Sk. No:2/1 Odunpazarı / Eskişehir.": ["Araff Lounge & Hookah address, opening hours and directions. Çankaya Mah. Şht. Mustafa Yıldız Sk. No:2/1 Odunpazarı / Eskişehir.", "عنوان أراف لاونج آند هوكا وساعات العمل والاتجاهات. Çankaya Mah. Şht. Mustafa Yıldız Sk. No:2/1 Odunpazarı / Eskişehir.", "Адрес Araff Lounge & Hookah, часы работы и маршрут. Çankaya Mah. Şht. Mustafa Yıldız Sk. No:2/1 Odunpazarı / Eskişehir."],

    /* ---- home ---- */
    "Araff cam salon ve Eskişehir manzarası": ["Araff glass salon and Eskişehir view", "صالة أراف الزجاجية وإطلالة إسكي شهير", "Стеклянный зал Araff и вид на Эскишехир"],
    "Odunpazarı · Eskişehir": ["Odunpazarı · Eskişehir", "أودون بازاري · إسكي شهير", "Одунпазары · Эскишехир"],
    "Şehrin en güzel manzarası,": ["The city's finest view,", "أجمل إطلالة على المدينة،", "Лучший вид на город —"],
    "bir fincan kahvede.": ["in a cup of coffee.", "في فنجان قهوة.", "в чашке кофе."],
    "Cam kenarında serpme kahvaltı, özenle seçilmiş çekirdeklerden kahve ve premium nargile — Eskişehir'in tepesinde, her gün sabah sekizden gece yarısını geçene dek.": ["A Turkish breakfast spread by the window, coffee from hand-picked beans and premium hookah — high above Eskişehir, every day from eight in the morning until past midnight.", "فطور تركي مفتوح بجانب النافذة، وقهوة من حبوب مختارة بعناية، وأرجيلة فاخرة — على قمة إسكي شهير، يومياً من الثامنة صباحاً حتى ما بعد منتصف الليل.", "Турецкий завтрак у панорамного окна, кофе из отборных зёрен и премиальный кальян — над Эскишехиром, каждый день с восьми утра и до глубокой ночи."],
    "Menüyü Keşfet": ["Explore the Menu", "اكتشف القائمة", "Смотреть меню"],
    "Her gün açık": ["Open every day", "مفتوح يومياً", "Открыто ежедневно"],
    "Serpme Kahvaltı": ["Breakfast Spread", "فطور تركي مفتوح", "Турецкий завтрак"],
    "Haftanın 7 günü": ["7 days a week", "7 أيام في الأسبوع", "7 дней в неделю"],
    "Panoramik Teras": ["Panoramic Terrace", "شرفة بانورامية", "Панорамная терраса"],
    "Cam kenarı masalar": ["Window tables", "طاولات بجانب النافذة", "Столики у окна"],
    "Kahve": ["Coffee", "قهوة", "Кофе"],
    "Manzara": ["View", "إطلالة", "Вид"],
    "Nargile": ["Hookah", "أرجيلة", "Кальян"],
    "Tatlı": ["Desserts", "حلويات", "Десерты"],
    "Pizza": ["Pizza", "بيتزا", "Пицца"],
    "Araff teras salonunda kadife koltuklar": ["Velvet armchairs in Araff's terrace salon", "كراسٍ مخملية في صالة شرفة أراف", "Бархатные кресла на террасе Araff"],
    "Manzaraya karşı kahve": ["Coffee with a view", "قهوة أمام الإطلالة", "Кофе с видом"],
    "Hoş geldiniz": ["Welcome", "أهلاً وسهلاً", "Добро пожаловать"],
    "Kahve, sohbet ve": ["Coffee, conversation and", "قهوة، وحديث،", "Кофе, беседы и"],
    "ufka uzanan": ["a city stretching", "ومدينة تمتد", "город,"],
    "bir şehir.": ["to the horizon.", "حتى الأفق.", "уходящий за горизонт."],
    "Araff, Eskişehir'i tepeden izleyen cam salonu ve açık terasıyla günün her saatine bir sebep sunar. Sabah serpme kahvaltıyla başlar, gün batımında kahveyle yavaşlar, gece şehir ışıkları eşliğinde nargileyle uzar.": ["With a glass salon and open terrace overlooking Eskişehir, Araff gives every hour of the day a reason. Mornings start with a breakfast spread, sunsets slow down with coffee, and nights stretch on with hookah under the city lights.", "بصالتها الزجاجية وشرفتها المفتوحة المطلة على إسكي شهير، تمنح أراف كل ساعة من اليوم سبباً للزيارة. يبدأ الصباح بفطور تركي مفتوح، ويهدأ الغروب مع القهوة، ويمتد الليل مع الأرجيلة تحت أضواء المدينة.", "Стеклянный зал и открытая терраса с видом на Эскишехир дают повод заглянуть в Araff в любое время. Утро начинается с завтрака, закат замедляется за чашкой кофе, а вечер продолжается с кальяном под огнями города."],
    "“Kahve Araff'ta içilir.”": ["“Coffee is best at Araff.”", "«القهوة تُشرب في أراف.»", "«Кофе пьют в Araff.»"],
    "Cafemizi tanıyın": ["Discover our café", "تعرّف على مقهانا", "Познакомьтесь с кафе"],
    "Araff'ın imzası": ["Araff signatures", "بصمة أراف", "Фирменное Araff"],
    "Masamızın": ["The essentials", "أطباق", "Без чего"],
    "vazgeçilmezleri": ["of our table", "لا غنى عنها", "не обходится наш стол"],
    "Kahvaltıdan tatlıya, espressodan nargileye — menümüzün tamamı, fiyatlarıyla birlikte bir tık uzağınızda.": ["From breakfast to dessert, espresso to hookah — our full menu with prices is one click away.", "من الفطور إلى الحلوى، ومن الإسبريسو إلى الأرجيلة — قائمتنا كاملة مع الأسعار على بُعد نقرة.", "От завтрака до десерта, от эспрессо до кальяна — всё меню с ценами в один клик."],
    "Ateş Üstü Kahvaltı": ["Fireside Breakfast Pan", "فطور على النار", "Завтрак на огне"],
    "01 · KAHVALTI": ["01 · BREAKFAST", "01 · الفطور", "01 · ЗАВТРАК"],
    "Türk kahvesi": ["Turkish coffee", "قهوة تركية", "Турецкий кофе"],
    "02 · KAHVE": ["02 · COFFEE", "02 · القهوة", "02 · КОФЕ"],
    "Közde Türk Kahvesi": ["Turkish Coffee on Embers", "قهوة تركية على الجمر", "Турецкий кофе на углях"],
    "03 · NARGİLE": ["03 · HOOKAH", "03 · الأرجيلة", "03 · КАЛЬЯН"],
    "Premium Nargile": ["Premium Hookah", "أرجيلة فاخرة", "Премиальный кальян"],
    "Rakamlarla Araff": ["Araff in numbers", "أراف بالأرقام", "Araff в цифрах"],
    "Misafirlerimiz": ["Our guests", "ضيوفنا", "Наши гости"],
    "anlatıyor": ["say it best", "يتحدثون", "говорят сами"],
    "Foursquare'de yüzlerce yorumla öne çıkan manzara, sıcak servis ve nargile deneyimi.": ["A view, warm service and hookah experience praised in hundreds of Foursquare reviews.", "إطلالة وخدمة دافئة وتجربة أرجيلة أشاد بها مئات المراجعين على Foursquare.", "Вид, тёплый сервис и кальян, отмеченные в сотнях отзывов на Foursquare."],
    "Foursquare puanı": ["Foursquare rating", "تقييم Foursquare", "Рейтинг Foursquare"],
    "Facebook puanı": ["Facebook rating", "تقييم Facebook", "Рейтинг Facebook"],
    "Menü çeşidi": ["Menu items", "صنفاً في القائمة", "Позиций в меню"],
    "saat": ["hours", "ساعة", "часов"],
    "Cam kenarındaki yeriniz": ["Your window seat", "مقعدك بجانب النافذة", "Ваш столик у окна"],
    "sizi bekliyor.": ["is waiting.", "بانتظارك.", "ждёт вас."],
    "Bizi ziyaret edin": ["Visit us", "زورونا", "Приходите к нам"],
    "Yol Tarifi": ["Directions", "الاتجاهات", "Маршрут"],

    /* ---- menu page ---- */
    "Araff serpme kahvaltı sofrası": ["Araff breakfast spread", "مائدة فطور أراف", "Завтрак в Araff"],
    "Kahvaltıdan nargileye": ["From breakfast to hookah", "من الفطور إلى الأرجيلة", "От завтрака до кальяна"],
    "Taze yerel malzemeler, özenle seçilmiş kahve çekirdekleri ve el yapımı tatlılar. Tüm fiyatlar Türk lirasıdır.": ["Fresh local ingredients, carefully selected coffee beans and handmade desserts. All prices are in Turkish lira.", "مكونات محلية طازجة وحبوب قهوة مختارة بعناية وحلويات منزلية الصنع. جميع الأسعار بالليرة التركية.", "Свежие местные продукты, отборные кофейные зёрна и десерты ручной работы. Все цены в турецких лирах."],
    "Menü kategorileri": ["Menu categories", "أقسام القائمة", "Разделы меню"],
    "Menüde ara": ["Search the menu", "ابحث في القائمة", "Поиск по меню"],
    "Menüde ara…": ["Search the menu…", "ابحث في القائمة…", "Поиск по меню…"],
    "Aradığınız ürün bulunamadı.": ["No items found.", "لم يتم العثور على أي صنف.", "Ничего не найдено."],
    "Farklı bir kelime deneyin.": ["Try a different word.", "جرّب كلمة أخرى.", "Попробуйте другое слово."],
    "Kapat": ["Close", "إغلاق", "Закрыть"],
    "{n} çeşit": ["{n} items", "{n} أصناف", "Позиций: {n}"],
    "servis": ["service", "خدمة", "обслуживание"],

    /* ---- cafemiz ---- */
    "Araff teras salonu": ["Araff terrace salon", "صالة شرفة أراف", "Терраса Araff"],
    "Hikâyemiz": ["Our story", "قصتنا", "Наша история"],
    "Kadife koltuklar, ceviz ahşap, el yapımı çini zeminler ve önünüzde uzanan koca bir şehir.": ["Velvet armchairs, walnut wood, handmade tiled floors and an entire city stretched out before you.", "كراسٍ مخملية وخشب جوز وأرضيات من البلاط المصنوع يدوياً ومدينة كاملة ممتدة أمامك.", "Бархатные кресла, ореховое дерево, плитка ручной работы и целый город у ваших ног."],
    "Araff nedir?": ["What is Araff?", "ما هو أراف؟", "Что такое Araff?"],
    "İki dünyanın arasında,": ["Between two worlds,", "بين عالمين،", "Между двух миров —"],
    "zamanın yavaşladığı": ["where time", "حيث يتباطأ", "место, где время"],
    "yer.": ["slows down.", "الزمن.", "замедляется."],
    "Araff, kafe deneyimine duyulan tutkudan doğdu. Amacımız basit: arkadaşların buluştuğu, sohbetin uzadığı, şehrin en güzel manzarasının her masaya düştüğü bir yer olmak.": ["Araff was born from a passion for the café experience. Our goal is simple: to be a place where friends meet, conversations run long and the city's finest view reaches every table.", "وُلد أراف من شغف بتجربة المقهى. هدفنا بسيط: أن نكون مكاناً يلتقي فيه الأصدقاء، ويطول فيه الحديث، وتصل فيه أجمل إطلالة على المدينة إلى كل طاولة.", "Araff родился из любви к культуре кафе. Наша цель проста: быть местом, где встречаются друзья, разговоры длятся долго, а лучший вид на город открывается с каждого столика."],
    "En iyi kahve çekirdeklerini özenle seçiyor, mutfağımızda taze ve yerel malzemeler kullanıyoruz. Sabahları serpme kahvaltı sofralarımız kurulur; öğleden sonra el yapımı tatlılarımız ve kahvelerimiz, akşamları ise şehir ışıklarına karşı premium nargile keyfi başlar.": ["We carefully select the finest coffee beans and cook with fresh, local ingredients. Mornings bring our breakfast spreads; afternoons our handmade desserts and coffee; and evenings premium hookah facing the city lights.", "نختار أجود حبوب القهوة بعناية ونستخدم مكونات طازجة ومحلية في مطبخنا. في الصباح تُمد موائد الفطور، وبعد الظهر حلوياتنا المنزلية وقهوتنا، وفي المساء تبدأ متعة الأرجيلة الفاخرة أمام أضواء المدينة.", "Мы тщательно отбираем лучшие кофейные зёрна и готовим из свежих местных продуктов. Утром — щедрые завтраки, днём — десерты ручной работы и кофе, вечером — премиальный кальян с видом на огни города."],
    "Odunpazarı'nın yükseklerindeki konumumuzla dört mevsim farklı bir manzara sunuyoruz — yazın yemyeşil vadiler, kışın karla örtülü bir Eskişehir.": ["High above Odunpazarı, we offer a different view every season — green valleys in summer, a snow-covered Eskişehir in winter.", "من موقعنا المرتفع في أودون بازاري نقدم إطلالة مختلفة في كل فصل — وديان خضراء صيفاً، وإسكي شهير مكسوّة بالثلج شتاءً.", "С высоты Одунпазары мы дарим новый вид в каждое время года — зелёные долины летом и заснеженный Эскишехир зимой."],
    "Cam Salon": ["Glass Salon", "الصالة الزجاجية", "Стеклянный зал"],
    "Panoramik camlarla çevrili, dört mevsim kullanılabilen salon.": ["Surrounded by panoramic windows, open in every season.", "صالة محاطة بنوافذ بانورامية، مفتوحة في كل الفصول.", "Зал с панорамными окнами, открыт круглый год."],
    "Açık Teras": ["Open Terrace", "شرفة مفتوحة", "Открытая терраса"],
    "Yaz akşamları için şehir manzaralı açık oturma alanı.": ["Open-air seating with a city view for summer evenings.", "جلسات خارجية بإطلالة على المدينة لأمسيات الصيف.", "Места под открытым небом с видом на город для летних вечеров."],
    "Nargile Lounge": ["Hookah Lounge", "صالة الأرجيلة", "Кальянный лаунж"],
    "Premium tütünler ve tek kullanımlık hijyenik marpuç.": ["Premium tobaccos and hygienic single-use hoses.", "تبغ فاخر وخراطيم صحية تُستخدم مرة واحدة.", "Премиальные табаки и гигиенические одноразовые мундштуки."],
    "Haftanın her günü, sabah 08:00'den itibaren.": ["Every day of the week, from 08:00.", "كل أيام الأسبوع، من الساعة 08:00.", "Каждый день, с 08:00."],
    "Galeri": ["Gallery", "المعرض", "Галерея"],
    "İçeriden ve": ["Inside and", "من داخل", "Внутри"],
    "dışarıdan": ["outside", "وخارج", "и снаружи"],
    "Tümü": ["All", "الكل", "Все"],
    "İç Mekân": ["Interior", "الداخل", "Интерьер"],
    "Dış Mekân": ["Exterior", "الخارج", "Снаружи"],
    "Lezzetler": ["Flavours", "النكهات", "Блюда"],
    "Cam salon": ["Glass salon", "الصالة الزجاجية", "Стеклянный зал"],
    "Araff ahşap tabelası": ["Araff wooden sign", "لافتة أراف الخشبية", "Деревянная вывеска Araff"],
    "Girişimiz": ["Our entrance", "مدخلنا", "Наш вход"],
    "Kadife koltuklar ve manzara": ["Velvet armchairs and the view", "كراسٍ مخملية وإطلالة", "Бархатные кресла и вид"],
    "Kadife köşe": ["Velvet corner", "الركن المخملي", "Бархатный уголок"],
    "Karlı Eskişehir manzarası": ["Snowy Eskişehir view", "إطلالة إسكي شهير المثلجة", "Заснеженный Эскишехир"],
    "Kış manzarası": ["Winter view", "إطلالة الشتاء", "Зимний вид"],
    "Açık teras": ["Open terrace", "الشرفة المفتوحة", "Открытая терраса"],
    "İç mekân": ["Interior", "الداخل", "Интерьер"],
    "Yaz manzarası": ["Summer view", "إطلالة الصيف", "Летний вид"],
    "Kahvaltı sofrası": ["Breakfast table", "مائدة الفطور", "Стол с завтраком"],
    "Cam kenarında kahve": ["Coffee by the window", "قهوة بجانب النافذة", "Кофе у окна"],
    "Cam kenarı": ["By the window", "بجانب النافذة", "У окна"],
    "Karlı bahçe": ["Snowy garden", "الحديقة المثلجة", "Сад в снегу"],
    "Mermer masalar": ["Marble tables", "طاولات رخامية", "Мраморные столы"],
    "Gece girişi": ["Entrance at night", "المدخل ليلاً", "Вход ночью"],
    "Pizza ve manzara": ["Pizza and the view", "بيتزا وإطلالة", "Пицца и вид"],
    "Pizza & manzara": ["Pizza & view", "بيتزا وإطلالة", "Пицца и вид"],
    "Serpme kahvaltı": ["Breakfast spread", "فطور تركي مفتوح", "Турецкий завтрак"],
    "Sizi bekliyoruz": ["We're waiting for you", "بانتظاركم", "Ждём вас"],
    "Manzarayı": ["See the view", "شاهد الإطلالة", "Увидьте вид"],
    "Araff": ["Araff", "أراف", "Araff"],
    "yerinde": ["in person.", "على أرض الواقع.", "своими"],
    "görün.": ["", "", "глазами."],
    "Fotoğraf": ["Photo", "صورة", "Фото"],
    "Önceki": ["Previous", "السابق", "Назад"],
    "Sonraki": ["Next", "التالي", "Далее"],

    /* ---- konum ---- */
    "Bizi bulun": ["Find us", "اعثر علينا", "Как нас найти"],
    "Çalışma saatleri": ["Opening hours", "ساعات العمل", "Часы работы"],
    "Yol Tarifi Al": ["Get Directions", "احصل على الاتجاهات", "Построить маршрут"],
    "Hemen Ara": ["Call Now", "اتصل الآن", "Позвонить"],
    "Araff Lounge & Hookah haritası": ["Map of Araff Lounge & Hookah", "خريطة أراف لاونج آند هوكا", "Карта Araff Lounge & Hookah"],
    "Nasıl gelinir?": ["How to get here", "كيف تصل إلينا؟", "Как добраться?"],
    "Şehrin tepesine": ["A short trip", "رحلة قصيرة", "Короткий путь"],
    "kısa bir yolculuk": ["to the top of the city", "إلى قمة المدينة", "на вершину города"],
    "Araçla": ["By car", "بالسيارة", "На машине"],
    "Navigasyona \"Araff Lounge & Hookah\" yazmanız yeterli. Mekânın önünde park alanı bulunur.": ["Just type \"Araff Lounge & Hookah\" into your navigation. There is parking in front of the venue.", "اكتب \"Araff Lounge & Hookah\" في تطبيق الملاحة. يوجد موقف سيارات أمام المكان.", "Просто введите «Araff Lounge & Hookah» в навигаторе. Перед заведением есть парковка."],
    "Toplu taşıma": ["Public transport", "المواصلات العامة", "Общественный транспорт"],
    "Bulunduğunuz yerden en uygun otobüs ve tramvay rotası için": ["For the best bus and tram route from where you are, see", "لأفضل مسار بالحافلة أو الترام من موقعك، افتح", "Лучший маршрут на автобусе и трамвае от вас —"],
    "toplu taşıma tarifi": ["transit directions", "اتجاهات المواصلات", "маршрут на транспорте"],
    "Taksi": ["Taxi", "سيارة أجرة", "Такси"],
    "Şehir merkezinden kısa bir yolculuk. Şoföre \"Çankaya, Araff Cafe\" demeniz yeterli.": ["A short ride from the city centre. Just tell the driver \"Çankaya, Araff Cafe\".", "رحلة قصيرة من وسط المدينة. قل للسائق \"Çankaya, Araff Cafe\".", "Недалеко от центра. Просто скажите водителю «Çankaya, Araff Cafe»."],
    "Gelmeden önce": ["Before you come,", "قبل أن تأتي،", "Перед визитом"],
    "bizi arayın.": ["give us a call.", "اتصل بنا.", "позвоните нам."],
    "Bugün": ["Today", "اليوم", "Сегодня"],
    "Yarın": ["Tomorrow", "غداً", "Завтра"],
    "Şu an açık": ["Open now", "مفتوح الآن", "Сейчас открыто"],
    "Şu an kapalı · 08:00'de açılır": ["Closed now · opens at 08:00", "مغلق الآن · يفتح الساعة 08:00", "Сейчас закрыто · откроется в 08:00"]
  };

  const norm = (s) => s.replace(/\s+/g, " ").trim();
  function t(s, vars) {
    let out = L.i < 0 ? s : (D[s] ? D[s][L.i] : s);
    if (vars) out = out.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : ""));
    return out;
  }

  /* menu item / category in the current language */
  function mi(it) {
    const x = L.i < 0 ? null : (window.ARAFF_MENU_I18N || {}).items?.[it.id];
    return x ? { name: x[L.i * 2], desc: x[L.i * 2 + 1] } : { name: it.name, desc: it.desc };
  }
  function mc(c) {
    const x = L.i < 0 ? null : (window.ARAFF_MENU_I18N || {}).cats?.[c.id];
    return x ? { name: x[L.i * 2], note: x[L.i * 2 + 1] || "" } : { name: c.name, note: c.note || "" };
  }

  function apply(root) {
    if (L.i < 0) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && /^(SCRIPT|STYLE)$/.test(n.parentElement.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
    });
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach((n) => {
      const k = norm(n.nodeValue);
      if (k && D[k]) {
        const lead = /^\s/.test(n.nodeValue) ? " " : "", tail = /\s$/.test(n.nodeValue) ? " " : "";
        n.nodeValue = lead + D[k][L.i] + tail;
      }
    });
    root.querySelectorAll("[alt],[placeholder],[aria-label],[title]").forEach((el) => {
      ["alt", "placeholder", "aria-label", "title"].forEach((a) => {
        const v = el.getAttribute(a); if (v && D[norm(v)]) el.setAttribute(a, D[norm(v)][L.i]);
      });
    });
  }

  function setLang(l) {
    try { localStorage.setItem("araff_lang", l); } catch (_) { /* ignore */ }
    const c = document.querySelector(".curtain");
    const u = new URL(location.href); u.searchParams.delete("lang"); // a ?lang= link must not override the choice
    const go = () => location.replace(u.href);
    if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { go(); return; }
    c.classList.remove("up", "show-logo"); c.classList.add("reset"); void c.offsetWidth;
    c.classList.remove("reset"); c.classList.add("down");
    setTimeout(go, 700);
  }

  /* document-level setup */
  const html = document.documentElement;
  html.lang = lang === "ar" ? "ar" : lang;
  html.dir = L.dir || "ltr";
  if (lang === "ar") {
    const f = document.createElement("link");
    f.rel = "stylesheet";
    f.href = "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";
    document.head.appendChild(f);
  }
  if (L.i >= 0) {
    const tt = norm(document.title); if (D[tt]) document.title = D[tt][L.i];
    const md = document.querySelector('meta[name="description"]');
    if (md && D[norm(md.content)]) md.content = D[norm(md.content)][L.i];
    apply(document.body);
  }

  window.ARAFF_I18N = { lang, LANGS, loc: L.loc, t, mi, mc, apply, setLang };
})();
