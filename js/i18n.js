/* ============================================
   Internationalization — Hindi, English, Marathi
   ============================================ */

var currentLang = Storage.get('ahilya_lang', 'en');

var translations = {
  // ─── NAV ───
  'nav.biography': { en: 'Biography', hi: 'जीवनी', mr: 'चरित्र' },
  'nav.contributions': { en: 'Contributions', hi: 'योगदान', mr: 'योगदान' },
  'nav.court': { en: 'Darbar', hi: 'दरबार', mr: 'दरबार' },
  'nav.map': { en: 'Sacred Map', hi: 'पवित्र नक्शा', mr: 'पवित्र नकाशा' },
  'nav.studio': { en: 'Studio', hi: 'स्टूडियो', mr: 'स्टुडिओ' },
  'nav.dashboard': { en: 'Dashboard', hi: 'डैशबोर्ड', mr: 'डॅशबोर्ड' },
  'nav.deepak': { en: 'Deepak', hi: 'दीपक', mr: 'दीपक' },

  // ─── HERO ───
  'hero.tag': {
    en: '॥ Jai Maa Ahilyabai Holkar ॥',
    hi: '॥ जय माँ अहिल्याबाई होलकर ॥',
    mr: '॥ जय माँ अहिल्याबाई होळकर ॥'
  },
  'hero.title': {
    en: 'Devi Ahilyabai<br>Holkar',
    hi: 'देवी अहिल्याबाई<br>होलकर',
    mr: 'देवी अहिल्याबाई<br>होळकर'
  },
  'hero.subtitle': {
    en: 'Lok Mata &nbsp;·&nbsp; The Eternal Queen of Malwa',
    hi: 'लोकमाता &nbsp;·&nbsp; मालवा की अमर रानी',
    mr: 'लोकमाता &nbsp;·&nbsp; माळव्याची अमर राणी'
  },
  'hero.tagline': {
    en: '"She who ruled with justice, built with devotion, and loved with the heart of a mother — not just a queen, but the soul of a civilization."',
    hi: '"जिसने न्याय से शासन किया, भक्ति से निर्माण किया, और एक माँ के हृदय से प्रेम किया — केवल एक रानी नहीं, बल्कि एक सभ्यता की आत्मा।"',
    mr: '"जिने न्यायाने राज्य केले, भक्तीने बांधले, आणि आईच्या हृदयाने प्रेम केले — केवळ राणी नाही, तर संस्कृतीचा आत्मा."'
  },
  'hero.dates': {
    en: '31 May 1725 &nbsp;—&nbsp; 13 August 1795',
    hi: '31 मई 1725 &nbsp;—&nbsp; 13 अगस्त 1795',
    mr: '31 मे 1725 &nbsp;—&nbsp; 13 ऑगस्ट 1795'
  },
  'hero.cta': { en: 'Begin the Journey', hi: 'यात्रा प्रारम्भ करें', mr: 'प्रवास सुरू करा' },
  'hero.deepakLabel': {
    en: 'Virtual deepaks lit in tribute to Lok Mata Ahilya Bai',
    hi: 'लोकमाता अहिल्या बाई को श्रद्धांजलि में जलाए गए आभासी दीपक',
    mr: 'लोकमाता अहिल्या बाईंना श्रद्धांजली म्हणून प्रज्वलित आभासी दीपक'
  },

  // ─── INTRO QUOTE ───
  'intro.label': { en: 'A Word From History', hi: 'इतिहास से एक वचन', mr: 'इतिहासातून एक वचन' },
  'intro.quote': {
    en: '"In the galaxy of rulers who have adorned the pages of Indian history, Ahilyabai Holkar shines as a star of the first magnitude — a monarch whose life and reign remain to this day an inspiring example of what devoted, just, and wise governance truly means."',
    hi: '"भारतीय इतिहास के पन्नों पर जिन शासकों ने अपनी छाप छोड़ी, उनमें अहिल्याबाई होलकर प्रथम श्रेणी के सितारे की भांति चमकती हैं — एक ऐसी सम्राज्ञी जिनका जीवन और शासन आज भी न्यायपूर्ण और बुद्धिमान शासन का प्रेरणादायक उदाहरण है।"',
    mr: '"भारतीय इतिहासाच्या पानांवर ज्या शासकांनी आपली छाप सोडली, त्यांमध्ये अहिल्याबाई होळकर प्रथम दर्जाच्या ताऱ्याप्रमाणे चमकतात — एक अशी सम्राज्ञी ज्यांचे जीवन आणि राज्य आजही न्यायपूर्ण आणि बुद्धिमान शासनाचा प्रेरणादायक आदर्श आहे."'
  },
  'intro.attribution': {
    en: '— Historical accounts of the Maratha Empire',
    hi: '— मराठा साम्राज्य के ऐतिहासिक वृत्तांत',
    mr: '— मराठा साम्राज्याचे ऐतिहासिक वृत्तांत'
  },

  // ─── BIOGRAPHY ───
  'bio.subtitle': { en: 'Her Story', hi: 'उनकी कहानी', mr: 'त्यांची कहाणी' },
  'bio.title': { en: 'Born of Dust, Made of Gold', hi: 'मिट्टी से जन्मी, सोने सी बनी', mr: 'मातीतून जन्मली, सोन्यासारखी घडली' },
  'bio.facts.title': { en: 'Quick Facts', hi: 'संक्षिप्त तथ्य', mr: 'थोडक्यात माहिती' },

  // ─── CONTRIBUTIONS ───
  'contrib.subtitle': { en: 'Her Works, Her World', hi: 'उनके कार्य, उनकी दुनिया', mr: 'त्यांचे कार्य, त्यांचे जग' },
  'contrib.title': { en: 'Pillars of a Golden Reign', hi: 'स्वर्णिम शासन के स्तंभ', mr: 'सुवर्ण राजवटीचे स्तंभ' },

  // ─── TIMELINE ───
  'timeline.subtitle': { en: 'Her Journey Through Time', hi: 'समय की यात्रा', mr: 'काळातील प्रवास' },
  'timeline.title': { en: 'A Life Written in Gold', hi: 'स्वर्ण अक्षरों में लिखा जीवन', mr: 'सुवर्ण अक्षरांत लिहिलेले जीवन' },

  // ─── TRIBUTE ───
  'tribute.sub': {
    en: 'Punyashloka — She of Sacred Memory',
    hi: 'पुण्यश्लोका — पवित्र स्मृति की देवी',
    mr: 'पुण्यश्लोक — पवित्र स्मरणाची देवी'
  },
  'tribute.text': {
    en: 'Ahilyabai Holkar is not simply a historical figure. She is the conscience of a civilization. In an age when women had no voice, she was a roar. In an age of plunder, she was a builder. In an age of darkness, she was a deepak — a flame that cannot be extinguished.',
    hi: 'अहिल्याबाई होलकर केवल एक ऐतिहासिक व्यक्तित्व नहीं हैं। वे एक सभ्यता की अंतरात्मा हैं। जब स्त्रियों की कोई आवाज़ नहीं थी, वे एक गर्जना थीं। लूट के युग में, वे एक निर्माता थीं। अंधकार के युग में, वे एक दीपक थीं — एक ऐसी ज्योति जो कभी बुझ नहीं सकती।',
    mr: 'अहिल्याबाई होळकर केवळ एक ऐतिहासिक व्यक्तिमत्त्व नाहीत. त्या एका संस्कृतीचा आत्मा आहेत. ज्या काळात स्त्रियांना आवाज नव्हता, त्या एक गर्जना होत्या. लुटीच्या काळात, त्या एक निर्माती होत्या. अंधाराच्या काळात, त्या एक दीपक होत्या — एक ज्योत जी कधीच विझू शकत नाही.'
  },
  'tribute.lamp': {
    en: '🪔 Every visitor to this page lights a Deepak in her honor 🪔',
    hi: '🪔 इस पृष्ठ का प्रत्येक आगंतुक उनके सम्मान में एक दीपक जलाता है 🪔',
    mr: '🪔 या पृष्ठाचा प्रत्येक अभ्यागत त्यांच्या सन्मानार्थ एक दीपक प्रज्वलित करतो 🪔'
  },

  // ─── COURT ───
  'court.subtitle': { en: 'AhilyaGPT', hi: 'अहिल्याGPT', mr: 'अहिल्याGPT' },
  'court.title': { en: 'The Royal Court', hi: 'शाही दरबार', mr: 'शाही दरबार' },
  'court.desc': {
    en: 'Talk with historical figures of Ahilya Bai\'s era. Tap "Talk" to have a real-time AI conversation — ask questions and hear them respond in their own voice.',
    hi: 'अहिल्या बाई के युग की ऐतिहासिक हस्तियों से बात करें। "बात करें" टैप करके AI संवाद शुरू करें — सवाल पूछें और उनकी अपनी आवाज़ में जवाब सुनें।',
    mr: 'अहिल्या बाईंच्या काळातील ऐतिहासिक व्यक्तिमत्त्वांशी बोला. "बोला" टॅप करून AI संवाद सुरू करा — प्रश्न विचारा आणि त्यांच्या स्वतःच्या आवाजात उत्तर ऐका.'
  },
  'court.speak': { en: '💬 Speak', hi: '💬 बोलें', mr: '💬 बोला' },
  'court.listen': { en: '🔊 Listen', hi: '🔊 सुनें', mr: '🔊 ऐका' },
  'court.talk': { en: '🎙️ Talk', hi: '🎙️ बात करें', mr: '🎙️ बोला' },
  'court.talk.listening': { en: '🎤 Listening...', hi: '🎤 सुन रहे हैं...', mr: '🎤 ऐकत आहे...' },
  'court.talk.thinking': { en: '🤔 Thinking...', hi: '🤔 सोच रहे हैं...', mr: '🤔 विचार करत आहे...' },
  'court.talk.speaking': { en: '🔊 Speaking...', hi: '🔊 बोल रहे हैं...', mr: '🔊 बोलत आहे...' },
  'court.talk.stop': { en: '⏹ Stop', hi: '⏹ रुकें', mr: '⏹ थांबा' },
  'court.talk.error.mic': { en: 'Microphone access needed for Talk mode', hi: 'बात मोड के लिए माइक्रोफ़ोन की आवश्यकता है', mr: 'बोला मोडसाठी मायक्रोफोनची आवश्यकता आहे' },

  // ─── MAP ───
  'map.subtitle': { en: 'The Sacred Blueprint', hi: 'पवित्र खाका', mr: 'पवित्र आराखडा' },
  'map.title': { en: 'Her Philanthropic Footprint', hi: 'उनके परोपकारी चिन्ह', mr: 'त्यांच्या परोपकारी पाऊलखुणा' },
  'map.desc': {
    en: 'An interactive map of India showcasing Ahilya Bai\'s temples, ghats, dharamshalas, and wells across the subcontinent.',
    hi: 'भारत का एक इंटरैक्टिव नक्शा जो उपमहाद्वीप भर में अहिल्या बाई के मंदिरों, घाटों, धर्मशालाओं और कुओं को प्रदर्शित करता है।',
    mr: 'भारताचा एक इंटरॅक्टिव्ह नकाशा जो उपखंडभर अहिल्या बाईंच्या मंदिरे, घाट, धर्मशाळा आणि विहिरी दर्शवतो.'
  },
  'map.temples': { en: 'Temples', hi: 'मंदिर', mr: 'मंदिरे' },
  'map.ghats': { en: 'Ghats', hi: 'घाट', mr: 'घाट' },
  'map.dharmshalas': { en: 'Dharmshalas', hi: 'धर्मशालाएँ', mr: 'धर्मशाळा' },
  'map.wells': { en: 'Wells', hi: 'कुएँ', mr: 'विहिरी' },

  // ─── STUDIO ───
  'studio.subtitle': { en: 'AI Media Creation', hi: 'AI मीडिया निर्माण', mr: 'AI मीडिया निर्मिती' },
  'studio.title': { en: 'The Studio', hi: 'स्टूडियो', mr: 'स्टुडिओ' },
  'studio.desc': {
    en: 'Generate cinematic scenes, portraits, and traditional Maheshwari sari patterns inspired by the era of Ahilya Bai.',
    hi: 'अहिल्या बाई के युग से प्रेरित सिनेमाई दृश्य, चित्र और पारंपरिक महेश्वरी साड़ी पैटर्न बनाएँ।',
    mr: 'अहिल्या बाईंच्या काळापासून प्रेरित सिनेमॅटिक दृश्ये, चित्रे आणि पारंपरिक माहेश्वरी साडी नमुने तयार करा.'
  },
  'studio.photoTab': { en: 'AI Photo', hi: 'AI फोटो', mr: 'AI फोटो' },
  'studio.uploadPrompt': { en: 'Upload your photo to transform into a royal portrait', hi: 'शाही चित्र में बदलने के लिए अपना फोटो अपलोड करें', mr: 'शाही चित्रात रूपांतरित करण्यासाठी आपला फोटो अपलोड करा' },
  'studio.uploadBtn': { en: '📷 Upload Photo', hi: '📷 फोटो अपलोड करें', mr: '📷 फोटो अपलोड करा' },
  'studio.transformBtn': { en: '✨ Transform to Royal Portrait', hi: '✨ शाही चित्र में बदलें', mr: '✨ शाही चित्रात रूपांतरित करा' },
  'studio.gallery': { en: 'Gallery', hi: 'गैलरी', mr: 'गॅलरी' },

  // ─── DASHBOARD ───
  'dash.subtitle': { en: 'State Pride Summary', hi: 'राज्य गौरव सारांश', mr: 'राज्य गौरव सारांश' },
  'dash.title': { en: 'Share Her Legacy', hi: 'उनकी विरासत साझा करें', mr: 'त्यांचा वारसा शेअर करा' },
  'dash.desc': {
    en: 'Select a state to discover Ahilya Bai\'s local contributions and share them with your community.',
    hi: 'अहिल्या बाई के स्थानीय योगदान जानने के लिए राज्य चुनें और उन्हें अपने समुदाय के साथ साझा करें।',
    mr: 'अहिल्या बाईंचे स्थानिक योगदान जाणून घेण्यासाठी राज्य निवडा आणि ते आपल्या समुदायासोबत शेअर करा.'
  },

  // ─── DEEPAK ───
  'deepak.subtitle': { en: 'A Tribute of Light', hi: 'प्रकाश की श्रद्धांजलि', mr: 'प्रकाशाची श्रद्धांजली' },
  'deepak.title': { en: 'The Deepak Counter', hi: 'दीपक गणना', mr: 'दीपक गणना' },
  'deepak.desc': {
    en: 'Light a virtual deepak to honor the legacy of Lok Mata Ahilya Bai. Every flame is a prayer, every light a memory.',
    hi: 'लोकमाता अहिल्या बाई की विरासत के सम्मान में एक आभासी दीपक जलाएँ। हर लौ एक प्रार्थना है, हर प्रकाश एक स्मृति।',
    mr: 'लोकमाता अहिल्या बाईंच्या वारशाच्या सन्मानार्थ एक आभासी दीपक प्रज्वलित करा. प्रत्येक ज्योत एक प्रार्थना, प्रत्येक प्रकाश एक स्मृती.'
  },
  'deepak.label': {
    en: 'Virtual deepaks lit in tribute to Lok Mata Ahilya Bai Holkar',
    hi: 'लोकमाता अहिल्या बाई होलकर को श्रद्धांजलि में जलाए गए आभासी दीपक',
    mr: 'लोकमाता अहिल्या बाई होळकरांना श्रद्धांजली म्हणून प्रज्वलित आभासी दीपक'
  },
  'deepak.lightBtn': { en: '🪔 Light a Deepak', hi: '🪔 दीपक जलाएँ', mr: '🪔 दीपक प्रज्वलित करा' },

  // ─── QUOTES SECTION ───
  'quotes.subtitle': { en: 'Voices Through Time', hi: 'समय के स्वर', mr: 'काळाचे स्वर' },
  'quotes.title': { en: 'What The World Said', hi: 'जो दुनिया ने कहा', mr: 'जगाने काय म्हटले' },

  // ─── FOOTER ───
  'footer.made': {
    en: 'Made with reverence for Lok Mata Devi Ahilya Bai Holkar',
    hi: 'लोकमाता देवी अहिल्या बाई होलकर के प्रति श्रद्धा से निर्मित',
    mr: 'लोकमाता देवी अहिल्या बाई होळकरांप्रती श्रद्धेने निर्मित'
  },
  'footer.reign': {
    en: 'Her reign (1767–1795) transformed India through temples, ghats, dharamshalas, and wells spanning from Gangotri to Rameswaram, Dwarka to Jagannath Puri.',
    hi: 'उनका शासन (1767-1795) गंगोत्री से रामेश्वरम, द्वारका से जगन्नाथ पुरी तक मंदिरों, घाटों, धर्मशालाओं और कुओं से भारत को रूपांतरित किया।',
    mr: 'त्यांच्या राजवटीने (1767-1795) गंगोत्रीपासून रामेश्वरमपर्यंत, द्वारकापासून जगन्नाथ पुरीपर्यंत मंदिरे, घाट, धर्मशाळा आणि विहिरींद्वारे भारत बदलला.'
  },

  // ─── LANG SWITCHER ───
  'lang.switch': { en: 'Language', hi: 'भाषा', mr: 'भाषा' },
  'lang.en': { en: 'English', hi: 'अंग्रेज़ी', mr: 'इंग्रजी' },
  'lang.hi': { en: 'हिन्दी', hi: 'हिन्दी', mr: 'हिंदी' },
  'lang.mr': { en: 'मराठी', hi: 'मराठी', mr: 'मराठी' }
};

function t(key) {
  var entry = translations[key];
  if (!entry) return key;
  return entry[currentLang] || entry.en || key;
}

function setLanguage(lang) {
  currentLang = lang;
  Storage.set('ahilya_lang', lang);
  applyTranslations();
  EventBus.emit('lang:changed', { lang: lang });
}

function applyTranslations() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var translated = t(key);
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = translated;
    } else {
      el.textContent = translated;
    }
  });

  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === currentLang);
  });

  // Update document lang attribute
  if (currentLang === 'hi' || currentLang === 'mr') {
    document.documentElement.lang = currentLang;
  } else {
    document.documentElement.lang = 'en';
  }
}

function initI18n() {
  // Language switcher event
  var switcher = document.getElementById('lang-switcher');
  if (switcher) {
    switcher.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (btn) {
        setLanguage(btn.dataset.lang);
      }
    });
  }
  applyTranslations();
}
