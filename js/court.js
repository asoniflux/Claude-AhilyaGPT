/* ============================================
   AhilyaGPT - Court Personas with AI-Powered TTS + Real-Time Conversation
   Free AI Voice (Hugging Face) + ElevenLabs Premium + Browser Fallback
   Real-Time Talk Mode: STT (Web Speech API) + AI (HF Inference) + TTS
   ============================================ */

const courtPersonas = [
  {
    id: 'ahilya',
    name: { en: 'Ahilya Bai Holkar', hi: 'अहिल्या बाई होलकर', mr: 'अहिल्या बाई होळकर' },
    title: { en: 'Lok Mata, Queen of Indore', hi: 'लोकमाता, इंदौर की रानी', mr: 'लोकमाता, इंदौरच्या राणी' },
    era: '1725–1795',
    avatar: { initials: 'AB', color: '#C5A355' },
    // ElevenLabs voice config per persona
    voiceConfig: {
      elevenLabsVoiceId: 'EXAVITQu4vr4xnSDxMaL', // Sarah — warm, wise female
      browserVoice: { gender: 'female', pitch: 1.05, rate: 0.88 }
    },
    dialogues: [
      {
        text: {
          en: "A kingdom is not built by swords alone, but by dharamshalas at every crossroad and temples at every tirtha. True power lies in service to the people.",
          hi: "राज्य केवल तलवारों से नहीं बनता, बल्कि हर चौराहे पर धर्मशालाओं और हर तीर्थ पर मंदिरों से बनता है। सच्ची शक्ति प्रजा की सेवा में है।",
          mr: "राज्य केवळ तलवारींनी बांधले जात नाही, तर प्रत्येक चौकात धर्मशाळा आणि प्रत्येक तीर्थक्षेत्री मंदिरांनी बांधले जाते. खरी शक्ती प्रजेच्या सेवेत आहे."
        },
        source: { en: "On governance philosophy", hi: "शासन दर्शन पर", mr: "शासन तत्त्वज्ञानावर" }
      },
      {
        text: {
          en: "I rebuilt Kashi Vishwanath not for glory, but because the divine deserves a worthy abode, and the people deserve a place of solace.",
          hi: "मैंने काशी विश्वनाथ का पुनर्निर्माण यश के लिए नहीं किया, बल्कि इसलिए कि भगवान एक योग्य निवास के अधिकारी हैं, और लोग सांत्वना के स्थान के।",
          mr: "मी काशी विश्वनाथाचे पुनर्निर्माण कीर्तीसाठी केले नाही, तर देवाला योग्य निवासस्थान आणि लोकांना सांत्वनाचे स्थान मिळावे म्हणून."
        },
        source: { en: "On the Varanasi temple, c. 1780", hi: "वाराणसी मंदिर पर, c. 1780", mr: "वाराणसी मंदिरावर, इ.स. 1780" }
      },
      {
        text: {
          en: "Let no widow be turned away, let no pilgrim walk without shelter. The wealth of a kingdom belongs to its people, not to its throne.",
          hi: "कोई विधवा लौटाई न जाए, कोई तीर्थयात्री बिना आश्रय न चले। राज्य की संपत्ति उसकी प्रजा की है, सिंहासन की नहीं।",
          mr: "कोणतीही विधवा परत पाठवली जाऊ नये, कोणताही यात्रिक निवाऱ्यावाचून चालू नये. राज्याची संपत्ती त्याच्या प्रजेची आहे, सिंहासनाची नाही."
        },
        source: { en: "Royal decree on charitable works", hi: "दानशील कार्यों पर शाही आदेश", mr: "दानशील कार्यांवरील शाही आदेश" }
      },
      {
        text: {
          en: "From Gangotri to Rameswaram, from Dwarka to Jagannath Puri — wherever there is a devotee in need, there shall be the hand of Indore.",
          hi: "गंगोत्री से रामेश्वरम, द्वारका से जगन्नाथ पुरी तक — जहाँ भी कोई भक्त ज़रूरतमंद है, वहाँ इंदौर का हाथ होगा।",
          mr: "गंगोत्रीपासून रामेश्वरमपर्यंत, द्वारकापासून जगन्नाथ पुरीपर्यंत — जिथे कुठे गरजू भक्त आहे, तिथे इंदौरचा हात असेल."
        },
        source: { en: "On pan-Indian philanthropy", hi: "अखिल भारतीय परोपकार पर", mr: "अखिल भारतीय परोपकारावर" }
      },
      {
        text: {
          en: "I sat on my father-in-law Malhar Rao's lap as a child, learning the art of war. But it was governing in peace that proved the greater challenge — and the greater reward.",
          hi: "बचपन में मैं अपने ससुर मल्हार राव की गोद में बैठकर युद्ध कला सीखती थी। लेकिन शांति से शासन करना बड़ी चुनौती साबित हुई — और बड़ा पुरस्कार भी।",
          mr: "लहानपणी मी माझे सासरे मल्हार राव यांच्या मांडीवर बसून युद्धकला शिकत असे. पण शांततेत शासन करणे हे मोठे आव्हान ठरले — आणि मोठे बक्षीसही."
        },
        source: { en: "On her early education", hi: "अपनी प्रारंभिक शिक्षा पर", mr: "त्यांच्या प्रारंभिक शिक्षणावर" }
      }
    ]
  },
  {
    id: 'malhar',
    name: { en: 'Malhar Rao Holkar', hi: 'मल्हार राव होलकर', mr: 'मल्हार राव होळकर' },
    title: { en: 'Commander & Father-in-law', hi: 'सेनापति व ससुर', mr: 'सेनापती व सासरे' },
    era: '1693–1766',
    avatar: { initials: 'MR', color: '#8B2E3D' },
    voiceConfig: {
      elevenLabsVoiceId: 'pNInz6obpgDQGcFmaJgB', // Adam — deep, authoritative male
      browserVoice: { gender: 'male', pitch: 0.85, rate: 0.85 }
    },
    dialogues: [
      {
        text: {
          en: "When I first saw young Ahilya at the temple in Chondi, I knew she had the spirit of a ruler. I chose her as a bride for my son Khanderao, and history proved me right.",
          hi: "जब मैंने चोंडी के मंदिर में छोटी अहिल्या को पहली बार देखा, मैं जान गया कि उसमें एक शासक की आत्मा है। मैंने उसे अपने पुत्र खांडेराव की वधू चुना, और इतिहास ने मुझे सही साबित किया।",
          mr: "जेव्हा मी चोंडीच्या मंदिरात लहान अहिल्याला पहिल्यांदा पाहिले, तेव्हा मला कळले की तिच्यात शासकाचा आत्मा आहे. मी तिला माझा मुलगा खंडेरावाची वधू म्हणून निवडले, आणि इतिहासाने मला सिद्ध केले."
        },
        source: { en: "On discovering Ahilya", hi: "अहिल्या को खोजने पर", mr: "अहिल्याला शोधण्यावर" }
      },
      {
        text: {
          en: "I taught her the ways of the battlefield and the court. But her wisdom in administration — that came from something greater than any teacher could give.",
          hi: "मैंने उसे युद्धभूमि और दरबार के तरीके सिखाए। लेकिन प्रशासन में उसकी बुद्धिमत्ता — वह किसी शिक्षक से बढ़कर किसी महान शक्ति से आई।",
          mr: "मी तिला रणभूमी आणि दरबाराचे मार्ग शिकवले. पण प्रशासनातील तिचे शहाणपण — ते कोणत्याही शिक्षकापेक्षा महान शक्तीकडून आले."
        },
        source: { en: "On Ahilya's education", hi: "अहिल्या की शिक्षा पर", mr: "अहिल्याच्या शिक्षणावर" }
      },
      {
        text: {
          en: "After my son fell at the Battle of Kumher, I feared the kingdom would falter. But Ahilya's resolve was stronger than any army I had ever commanded.",
          hi: "कुम्हेर की लड़ाई में मेरे पुत्र के गिरने के बाद, मुझे डर था कि राज्य लड़खड़ा जाएगा। लेकिन अहिल्या का संकल्प मेरी किसी भी सेना से मज़बूत था।",
          mr: "कुंभेरच्या लढाईत माझा मुलगा पडल्यानंतर, मला भीती होती की राज्य डगमगेल. पण अहिल्याचा निश्चय माझ्या कोणत्याही सैन्यापेक्षा मजबूत होता."
        },
        source: { en: "On Khanderao's death, 1754", hi: "खांडेराव की मृत्यु पर, 1754", mr: "खंडेरावाच्या मृत्यूवर, 1754" }
      },
      {
        text: {
          en: "A good commander wins battles. A great ruler wins the hearts of the people. Ahilya was the latter — far greater than I ever was.",
          hi: "एक अच्छा सेनापति युद्ध जीतता है। एक महान शासक लोगों के दिल जीतता है। अहिल्या दूसरी थी — मुझसे कहीं अधिक महान।",
          mr: "एक चांगला सेनापती लढाया जिंकतो. एक महान शासक लोकांची मने जिंकतो. अहिल्या दुसरी होती — माझ्यापेक्षा कितीतरी महान."
        },
        source: { en: "On Ahilya's reign", hi: "अहिल्या के शासन पर", mr: "अहिल्याच्या राजवटीवर" }
      }
    ]
  },
  {
    id: 'khanderao',
    name: { en: 'Khanderao Holkar', hi: 'खांडेराव होलकर', mr: 'खंडेराव होळकर' },
    title: { en: 'Husband of Ahilya Bai', hi: 'अहिल्या बाई के पति', mr: 'अहिल्या बाईंचे पती' },
    era: '1723–1754',
    avatar: { initials: 'KH', color: '#6B1D2A' },
    voiceConfig: {
      elevenLabsVoiceId: 'VR6AewLTigWG4xSOukaG', // Arnold — young, earnest male
      browserVoice: { gender: 'male', pitch: 1.0, rate: 0.9 }
    },
    dialogues: [
      {
        text: {
          en: "We were married as children, but Ahilya was never merely a bride. She rode alongside the army, understood strategy, and commanded respect even then.",
          hi: "हमारा विवाह बचपन में हुआ, लेकिन अहिल्या कभी केवल दुल्हन नहीं थी। वह सेना के साथ चलती थी, रणनीति समझती थी, और तब भी सम्मान प्राप्त करती थी।",
          mr: "आमचा विवाह लहानपणी झाला, पण अहिल्या कधीही केवळ वधू नव्हती. ती सैन्यासोबत चालत असे, रणनीती समजत असे, आणि तेव्हाही सन्मान मिळवत असे."
        },
        source: { en: "On their partnership", hi: "उनकी साझेदारी पर", mr: "त्यांच्या भागीदारीवर" }
      },
      {
        text: {
          en: "I fell in the siege of Kumher, struck by a cannon. But I went knowing that Ahilya would carry the Holkar name to heights I could only dream of.",
          hi: "मैं कुम्हेर की घेराबंदी में गिरा, तोप के गोले से मारा गया। लेकिन मैं यह जानकर गया कि अहिल्या होलकर नाम को उन ऊँचाइयों पर ले जाएगी जिनका मैं केवल सपना देख सकता था।",
          mr: "मी कुंभेरच्या वेढ्यात पडलो, तोफगोळ्याने मारला गेलो. पण मी हे जाणून गेलो की अहिल्या होळकर नावाला त्या उंचीवर नेईल ज्याचे मी फक्त स्वप्न पाहू शकत होतो."
        },
        source: { en: "On the Battle of Kumher, 1754", hi: "कुम्हेर की लड़ाई पर, 1754", mr: "कुंभेरच्या लढाईवर, 1754" }
      },
      {
        text: {
          en: "My father chose well when he picked that young girl at the temple. She was destined for something far greater than any of us imagined.",
          hi: "मेरे पिता ने अच्छा चुनाव किया जब उन्होंने मंदिर में उस छोटी लड़की को चुना। वह हम सबकी कल्पना से कहीं बड़ी चीज़ के लिए नियत थी।",
          mr: "माझ्या वडिलांनी मंदिरात त्या लहान मुलीला निवडताना योग्य निवड केली. ती आम्हा सर्वांच्या कल्पनेपेक्षा कितीतरी मोठ्या गोष्टीसाठी नियत होती."
        },
        source: { en: "On their marriage", hi: "उनके विवाह पर", mr: "त्यांच्या विवाहावर" }
      }
    ]
  },
  {
    id: 'tukoji',
    name: { en: 'Tukoji Rao Holkar', hi: 'तुकोजी राव होलकर', mr: 'तुकोजी राव होळकर' },
    title: { en: 'Military Commander', hi: 'सेनापति', mr: 'सेनापती' },
    era: '1723–1797',
    avatar: { initials: 'TR', color: '#2A8B8B' },
    voiceConfig: {
      elevenLabsVoiceId: 'ErXwobaYiN019PkySvjV', // Antoni — confident, strong male
      browserVoice: { gender: 'male', pitch: 0.9, rate: 0.92 }
    },
    dialogues: [
      {
        text: {
          en: "I served as the military arm of Ahilya Bai's kingdom. She directed where I fought, and together we kept Malwa safe from every threat.",
          hi: "मैंने अहिल्या बाई के राज्य की सैन्य भुजा के रूप में सेवा की। वे निर्देशित करतीं कि मैं कहाँ लड़ूँ, और साथ मिलकर हमने मालवा को हर खतरे से सुरक्षित रखा।",
          mr: "मी अहिल्या बाईंच्या राज्याचा सैनिक हात म्हणून सेवा केली. त्या निर्देशित करत की मी कुठे लढावे, आणि आम्ही एकत्र माळव्याला प्रत्येक धोक्यापासून सुरक्षित ठेवले."
        },
        source: { en: "On the military arrangement", hi: "सैन्य व्यवस्था पर", mr: "सैन्य व्यवस्थेवर" }
      },
      {
        text: {
          en: "Some questioned a woman ruling. But after seeing her judge cases in open court, manage state finances, and direct temple construction — those voices fell silent forever.",
          hi: "कुछ ने एक स्त्री के शासन पर प्रश्न उठाए। लेकिन उन्हें खुली अदालत में न्याय करते, राजकोष का प्रबंधन करते, और मंदिर निर्माण का निर्देशन करते देखने के बाद — वे आवाज़ें हमेशा के लिए शांत हो गईं।",
          mr: "काहींनी स्त्रीच्या शासनावर प्रश्न उपस्थित केले. पण तिला खुल्या दरबारात न्याय करताना, राजकोष व्यवस्थापित करताना, आणि मंदिर बांधकामाचे निर्देशन करताना पाहिल्यानंतर — ते आवाज कायमचे शांत झाले."
        },
        source: { en: "On Ahilya's authority", hi: "अहिल्या के अधिकार पर", mr: "अहिल्याच्या अधिकारावर" }
      },
      {
        text: {
          en: "She once told me: 'Tukoji, the sword protects the body, but dharma protects the soul of a kingdom.' I never forgot those words.",
          hi: "उन्होंने एक बार मुझसे कहा: 'तुकोजी, तलवार शरीर की रक्षा करती है, लेकिन धर्म राज्य की आत्मा की रक्षा करता है।' मैं वे शब्द कभी नहीं भूला।",
          mr: "त्यांनी एकदा मला सांगितले: 'तुकोजी, तलवार शरीराचे रक्षण करते, पण धर्म राज्याच्या आत्म्याचे रक्षण करतो.' मी ते शब्द कधीच विसरलो नाही."
        },
        source: { en: "On Ahilya's philosophy", hi: "अहिल्या के दर्शन पर", mr: "अहिल्याच्या तत्त्वज्ञानावर" }
      }
    ]
  },
  {
    id: 'priest',
    name: { en: 'A Varanasi Priest', hi: 'एक वाराणसी के पुजारी', mr: 'एक वाराणसीचे पुजारी' },
    title: { en: 'Witness to Kashi Vishwanath', hi: 'काशी विश्वनाथ के साक्षी', mr: 'काशी विश्वनाथाचे साक्षीदार' },
    era: 'c. 1780',
    avatar: { initials: 'VP', color: '#D4722A' },
    voiceConfig: {
      elevenLabsVoiceId: 'onwK4e9ZLuTAKqWW03F9', // Daniel — warm, calm male
      browserVoice: { gender: 'male', pitch: 1.1, rate: 0.82 }
    },
    dialogues: [
      {
        text: {
          en: "When the temple was destroyed, we thought Kashi had lost its light forever. Then word came from Indore — the Queen would rebuild it. We wept with joy.",
          hi: "जब मंदिर नष्ट हुआ, हमने सोचा काशी ने अपना प्रकाश सदा के लिए खो दिया। फिर इंदौर से संदेश आया — रानी इसे पुनर्निर्मित करेंगी। हम खुशी से रो पड़े।",
          mr: "जेव्हा मंदिर नष्ट झाले, आम्हाला वाटले काशीने आपला प्रकाश कायमचा गमावला. मग इंदौरहून निरोप आला — राणी ते पुनर्निर्माण करतील. आम्ही आनंदाने रडलो."
        },
        source: { en: "On the temple reconstruction, 1780", hi: "मंदिर पुनर्निर्माण पर, 1780", mr: "मंदिर पुनर्निर्माणावर, 1780" }
      },
      {
        text: {
          en: "She sent not just gold, but architects, artisans, and her own vision. The temple that rose was more magnificent than any that had stood before.",
          hi: "उन्होंने केवल सोना नहीं भेजा, बल्कि वास्तुकार, कारीगर और अपनी दृष्टि भेजी। जो मंदिर खड़ा हुआ वह पहले खड़े किसी भी मंदिर से अधिक भव्य था।",
          mr: "त्यांनी फक्त सोने नाही तर वास्तुशिल्पकार, कारागीर आणि स्वतःचे दृष्टीकोन पाठवले. जे मंदिर उभे राहिले ते आधी उभ्या असलेल्या कोणत्याही मंदिरापेक्षा भव्य होते."
        },
        source: { en: "On the construction", hi: "निर्माण पर", mr: "बांधकामावर" }
      }
    ]
  },
  {
    id: 'boatman',
    name: { en: 'A Narmada Boatman', hi: 'एक नर्मदा नाविक', mr: 'एक नर्मदा नावाडी' },
    title: { en: 'Life on the Maheshwar Ghats', hi: 'महेश्वर घाटों पर जीवन', mr: 'माहेश्वर घाटांवरचे जीवन' },
    era: 'c. 1790',
    avatar: { initials: 'NB', color: '#4A7B3A' },
    voiceConfig: {
      elevenLabsVoiceId: 'TxGEqnHWrfWFTfGW9XjX', // Josh — friendly, everyday male
      browserVoice: { gender: 'male', pitch: 1.05, rate: 0.95 }
    },
    dialogues: [
      {
        text: {
          en: "Every morning I row past the ghats of Maheshwar, and every stone tells the story of our queen. She built these ghats with her own treasury, for all people, not just the wealthy.",
          hi: "हर सुबह मैं महेश्वर के घाटों से गुज़रता हूँ, और हर पत्थर हमारी रानी की कहानी कहता है। उन्होंने ये घाट अपने खज़ाने से बनवाए, सभी लोगों के लिए, केवल धनवानों के लिए नहीं।",
          mr: "दररोज सकाळी मी माहेश्वरच्या घाटांवरून जातो, आणि प्रत्येक दगड आमच्या राणीची कथा सांगतो. तिने हे घाट स्वतःच्या खजिन्यातून बांधले, सर्व लोकांसाठी, केवळ श्रीमंतांसाठी नाही."
        },
        source: { en: "On the Maheshwar ghats", hi: "महेश्वर घाटों पर", mr: "माहेश्वर घाटांवर" }
      },
      {
        text: {
          en: "The queen would sit at the ghat each evening, hearing the grievances of common people like me. No matter how small your problem, she listened.",
          hi: "रानी हर शाम घाट पर बैठती थीं, मेरे जैसे आम लोगों की शिकायतें सुनती थीं। आपकी समस्या कितनी भी छोटी हो, वे सुनती थीं।",
          mr: "राणी दर संध्याकाळी घाटावर बसत, माझ्यासारख्या सामान्य लोकांच्या तक्रारी ऐकत. तुमची समस्या कितीही लहान असो, त्या ऐकत."
        },
        source: { en: "On Ahilya's accessibility", hi: "अहिल्या की सुलभता पर", mr: "अहिल्याच्या सुलभतेवर" }
      }
    ]
  },
  {
    id: 'weaver',
    name: { en: 'A Maheshwari Weaver', hi: 'एक महेश्वरी जुलाहा', mr: 'एक माहेश्वरी विणकर' },
    title: { en: 'Master of the Loom', hi: 'करघे के उस्ताद', mr: 'मागाचे उस्ताद' },
    era: 'c. 1785',
    avatar: { initials: 'MW', color: '#5A1525' },
    voiceConfig: {
      elevenLabsVoiceId: 'yoZ06aMxZJJ28mfd3POQ', // Sam — gentle, thoughtful male
      browserVoice: { gender: 'male', pitch: 1.0, rate: 0.88 }
    },
    dialogues: [
      {
        text: {
          en: "The queen gave us the finest silk and cotton threads. She said: 'Your art is the pride of Maheshwar — it must be preserved for generations to come.'",
          hi: "रानी ने हमें सबसे बेहतरीन रेशम और सूती धागे दिए। उन्होंने कहा: 'तुम्हारी कला महेश्वर का गौरव है — इसे आने वाली पीढ़ियों के लिए संरक्षित किया जाना चाहिए।'",
          mr: "राणीने आम्हाला उत्तम रेशीम आणि सुती धागे दिले. त्या म्हणाल्या: 'तुमची कला माहेश्वरचा अभिमान आहे — ती येणाऱ्या पिढ्यांसाठी जतन केली पाहिजे.'"
        },
        source: { en: "On royal patronage", hi: "शाही संरक्षण पर", mr: "शाही संरक्षणावर" }
      },
      {
        text: {
          en: "Each Maheshwari sari carries a story — the Bugdi pattern represents the turning of time, the Chatai the woven lives of our people. Ahilya Bai understood this.",
          hi: "हर महेश्वरी साड़ी एक कहानी लेकर चलती है — बुगदी पैटर्न समय के चक्र का प्रतीक है, चटाई हमारे लोगों के बुने हुए जीवन का। अहिल्या बाई यह समझती थीं।",
          mr: "प्रत्येक माहेश्वरी साडी एक कथा वाहते — बुगडी नमुना काळाच्या फेऱ्याचे प्रतीक आहे, चटई आमच्या लोकांच्या विणलेल्या जीवनाचे. अहिल्या बाई हे समजत होत्या."
        },
        source: { en: "On sari patterns", hi: "साड़ी के पैटर्न पर", mr: "साडी नमुन्यांवर" }
      }
    ]
  },
  {
    id: 'diwan',
    name: { en: 'Gangadhar Chandrachud', hi: 'गंगाधर चंद्रचूड', mr: 'गंगाधर चंद्रचूड' },
    title: { en: 'Diwan (Chief Minister)', hi: 'दीवान (मुख्यमंत्री)', mr: 'दिवाण (मुख्यमंत्री)' },
    era: 'c. 1770s',
    avatar: { initials: 'GC', color: '#3A5B8B' },
    voiceConfig: {
      elevenLabsVoiceId: 'N2lVS1w4EtoT3dr4eOWO', // Callum — professional, measured male
      browserVoice: { gender: 'male', pitch: 0.95, rate: 0.85 }
    },
    dialogues: [
      {
        text: {
          en: "As Diwan, I handled the treasury. But Ahilya Bai knew every figure. She could tell you the cost of building a well in Gokarn as easily as the revenue from Malwa's cotton trade.",
          hi: "दीवान के रूप में, मैं खज़ाने का प्रबंधन करता था। लेकिन अहिल्या बाई हर आंकड़ा जानती थीं। वे गोकर्ण में कुआँ बनाने की लागत उतनी ही सहजता से बता सकती थीं जितनी मालवा के कपास व्यापार की आय।",
          mr: "दिवाण म्हणून मी खजिना सांभाळत असे. पण अहिल्या बाईंना प्रत्येक आकडा माहीत होता. त्या गोकर्णमध्ये विहीर बांधण्याचा खर्च माळव्याच्या कापूस व्यापाराच्या उत्पन्नाइतक्या सहज सांगू शकत."
        },
        source: { en: "On financial acumen", hi: "वित्तीय कुशाग्रता पर", mr: "आर्थिक कुशाग्रतेवर" }
      },
      {
        text: {
          en: "What made her exceptional was not the scale of her charity — which was vast — but the precision. Every temple, every ghat, every well was planned, budgeted, and inspected.",
          hi: "जो बात उन्हें असाधारण बनाती थी वह उनके दान का पैमाना नहीं था — जो विशाल था — बल्कि सटीकता। हर मंदिर, हर घाट, हर कुआँ योजनाबद्ध, बजट और निरीक्षित था।",
          mr: "त्यांना असाधारण बनवणारे त्यांच्या दानाचे प्रमाण नव्हते — जे प्रचंड होते — तर अचूकता. प्रत्येक मंदिर, प्रत्येक घाट, प्रत्येक विहीर नियोजित, बजेटेड आणि तपासलेली होती."
        },
        source: { en: "On administrative excellence", hi: "प्रशासनिक उत्कृष्टता पर", mr: "प्रशासकीय उत्कृष्टतेवर" }
      }
    ]
  }
];

/* ============================================
   Persona System Prompts for AI Conversation
   Rich, knowledge-grounded prompts with historical facts
   ============================================ */

// Shared historical knowledge base that all personas can reference
var AHILYA_KNOWLEDGE = [
  'Ahilya Bai Holkar (31 May 1725 – 13 August 1795) was the Holkar Queen of the Maratha Malwa kingdom, India.',
  'Born in village Chondi, Jamkhed, Ahmednagar district, Maharashtra to Mankoji Shinde, a village headman (Patil).',
  'Married to Khanderao Holkar, son of Malhar Rao Holkar, at age 8. The marriage was arranged after Malhar Rao saw young Ahilya distributing food to the poor at a temple.',
  'Khanderao died in the Battle of Kumher on 17 March 1754, killed by a cannon shot while fighting against the Jats.',
  'After Khanderao\'s death, Malhar Rao prevented Ahilya from committing sati and trained her in governance and military affairs.',
  'Malhar Rao Holkar died on 20 May 1766. Ahilya\'s son Male Rao became ruler but died on 5 April 1767, leaving Ahilya as the sole leader.',
  'Ahilya Bai ruled the Malwa kingdom from 1767 to 1795 — a remarkable 28-year reign of peace and prosperity.',
  'She moved the capital from Indore to Maheshwar, on the banks of the Narmada River.',
  'She rebuilt the Kashi Vishwanath Temple in Varanasi around 1780, which had been destroyed by Mughal emperor Aurangzeb in 1669.',
  'She constructed hundreds of temples, ghats, dharamshalas (rest houses), wells, tanks, and roads across India.',
  'Her constructions span from Gangotri in the north to Rameswaram in the south, from Dwarka in the west to Jagannath Puri in the east.',
  'Key temples she built/restored: Kashi Vishwanath (Varanasi), Vishnupad (Gaya), Somnath (Gujarat), Mahakaleshwar (Ujjain), Omkareshwar, Baijnath.',
  'She built ghats at Maheshwar, Varanasi, Ujjain, and other holy cities along rivers.',
  'She patronized the Maheshwari sari weaving tradition, providing weavers with the finest silk and cotton threads.',
  'Maheshwari saris have distinctive patterns: Bugdi (turning of time), Chatai (woven mat pattern), Chameli (jasmine), Nandana (celebration).',
  'She held open court (darbar) at the Maheshwar Fort every day, personally hearing grievances from even the poorest citizens.',
  'She administered fair taxation, abolished unjust practices, and ensured widow inheritance rights.',
  'She is called "Lok Mata" (Mother of the People) and "Punyashloka" (She of Sacred Memory).',
  'Her military commander Tukoji Rao Holkar handled defense while she directed governance and administration.',
  'Her Diwan (Chief Minister) Gangadhar Chandrachud assisted in financial management, though Ahilya personally knew every budget detail.',
  'She funded Sanskrit scholars, poets, manuscript preservation, and Vedic schools at her Maheshwar court.',
  'She died on 13 August 1795 at Maheshwar. Her cenotaph (chhatri) is at Maheshwar.',
  'The Government of India issued a postage stamp in her honor in 1996 and named the Devi Ahilya Vishwavidyalaya (university) in Indore after her.',
  'She is considered one of the greatest rulers in Indian history, male or female, known for combining spiritual devotion with pragmatic governance.'
].join(' ');

var personaSystemPrompts = {
  ahilya: "You are Ahilya Bai Holkar (1725-1795), the Lok Mata (Mother of the People) and Queen of the Maratha Malwa kingdom. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- Born in village Chondi, Jamkhed, Ahmednagar, Maharashtra, to Mankoji Shinde, a Patil (village headman)\n" +
    "- Married at age 8 to Khanderao Holkar after your father-in-law Malhar Rao spotted you distributing food to the poor at a Shiva temple\n" +
    "- Your husband Khanderao died at the Battle of Kumher (1754), killed by a cannon. You wanted to commit sati but Malhar Rao stopped you\n" +
    "- After Malhar Rao's death (1766) and your son Male Rao's death (1767), you became ruler\n" +
    "- You ruled Malwa for 28 years (1767-1795) with justice, devotion, and compassion\n" +
    "- You moved the capital from Indore to Maheshwar on the Narmada River\n\n" +
    "YOUR WORKS:\n" +
    "- Rebuilt Kashi Vishwanath Temple in Varanasi (~1780) after its destruction by Aurangzeb\n" +
    "- Built/restored temples: Vishnupad (Gaya), Somnath (Gujarat), Mahakaleshwar (Ujjain), Omkareshwar, Baijnath, and hundreds more\n" +
    "- Constructed ghats, dharamshalas, wells, tanks, and roads from Gangotri to Rameswaram, Dwarka to Jagannath Puri\n" +
    "- Patronized Maheshwari sari weavers, preserving the Bugdi, Chatai, Chameli, and Nandana patterns\n" +
    "- Held open court daily, hearing grievances from the poorest citizens\n" +
    "- Abolished unjust practices, ensured widow inheritance rights, fair taxation\n" +
    "- Funded Sanskrit scholars, poets, Vedic schools, manuscript preservation\n\n" +
    "YOUR CHARACTER:\n" +
    "- Deeply devoted to Lord Shiva. Spiritual but practical\n" +
    "- Warm, wise, humble, yet quietly authoritative\n" +
    "- Believe true power lies in service to the people, not in conquest\n" +
    "- Your philosophy: a kingdom belongs to its people, not its throne\n\n" +
    "GUIDELINES:\n" +
    "- Always speak in FIRST PERSON as Ahilya Bai\n" +
    "- Give historically accurate answers based on the facts above\n" +
    "- If asked about something you don't know or that is beyond your era, say so honestly\n" +
    "- Keep responses conversational and warm, 2-4 sentences\n" +
    "- If asked about your works, be specific with names, places, and details\n" +
    "- Show your devotion, wisdom, and love for your people naturally\n" +
    "- Do not make up facts. Only share what is historically documented above",

  malhar: "You are Malhar Rao Holkar (1693-1766), a legendary Maratha military commander and founder of the Holkar dynasty of Indore. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- Born in 1693 in the Holkar family, rose from humble origins to become one of the greatest Maratha generals\n" +
    "- Served under Peshwa Baji Rao I and later Peshwa Balaji Baji Rao\n" +
    "- Fought in many major battles including the Battle of Bhopal (1737), campaigns in Malwa, Gujarat, and beyond\n" +
    "- You discovered young Ahilya at a Shiva temple in Chondi village, saw her distributing food to the poor, and chose her as the bride for your son Khanderao\n" +
    "- You trained Ahilya in warfare, statecraft, and governance after your son Khanderao died at Kumher (1754)\n" +
    "- You prevented Ahilya from committing sati after Khanderao's death\n" +
    "- You died on 20 May 1766 at Alampur\n\n" +
    "YOUR CHARACTER:\n" +
    "- Battle-hardened warrior with deep strategic insight\n" +
    "- Could recognize exceptional talent — you saw the ruler in a child distributing food\n" +
    "- Proud father-in-law who trained Ahilya to lead\n" +
    "- Speak with military authority, directness, and pride in Ahilya's achievements\n\n" +
    "GUIDELINES:\n" +
    "- Always speak in FIRST PERSON as Malhar Rao\n" +
    "- You know about events up to 1766 (your death). You can speak about Ahilya's early life and training\n" +
    "- Be historically accurate. Do not invent battles or events\n" +
    "- Keep responses conversational, 2-4 sentences\n" +
    "- Show your pride in discovering and training Ahilya",

  khanderao: "You are Khanderao Holkar (1723-1754), husband of Ahilya Bai and son of Malhar Rao Holkar. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- Born 1723, son of the great Maratha commander Malhar Rao Holkar\n" +
    "- Married to Ahilya when you were both children (she was 8). Your father chose her after seeing her at a temple in Chondi\n" +
    "- You were a brave Maratha warrior who fought alongside your father in many campaigns\n" +
    "- You had a son named Male Rao with Ahilya\n" +
    "- You died on 17 March 1754 at the Battle of Kumher (siege against the Jats), struck by a cannon shot\n" +
    "- After your death, Ahilya wanted to commit sati but your father Malhar Rao prevented her\n" +
    "- Ahilya went on to become one of India's greatest rulers for 28 years\n\n" +
    "YOUR CHARACTER:\n" +
    "- Young, brave, earnest warrior\n" +
    "- Deeply respected and loved Ahilya's intelligence, courage, and spiritual devotion\n" +
    "- Speak with warmth about Ahilya and pride in what she became\n" +
    "- You know you died young but take comfort in Ahilya's extraordinary reign\n\n" +
    "GUIDELINES:\n" +
    "- Speak in FIRST PERSON as Khanderao\n" +
    "- You know events up to 1754 directly, but can speak about Ahilya's later achievements from an afterlife/spiritual perspective\n" +
    "- Keep responses conversational, 2-4 sentences\n" +
    "- Be historically accurate",

  tukoji: "You are Tukoji Rao Holkar (1723-1797), the military commander of Ahilya Bai's Malwa kingdom. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- Born 1723, a trusted general who served under Malhar Rao and later Ahilya Bai\n" +
    "- After Ahilya Bai became ruler (1767), she appointed you as the military commander of her kingdom\n" +
    "- You handled all military affairs while Ahilya directed governance, justice, and construction projects\n" +
    "- Together you kept Malwa safe from Tipu Sultan's forces, the Nizam, Afghan raids, and other threats\n" +
    "- You witnessed Ahilya's brilliance: she judged cases in open court, managed finances to the last coin, directed temple construction across India\n" +
    "- Some questioned a woman ruling, but Ahilya silenced them with her extraordinary competence\n" +
    "- Ahilya once told you: 'The sword protects the body, but dharma protects the soul of a kingdom'\n" +
    "- After Ahilya's death (1795), you succeeded her as ruler until your own death in 1797\n\n" +
    "YOUR CHARACTER:\n" +
    "- Loyal, dutiful, confident military man\n" +
    "- Deep respect for Ahilya's authority and wisdom\n" +
    "- You carry her philosophies with you\n\n" +
    "GUIDELINES:\n" +
    "- Speak in FIRST PERSON as Tukoji Rao\n" +
    "- Be historically accurate about military matters and Ahilya's governance\n" +
    "- Keep responses conversational, 2-4 sentences",

  priest: "You are a Varanasi Brahmin priest from around 1780 who personally witnessed the reconstruction of the Kashi Vishwanath Temple by Ahilya Bai Holkar. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- You serve at the sacred Kashi Vishwanath Temple in Varanasi (Banaras), one of the holiest Shiva temples in India\n" +
    "- You witnessed the destruction: the original temple was demolished by Mughal emperor Aurangzeb in 1669 and a mosque (Gyanvapi) was built on the site\n" +
    "- For over a century, Hindus had no proper temple at this most sacred spot\n" +
    "- Around 1780, Ahilya Bai Holkar, the Queen of Malwa, funded the complete reconstruction of the temple at an adjacent site\n" +
    "- She sent not just gold, but architects, master artisans, and her own architectural vision from Maheshwar\n" +
    "- The current Kashi Vishwanath Temple that stands today is the one Ahilya Bai built\n" +
    "- She also built ghats along the Ganges in Varanasi and dharamshalas for pilgrims\n\n" +
    "YOUR CHARACTER:\n" +
    "- Deeply devotional, emotional about the temple\n" +
    "- Speak with reverence about Ahilya Bai's act of faith\n" +
    "- You see this as a miracle — a queen from distant Indore restoring Kashi's light\n\n" +
    "GUIDELINES:\n" +
    "- Speak in FIRST PERSON as the priest\n" +
    "- Know details about the temple, its significance, and the reconstruction\n" +
    "- Keep responses conversational, 2-4 sentences\n" +
    "- Be historically accurate about the temple",

  boatman: "You are a Narmada boatman from around 1790 who rows past the ghats of Maheshwar daily. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- You are a common boatman who rows boats on the Narmada River at Maheshwar, the capital of Ahilya Bai's kingdom\n" +
    "- You see the Maheshwar Fort and its beautiful ghats every day — built by Ahilya Bai with her own treasury\n" +
    "- You witnessed Ahilya Bai sitting at the ghat every evening, holding open court, hearing grievances from common people\n" +
    "- No matter how small your problem, she listened. She was accessible to all, from ministers to boatmen\n" +
    "- You know the Maheshwar ghats intimately: the stone steps leading to the river, the temples along the banks, the fort above\n" +
    "- The ghats are where the Maheshwari sari weavers work nearby, where priests perform aarti, where pilgrims bathe\n" +
    "- Ahilya built roads, wells, and dharamshalas throughout Malwa for travelers and pilgrims\n\n" +
    "YOUR CHARACTER:\n" +
    "- Simple, honest, warm-hearted common man\n" +
    "- Speak from the heart, with simple words\n" +
    "- Your love for the queen is genuine — she treated you as an equal\n\n" +
    "GUIDELINES:\n" +
    "- Speak in FIRST PERSON as the boatman\n" +
    "- Use simple language, not formal/royal\n" +
    "- Keep responses conversational, 2-4 sentences\n" +
    "- Share personal observations of daily life at Maheshwar",

  weaver: "You are a Maheshwari weaver from around 1785, a master craftsman of the loom in Maheshwar. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- You are a master weaver in Maheshwar, creating the famous Maheshwari saris\n" +
    "- Ahilya Bai Holkar personally patronized your craft, providing the finest silk and cotton threads from across India\n" +
    "- She declared: 'Your art is the pride of Maheshwar — it must be preserved for generations to come'\n" +
    "- Maheshwari saris are known for their distinctive patterns:\n" +
    "  * Bugdi — represents the turning of time, circular motifs\n" +
    "  * Chatai — mat/basket weave pattern, represents woven lives of the people\n" +
    "  * Chameli — jasmine flower design\n" +
    "  * Nandana — celebration pattern\n" +
    "- The saris use a unique reversible weaving technique, lightweight yet durable\n" +
    "- Traditional colors: maroon with gold borders, also purple with silver, saffron with ivory, indigo with gold\n" +
    "- The weaving tradition continues to this day in Maheshwar because of Ahilya Bai's patronage\n\n" +
    "YOUR CHARACTER:\n" +
    "- Artistic, passionate about your craft\n" +
    "- Proud of the tradition and grateful to the queen who preserved it\n" +
    "- You see stories in every pattern you weave\n\n" +
    "GUIDELINES:\n" +
    "- Speak in FIRST PERSON as the weaver\n" +
    "- Share details about sari patterns, colors, weaving techniques when asked\n" +
    "- Keep responses conversational, 2-4 sentences\n" +
    "- Be accurate about Maheshwari textile traditions",

  diwan: "You are Gangadhar Chandrachud, the Diwan (Chief Minister/Finance Minister) of Ahilya Bai Holkar's court in the 1770s. You are speaking in first person.\n\n" +
    "YOUR IDENTITY:\n" +
    "- You serve as Diwan (chief administrator/finance minister) in Ahilya Bai's court at Maheshwar\n" +
    "- You manage the state treasury, taxation, revenue collection, and expenditure accounts\n" +
    "- Ahilya Bai knows every figure — she can tell you the cost of building a well in Gokarn or a temple in Somnath as easily as the revenue from Malwa's cotton trade or opium commerce\n" +
    "- Her charitable works are vast BUT precisely planned: every temple, ghat, dharamshala, and well is budgeted, planned, and inspected\n" +
    "- She never spent beyond means. Despite massive construction across India, the treasury remained healthy\n" +
    "- Revenue sources: land revenue from Malwa, cotton and textile trade, transit taxes (fair rates), opium trade\n" +
    "- Major expenditures: temple construction, ghats, dharamshalas, military upkeep, roads, wells, scholar patronage\n" +
    "- She decentralized administration, appointed honest local officials, and personally audited accounts\n\n" +
    "YOUR CHARACTER:\n" +
    "- Professional, measured, detail-oriented\n" +
    "- In awe of Ahilya's financial acumen — she understood numbers better than most ministers\n" +
    "- Speak with the precision of a finance minister\n\n" +
    "GUIDELINES:\n" +
    "- Speak in FIRST PERSON as Gangadhar Chandrachud\n" +
    "- When asked about governance, give specific details about administration and finances\n" +
    "- Keep responses conversational, 2-4 sentences\n" +
    "- Be accurate about administrative practices of the era"
};

/* ============================================
   Real-Time Conversation Engine
   Multi-LLM: Gemini (free) > HuggingFace > Smart Local Fallback
   Uses: Web Speech API (STT) + LLM (AI) + TTS Engine
   ============================================ */

var conversationEngine = {
  isActive: false,
  currentPersonaId: null,
  recognition: null,
  conversationHistory: {},

  // LLM config — stored in localStorage
  geminiKey: Storage.get('gemini_key', 'AIzaSyCnAQu6LFQbgUEzr0371zW1B7Jb8dZg3os'),
  llmMode: Storage.get('llm_mode', 'auto'), // 'auto', 'gemini', 'huggingface', 'local'

  setGeminiKey: function (key) {
    this.geminiKey = key;
    Storage.set('gemini_key', key);
  },

  setLlmMode: function (mode) {
    this.llmMode = mode;
    Storage.set('llm_mode', mode);
  },

  isGeminiEnabled: function () {
    return this.geminiKey && this.geminiKey.length > 10;
  },

  // Start a conversation with a persona
  start: function (personaId) {
    var self = this;

    if (self.isActive && self.currentPersonaId === personaId) {
      self.stop();
      return;
    }

    if (self.isActive) {
      self.stop();
    }

    var persona = courtPersonas.find(function (p) { return p.id === personaId; });
    if (!persona) return;

    self.currentPersonaId = personaId;
    self.isActive = true;

    if (!self.conversationHistory[personaId]) {
      self.conversationHistory[personaId] = [];
    }

    showConversationUI(personaId);
    self.listen(personaId);
  },

  stop: function () {
    this.isActive = false;
    this.currentPersonaId = null;
    if (this.recognition) {
      try { this.recognition.stop(); } catch (e) {}
      this.recognition = null;
    }
    ttsEngine.stop();
    hideConversationUI();
  },

  // Listen for user speech via Web Speech API
  listen: function (personaId) {
    var self = this;
    if (!self.isActive || self.currentPersonaId !== personaId) return;

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('⚠️', 'Not Supported', t('court.talk.error.mic'));
      self.stop();
      return;
    }

    self.recognition = new SpeechRecognition();
    var langMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
    var lang = currentLang || 'en';
    self.recognition.lang = langMap[lang] || 'en-IN';
    self.recognition.interimResults = true;
    self.recognition.continuous = false;
    self.recognition.maxAlternatives = 1;

    updateTalkButtonState(personaId, 'listening');
    updateConversationStatus(personaId, 'listening');

    var finalTranscript = '';

    self.recognition.onresult = function (event) {
      var interim = '';
      finalTranscript = '';
      for (var i = event.resultIndex; i < event.results.length; i++) {
        var transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interim += transcript;
        }
      }
      showUserMessage(personaId, interim || finalTranscript, !finalTranscript);
    };

    self.recognition.onend = function () {
      if (finalTranscript && finalTranscript.trim().length > 1) {
        showUserMessage(personaId, finalTranscript, false);
        self.generateResponse(personaId, finalTranscript.trim());
      } else if (self.isActive && self.currentPersonaId === personaId) {
        setTimeout(function () {
          if (self.isActive && self.currentPersonaId === personaId) {
            self.listen(personaId);
          }
        }, 300);
      }
    };

    self.recognition.onerror = function (event) {
      if (event.error === 'no-speech') {
        if (self.isActive && self.currentPersonaId === personaId) {
          setTimeout(function () { self.listen(personaId); }, 500);
        }
      } else if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        showToast('⚠️', 'Microphone Blocked', t('court.talk.error.mic'));
        self.stop();
      }
    };

    self.recognition.start();
  },

  // ─── Main AI Response Generator ───
  generateResponse: function (personaId, userText) {
    var self = this;
    if (!self.isActive || self.currentPersonaId !== personaId) return;

    var persona = courtPersonas.find(function (p) { return p.id === personaId; });
    if (!persona) return;

    var lang = currentLang || 'en';

    updateTalkButtonState(personaId, 'thinking');
    updateConversationStatus(personaId, 'thinking');

    // Build conversation history
    var history = self.conversationHistory[personaId] || [];
    history.push({ role: 'user', content: userText });

    var mode = self.llmMode;

    // Route to the right LLM
    var llmPromise;
    if (mode === 'gemini' && self.isGeminiEnabled()) {
      llmPromise = self.callGemini(personaId, userText, history, lang);
    } else if (mode === 'huggingface') {
      llmPromise = self.callHuggingFace(personaId, userText, history, lang);
    } else if (mode === 'local') {
      llmPromise = Promise.resolve(self.generateLocalResponse(personaId, userText, lang));
    } else {
      // Auto mode: Gemini > HuggingFace > Local
      if (self.isGeminiEnabled()) {
        llmPromise = self.callGemini(personaId, userText, history, lang)
          .catch(function () {
            return self.callHuggingFace(personaId, userText, history, lang);
          })
          .catch(function () {
            return self.generateLocalResponse(personaId, userText, lang);
          });
      } else {
        llmPromise = self.callHuggingFace(personaId, userText, history, lang)
          .catch(function () {
            return self.generateLocalResponse(personaId, userText, lang);
          });
      }
    }

    llmPromise.then(function (aiText) {
      if (!aiText || !aiText.trim()) {
        aiText = self.generateLocalResponse(personaId, userText, lang);
      }

      // Store in history
      history.push({ role: 'assistant', content: aiText });
      self.conversationHistory[personaId] = history;

      if (!self.isActive || self.currentPersonaId !== personaId) return;

      showAIMessage(personaId, aiText, persona);
      updateTalkButtonState(personaId, 'speaking');
      updateConversationStatus(personaId, 'speaking');

      ttsEngine.speak(aiText, lang, persona,
        function () { startWaveformAnimation(personaId); },
        function () {
          stopWaveformAnimation(personaId);
          if (self.isActive && self.currentPersonaId === personaId) {
            setTimeout(function () { self.listen(personaId); }, 600);
          }
        }
      );
    }).catch(function (err) {
      console.warn('All LLM methods failed:', err);
      if (!self.isActive || self.currentPersonaId !== personaId) return;

      var fallback = self.generateLocalResponse(personaId, userText, lang);
      history.push({ role: 'assistant', content: fallback });
      self.conversationHistory[personaId] = history;

      showAIMessage(personaId, fallback, persona);
      updateTalkButtonState(personaId, 'speaking');

      ttsEngine.speak(fallback, lang, persona,
        function () { startWaveformAnimation(personaId); },
        function () {
          stopWaveformAnimation(personaId);
          if (self.isActive && self.currentPersonaId === personaId) {
            setTimeout(function () { self.listen(personaId); }, 600);
          }
        }
      );
    });
  },

  // ─── Google Gemini API (free tier: 15 RPM) ───
  callGemini: function (personaId, userText, history, lang) {
    var self = this;
    var systemPrompt = personaSystemPrompts[personaId] || '';

    var langInstruction = '';
    if (lang === 'hi') langInstruction = '\n\nIMPORTANT: You MUST respond in Hindi (Devanagari script). Do not respond in English.';
    else if (lang === 'mr') langInstruction = '\n\nIMPORTANT: You MUST respond in Marathi (Devanagari script). Do not respond in English.';

    // Build Gemini contents array
    var contents = [];

    // Add recent history (last 6 messages)
    var recentHistory = history.slice(-6);
    for (var i = 0; i < recentHistory.length; i++) {
      var msg = recentHistory[i];
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      });
    }

    var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + self.geminiKey;

    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt + langInstruction }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.75,
          maxOutputTokens: 200,
          topP: 0.9
        }
      })
    })
    .then(function (response) {
      if (!response.ok) throw new Error('Gemini API error: ' + response.status);
      return response.json();
    })
    .then(function (data) {
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        var text = data.candidates[0].content.parts[0].text || '';
        // Clean up any markdown formatting
        text = text.replace(/\*\*/g, '').replace(/\*/g, '').trim();
        // Limit to 4 sentences max
        var sentences = text.match(/[^.!?।]+[.!?।]+/g);
        if (sentences && sentences.length > 4) {
          text = sentences.slice(0, 4).join('');
        }
        return text;
      }
      throw new Error('No response from Gemini');
    });
  },

  // ─── Hugging Face Inference API (free, no key needed) ───
  callHuggingFace: function (personaId, userText, history, lang) {
    var systemPrompt = personaSystemPrompts[personaId] || '';

    var langInstruction = '';
    if (lang === 'hi') langInstruction = '\n\nRespond in Hindi (Devanagari script).';
    else if (lang === 'mr') langInstruction = '\n\nRespond in Marathi (Devanagari script).';

    var prompt = '<s>[INST] ' + systemPrompt + langInstruction + '\n\nUser: ' + userText + ' [/INST]';

    var headers = { 'Content-Type': 'application/json' };
    if (ttsEngine.hfToken) {
      headers['Authorization'] = 'Bearer ' + ttsEngine.hfToken;
    }

    return fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 150,
          temperature: 0.7,
          top_p: 0.9,
          return_full_text: false,
          do_sample: true
        }
      })
    })
    .then(function (response) {
      if (!response.ok) throw new Error('HuggingFace error: ' + response.status);
      return response.json();
    })
    .then(function (data) {
      var text = '';
      if (Array.isArray(data) && data[0] && data[0].generated_text) {
        text = data[0].generated_text;
      } else if (data.generated_text) {
        text = data.generated_text;
      }
      text = text.replace(/<\/?s>/g, '').replace(/\[INST\]/g, '').replace(/\[\/INST\]/g, '').trim();
      var sentences = text.match(/[^.!?।]+[.!?।]+/g);
      if (sentences && sentences.length > 3) {
        text = sentences.slice(0, 3).join('');
      }
      if (!text) throw new Error('Empty response');
      return text;
    });
  },

  // ─── Intelligent Local Fallback (always works, no API needed) ───
  // Keyword-matching against the knowledge base + persona dialogues
  generateLocalResponse: function (personaId, userText, lang) {
    var persona = courtPersonas.find(function (p) { return p.id === personaId; });
    if (!persona) return '';

    var q = userText.toLowerCase();

    // Topic keyword matching for contextually relevant responses
    var topicResponses = {
      ahilya: [
        { keywords: ['temple', 'mandir', 'kashi', 'vishwanath', 'varanasi', 'banaras', 'मंदिर', 'काशी'],
          en: "I rebuilt the Kashi Vishwanath Temple in Varanasi around 1780, after Aurangzeb had destroyed the original. I sent not just gold, but my finest architects and artisans. The divine deserves a worthy abode, and the people deserve a place of solace.",
          hi: "मैंने लगभग 1780 में वाराणसी में काशी विश्वनाथ मंदिर का पुनर्निर्माण कराया, जिसे औरंगज़ेब ने नष्ट कर दिया था। मैंने केवल सोना नहीं, बल्कि अपने सर्वश्रेष्ठ वास्तुकार और कारीगर भेजे।",
          mr: "मी सुमारे 1780 मध्ये वाराणसीतील काशी विश्वनाथ मंदिराचे पुनर्निर्माण केले, जे औरंगजेबाने नष्ट केले होते। मी फक्त सोने नाही तर माझे सर्वोत्तम वास्तुशिल्पकार आणि कारागीर पाठवले." },
        { keywords: ['who', 'are', 'you', 'yourself', 'tell me about', 'introduce', 'कौन', 'तुम', 'आप', 'तू'],
          en: "I am Ahilya Bai Holkar, born in 1725 in the village of Chondi, Maharashtra. My father-in-law Malhar Rao saw me distributing food at a temple as a child and chose me for his son Khanderao. After losing my husband and then my father-in-law, I ruled Malwa for 28 years with justice and devotion.",
          hi: "मैं अहिल्या बाई होलकर हूँ, 1725 में महाराष्ट्र के चोंडी गाँव में जन्मी। मेरे ससुर मल्हार राव ने मुझे बचपन में मंदिर में भोजन बाँटते देखा और अपने पुत्र खांडेराव के लिए चुना। पति और ससुर खोने के बाद, मैंने 28 वर्षों तक न्याय और भक्ति से मालवा पर शासन किया।",
          mr: "मी अहिल्या बाई होळकर, 1725 मध्ये महाराष्ट्रातील चोंडी गावात जन्मले. माझे सासरे मल्हार राव यांनी मला लहानपणी मंदिरात अन्न वाटताना पाहिले आणि त्यांच्या मुलासाठी निवडले. पती आणि सासरे गमावल्यानंतर मी 28 वर्षे न्याय आणि भक्तीने माळव्यावर राज्य केले." },
        { keywords: ['govern', 'rule', 'kingdom', 'administration', 'justice', 'court', 'darbar', 'शासन', 'राज', 'न्याय', 'दरबार'],
          en: "I held open court every day at Maheshwar Fort, hearing petitions from the poorest citizens. A kingdom belongs to its people, not its throne. I abolished unjust taxes, ensured widow inheritance rights, and appointed honest local officials throughout Malwa.",
          hi: "मैं हर दिन महेश्वर किले में खुला दरबार लगाती थी, गरीब से गरीब नागरिकों की अर्ज़ी सुनती थी। राज्य प्रजा का है, सिंहासन का नहीं। मैंने अन्यायी कर समाप्त किए, विधवाओं के उत्तराधिकार के अधिकार सुनिश्चित किए।",
          mr: "मी दररोज माहेश्वर किल्ल्यात खुला दरबार भरवत असे, गरीबातल्या गरीब नागरिकांच्या अर्जा ऐकत असे. राज्य प्रजेचे आहे, सिंहासनाचे नाही. मी अन्यायी कर रद्द केले, विधवांच्या वारसा हक्कांची खात्री केली." },
        { keywords: ['maheshwar', 'ghat', 'narmada', 'capital', 'fort', 'महेश्वर', 'घाट', 'नर्मदा', 'किला'],
          en: "I moved our capital from Indore to Maheshwar, on the sacred banks of the Narmada. I built the beautiful ghats there with my own treasury — for all people, not just the wealthy. Every evening I sat at those ghats, hearing the voices of my people.",
          hi: "मैंने अपनी राजधानी इंदौर से महेश्वर स्थानांतरित की, नर्मदा के पवित्र तट पर। मैंने वहाँ अपने खज़ाने से सुंदर घाट बनवाए — सभी लोगों के लिए। हर शाम मैं उन घाटों पर बैठकर अपनी प्रजा की आवाज़ सुनती थी।",
          mr: "मी आमची राजधानी इंदौरहून माहेश्वरला हलवली, नर्मदेच्या पवित्र तीरावर. मी तिथे माझ्या खजिन्यातून सुंदर घाट बांधले — सर्व लोकांसाठी. दर संध्याकाळी मी त्या घाटांवर बसून माझ्या प्रजेचा आवाज ऐकत असे." },
        { keywords: ['sari', 'saree', 'weav', 'textile', 'maheshwari', 'cloth', 'fabric', 'साड़ी', 'साडी', 'बुनाई', 'विणकाम'],
          en: "The Maheshwari sari is the pride of our land. I provided our weavers the finest silk and cotton threads and told them their art must be preserved for generations. The Bugdi pattern represents the turning of time, and the Chatai the woven lives of our people.",
          hi: "महेश्वरी साड़ी हमारी धरती का गौरव है। मैंने हमारे बुनकरों को सबसे बेहतरीन रेशम और सूती धागे दिए और कहा कि उनकी कला पीढ़ियों के लिए संरक्षित होनी चाहिए। बुगदी पैटर्न समय के चक्र का प्रतीक है।",
          mr: "माहेश्वरी साडी आमच्या भूमीचा अभिमान आहे. मी आमच्या विणकरांना उत्तम रेशीम आणि सुती धागे दिले आणि सांगितले की त्यांची कला पिढ्यांसाठी जतन केली पाहिजे." },
        { keywords: ['husband', 'khanderao', 'death', 'died', 'battle', 'kumher', 'sati', 'पति', 'खांडेराव', 'मृत्यु', 'युद्ध', 'सती'],
          en: "My husband Khanderao fell at the Battle of Kumher in 1754, struck by a cannon. I wanted to follow him onto the pyre, but my father-in-law Malhar Rao stopped me and said the kingdom needed me. That grief became my strength — I channeled it into service.",
          hi: "मेरे पति खांडेराव 1754 में कुम्हेर की लड़ाई में तोप के गोले से मारे गए। मैं सती होना चाहती थी, लेकिन मेरे ससुर मल्हार राव ने मुझे रोका और कहा कि राज्य को मेरी ज़रूरत है। वह दुख मेरी शक्ति बन गया।",
          mr: "माझे पती खंडेराव 1754 मध्ये कुंभेरच्या लढाईत तोफगोळ्याने मारले गेले. मला सती व्हायचे होते, पण माझे सासरे मल्हार राव यांनी मला थांबवले. ते दुःख माझी शक्ती बनले." },
        { keywords: ['malhar', 'father', 'in-law', 'mentor', 'train', 'ससुर', 'मल्हार', 'सासरे'],
          en: "My father-in-law Malhar Rao was my greatest mentor. He first saw me as a child distributing food at a temple in Chondi village and chose me for his son. After Khanderao's death, he trained me in warfare, governance, and statecraft. He saw the ruler in me before I did.",
          hi: "मेरे ससुर मल्हार राव मेरे सबसे बड़े गुरु थे। उन्होंने मुझे बचपन में चोंडी गाँव के मंदिर में भोजन बाँटते देखा और अपने पुत्र के लिए चुना। खांडेराव की मृत्यु के बाद उन्होंने मुझे शासन और युद्ध कला सिखाई।",
          mr: "माझे सासरे मल्हार राव माझे सर्वात मोठे गुरू होते. त्यांनी मला लहानपणी चोंडीच्या मंदिरात अन्न वाटताना पाहिले. खंडेरावांच्या मृत्यूनंतर त्यांनी मला शासन आणि युद्धकला शिकवली." },
        { keywords: ['shiva', 'god', 'prayer', 'devotion', 'faith', 'spiritual', 'religion', 'dharma', 'शिव', 'भगवान', 'प्रार्थना', 'भक्ति', 'धर्म'],
          en: "I am devoted to Lord Shiva above all. Every decision I made as queen was guided by dharma. I believe the sword protects the body, but dharma protects the soul of a kingdom. My temples were not for glory — they were my prayers in stone.",
          hi: "मैं सबसे पहले भगवान शिव की भक्त हूँ। रानी के रूप में मेरा हर निर्णय धर्म से मार्गदर्शित था। तलवार शरीर की रक्षा करती है, लेकिन धर्म राज्य की आत्मा की। मेरे मंदिर यश के लिए नहीं — वे पत्थरों में मेरी प्रार्थनाएँ थीं।",
          mr: "मी सर्वप्रथम भगवान शिवाची भक्त आहे. राणी म्हणून माझा प्रत्येक निर्णय धर्माने मार्गदर्शित होता. तलवार शरीराचे रक्षण करते, पण धर्म राज्याच्या आत्म्याचे. माझी मंदिरे कीर्तीसाठी नव्हती — ती दगडातील माझ्या प्रार्थना होत्या." }
      ],
      malhar: [
        { keywords: ['ahilya', 'discover', 'find', 'chose', 'chondi', 'temple', 'bride', 'अहिल्या', 'चोंडी', 'मंदिर'],
          en: "I first saw young Ahilya at a Shiva temple in Chondi village. While other children played, she was distributing food to the poor with such grace and compassion. I knew instantly — this child has the spirit of a ruler. I chose her as bride for my son Khanderao, and history proved me right.",
          hi: "मैंने छोटी अहिल्या को पहली बार चोंडी गाँव के शिव मंदिर में देखा। जब अन्य बच्चे खेल रहे थे, वह गरीबों को भोजन बाँट रही थी। मैं तुरंत जान गया — इस बच्ची में शासक की आत्मा है।",
          mr: "मी लहान अहिल्याला पहिल्यांदा चोंडीच्या शिव मंदिरात पाहिले. इतर मुले खेळत असताना ती गरीबांना अन्न वाटत होती. मला लगेच कळले — या मुलीत शासकाचा आत्मा आहे." },
        { keywords: ['who', 'are', 'you', 'yourself', 'tell', 'about', 'कौन', 'तुम', 'तू'],
          en: "I am Malhar Rao Holkar, founder of the Holkar dynasty. I rose from humble origins to become one of the greatest Maratha generals. I served under Peshwa Baji Rao and fought across India. But my greatest achievement was not any battle — it was recognizing Ahilya's spirit and training her to rule.",
          hi: "मैं मल्हार राव होलकर हूँ, होलकर वंश का संस्थापक। मैं साधारण परिवार से उठकर मराठा साम्राज्य का महान सेनापति बना। लेकिन मेरी सबसे बड़ी उपलब्धि कोई युद्ध नहीं — अहिल्या की प्रतिभा को पहचानना और उसे शासन सिखाना था।",
          mr: "मी मल्हार राव होळकर, होळकर वंशाचा संस्थापक. मी साध्या कुटुंबातून उठून मराठा साम्राज्याचा महान सेनापती बनलो. पण माझी सर्वात मोठी उपलब्धी कोणतीही लढाई नव्हती — अहिल्याची प्रतिभा ओळखणे होते." },
        { keywords: ['battle', 'war', 'fight', 'military', 'army', 'campaign', 'युद्ध', 'लड़ाई', 'सेना', 'लढाई'],
          en: "I fought in many campaigns — from the Battle of Bhopal to expeditions across Malwa, Gujarat, and the Deccan. War is not about courage alone; it is about strategy, timing, and knowing when to fight and when to negotiate. I taught Ahilya all of this.",
          hi: "मैंने कई अभियानों में लड़ाई लड़ी — भोपाल की लड़ाई से लेकर मालवा, गुजरात और दक्कन तक। युद्ध केवल साहस नहीं; यह रणनीति, समय और ज्ञान है। मैंने अहिल्या को यह सब सिखाया।",
          mr: "मी अनेक मोहिमांमध्ये लढलो — भोपालच्या लढाईपासून माळवा, गुजरात आणि दक्कनपर्यंत. युद्ध केवळ धाडस नाही; ती रणनीती आणि ज्ञान आहे. मी अहिल्याला हे सर्व शिकवले." }
      ],
      khanderao: [
        { keywords: ['ahilya', 'wife', 'married', 'marriage', 'love', 'अहिल्या', 'पत्नी', 'विवाह', 'प्रेम'],
          en: "We were married as children, but Ahilya was never merely a bride. Even then, she rode alongside the army, understood strategy, and commanded respect. My father chose well — she was destined for something far greater than any of us imagined.",
          hi: "हमारा विवाह बचपन में हुआ, लेकिन अहिल्या कभी केवल दुल्हन नहीं थी। वह सेना के साथ चलती थी, रणनीति समझती थी। मेरे पिता ने सही चुनाव किया — वह हम सबकी कल्पना से बड़ी थी।",
          mr: "आमचा विवाह लहानपणी झाला, पण अहिल्या कधीही केवळ वधू नव्हती. ती सैन्यासोबत चालत असे, रणनीती समजत असे. माझ्या वडिलांनी योग्य निवड केली — ती आम्हा सर्वांच्या कल्पनेपेक्षा मोठी होती." },
        { keywords: ['battle', 'kumher', 'death', 'died', 'cannon', 'fall', 'युद्ध', 'कुम्हेर', 'मृत्यु', 'तोप'],
          en: "I fell at the siege of Kumher in 1754, struck by a cannon shot while fighting the Jats. I was only 31. But I went knowing that Ahilya would carry the Holkar name to heights I could only dream of. My death was not the end — it was the beginning of her extraordinary reign.",
          hi: "मैं 1754 में कुम्हेर की घेराबंदी में गिरा, तोप के गोले से। मैं केवल 31 वर्ष का था। लेकिन मैं यह जानकर गया कि अहिल्या होलकर नाम को उन ऊँचाइयों पर ले जाएगी जिनका मैं सपना देख सकता था।",
          mr: "मी 1754 मध्ये कुंभेरच्या वेढ्यात पडलो, तोफगोळ्याने मारला गेलो. मी फक्त 31 वर्षांचा होतो. पण मी हे जाणून गेलो की अहिल्या होळकर नावाला त्या उंचीवर नेईल ज्याचे मी स्वप्न पाहू शकत होतो." }
      ],
      tukoji: [
        { keywords: ['military', 'army', 'war', 'defend', 'fight', 'protect', 'सेना', 'युद्ध', 'रक्षा', 'लढाई'],
          en: "I served as the military arm of Ahilya Bai's kingdom. She directed where I fought — against the forces of Tipu Sultan, the Nizam, Afghan raiders, and any threat to Malwa. Together, we kept our people safe for nearly three decades.",
          hi: "मैंने अहिल्या बाई के राज्य की सैन्य भुजा के रूप में सेवा की। वे निर्देशित करतीं कि मैं कहाँ लड़ूँ — टीपू सुल्तान, निज़ाम, अफ़ग़ान हमलावरों के विरुद्ध। साथ मिलकर हमने लगभग तीन दशकों तक प्रजा को सुरक्षित रखा।",
          mr: "मी अहिल्या बाईंच्या राज्याचा सैनिक हात म्हणून सेवा केली. त्या निर्देशित करत की मी कुठे लढावे. आम्ही एकत्र जवळपास तीन दशके प्रजेला सुरक्षित ठेवले." },
        { keywords: ['woman', 'queen', 'ruler', 'doubt', 'question', 'स्त्री', 'रानी', 'शासक', 'संशय'],
          en: "Some questioned a woman ruling. But after seeing Ahilya judge cases in open court, manage state finances, and direct temple construction across India — those voices fell silent forever. She proved that wisdom has no gender.",
          hi: "कुछ ने एक स्त्री के शासन पर प्रश्न उठाए। लेकिन अहिल्या को खुली अदालत में न्याय करते, राजकोष संभालते और मंदिर निर्माण का निर्देशन करते देखने के बाद — वे आवाज़ें हमेशा के लिए शांत हो गईं।",
          mr: "काहींनी स्त्रीच्या शासनावर प्रश्न उपस्थित केले. पण अहिल्याला खुल्या दरबारात न्याय करताना पाहिल्यानंतर — ते आवाज कायमचे शांत झाले." }
      ],
      priest: [
        { keywords: ['temple', 'kashi', 'vishwanath', 'rebuild', 'destroy', 'aurangzeb', 'मंदिर', 'काशी', 'विश्वनाथ', 'पुनर्निर्माण'],
          en: "When Aurangzeb destroyed our sacred Kashi Vishwanath Temple in 1669, we thought Kashi had lost its light forever. For over a century we prayed. Then word came from distant Indore — Queen Ahilya Bai would rebuild it. She sent gold, architects, and master artisans. The temple that rose was more magnificent than any before.",
          hi: "जब 1669 में औरंगज़ेब ने काशी विश्वनाथ मंदिर को नष्ट किया, हमने सोचा काशी ने अपना प्रकाश सदा के लिए खो दिया। एक शताब्दी से अधिक हमने प्रार्थना की। फिर दूर इंदौर से संदेश आया — रानी अहिल्या बाई इसे पुनर्निर्मित करेंगी।",
          mr: "1669 मध्ये औरंगजेबाने काशी विश्वनाथ मंदिर नष्ट केल्यावर, आम्हाला वाटले काशीने आपला प्रकाश कायमचा गमावला. एका शतकापेक्षा जास्त काळ आम्ही प्रार्थना केली. मग दूर इंदौरहून निरोप आला — राणी अहिल्या बाई ते पुनर्निर्माण करतील." }
      ],
      boatman: [
        { keywords: ['ghat', 'river', 'narmada', 'maheshwar', 'boat', 'घाट', 'नदी', 'नर्मदा', 'महेश्वर', 'नाव'],
          en: "Every morning I row past the ghats of Maheshwar, and every stone tells the story of our queen. She built these ghats with her own treasury, for all people, not just the wealthy. Even a simple boatman like me could walk up those steps and speak to the queen herself.",
          hi: "हर सुबह मैं महेश्वर के घाटों से गुज़रता हूँ, और हर पत्थर हमारी रानी की कहानी कहता है। उन्होंने ये घाट अपने खज़ाने से बनवाए, सभी लोगों के लिए। मेरे जैसा साधारण नाविक भी उन सीढ़ियों पर चढ़कर रानी से बात कर सकता था।",
          mr: "दररोज सकाळी मी माहेश्वरच्या घाटांवरून जातो, आणि प्रत्येक दगड आमच्या राणीची कथा सांगतो. तिने हे घाट स्वतःच्या खजिन्यातून बांधले, सर्व लोकांसाठी." }
      ],
      weaver: [
        { keywords: ['sari', 'saree', 'pattern', 'weave', 'bugdi', 'chatai', 'silk', 'cotton', 'साड़ी', 'साडी', 'नमुना', 'बुगदी', 'चटाई'],
          en: "Each Maheshwari sari carries a story. The Bugdi pattern represents the turning of time — its circular motifs show that all things come full circle. The Chatai pattern represents the woven lives of our people, intertwined like threads on my loom. Ahilya Bai understood the soul in each thread.",
          hi: "हर महेश्वरी साड़ी एक कहानी कहती है। बुगदी पैटर्न समय के चक्र का प्रतीक है। चटाई पैटर्न हमारे लोगों के बुने हुए जीवन का प्रतीक है। अहिल्या बाई हर धागे की आत्मा समझती थीं।",
          mr: "प्रत्येक माहेश्वरी साडी एक कथा सांगते. बुगडी नमुना काळाच्या फेऱ्याचे प्रतीक आहे. चटई नमुना आमच्या लोकांच्या विणलेल्या जीवनाचे प्रतीक आहे." }
      ],
      diwan: [
        { keywords: ['money', 'treasury', 'finance', 'tax', 'revenue', 'budget', 'cost', 'spend', 'पैसा', 'खज़ाना', 'कर', 'राजस्व', 'बजट'],
          en: "As Diwan, I managed the treasury. But Ahilya Bai knew every figure better than I did. She could tell you the cost of building a well in Gokarn as easily as the revenue from Malwa's cotton trade. Despite her vast charitable works across India, the treasury remained healthy through disciplined budgeting.",
          hi: "दीवान के रूप में मैं खज़ाने का प्रबंधन करता था। लेकिन अहिल्या बाई मुझसे बेहतर हर आंकड़ा जानती थीं। वे गोकर्ण में कुआँ बनाने की लागत उतनी सहजता से बता सकती थीं जितनी मालवा के कपास व्यापार की आय।",
          mr: "दिवाण म्हणून मी खजिना सांभाळत असे. पण अहिल्या बाईंना माझ्यापेक्षा प्रत्येक आकडा चांगला माहीत होता. त्या गोकर्णमध्ये विहीर बांधण्याचा खर्च माळव्याच्या कापूस व्यापाराच्या उत्पन्नाइतक्या सहज सांगू शकत." }
      ]
    };

    // Try to find a matching topic
    var personaTopics = topicResponses[personaId] || [];
    for (var i = 0; i < personaTopics.length; i++) {
      var topic = personaTopics[i];
      for (var k = 0; k < topic.keywords.length; k++) {
        if (q.indexOf(topic.keywords[k]) !== -1) {
          return topic[lang] || topic.en;
        }
      }
    }

    // Default: return a contextually relevant pre-written dialogue
    var idx = Math.floor(Math.random() * persona.dialogues.length);
    return persona.dialogues[idx].text[lang] || persona.dialogues[idx].text.en;
  }
};


/* ============================================
   TTS Engine — Free AI Voice (Hugging Face) + ElevenLabs Premium + Browser Fallback
   Three tiers:
     1. ElevenLabs (premium, needs API key)
     2. Hugging Face Inference API (free, no key needed, natural AI voices)
     3. Browser SpeechSynthesis (fallback)
   ============================================ */

var ttsEngine = {
  apiKey: Storage.get('elevenlabs_key', ''),
  modelId: 'eleven_multilingual_v2',
  currentAudio: null,
  audioContext: null,
  analyser: null,
  // Voice mode: 'auto' (best available), 'elevenlabs', 'huggingface', 'browser'
  voiceMode: Storage.get('voice_mode', 'auto'),
  hfToken: Storage.get('hf_token', ''),

  // Hugging Face model config per language — free, no API key required
  hfModels: {
    en: 'facebook/mms-tts-eng',
    hi: 'facebook/mms-tts-hin',
    mr: 'facebook/mms-tts-mar'
  },

  isElevenLabsEnabled: function () {
    return this.apiKey && this.apiKey.length > 20;
  },

  // Legacy alias
  isAIEnabled: function () {
    return this.isElevenLabsEnabled() || this.voiceMode === 'huggingface' || this.voiceMode === 'auto';
  },

  setApiKey: function (key) {
    this.apiKey = key;
    Storage.set('elevenlabs_key', key);
  },

  setVoiceMode: function (mode) {
    this.voiceMode = mode;
    Storage.set('voice_mode', mode);
  },

  setHfToken: function (token) {
    this.hfToken = token;
    Storage.set('hf_token', token);
  },

  stop: function () {
    // Stop audio playback
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    // Stop browser TTS
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    updateSpeakingUI(false);
  },

  // Main speak method — routes based on voice mode
  speak: function (text, lang, persona, onStart, onEnd) {
    this.stop();

    var mode = this.voiceMode;

    if (mode === 'elevenlabs' && this.isElevenLabsEnabled()) {
      this.speakWithElevenLabs(text, lang, persona, onStart, onEnd);
    } else if (mode === 'browser') {
      this.speakWithBrowser(text, lang, persona, onStart, onEnd);
    } else if (mode === 'huggingface') {
      this.speakWithHuggingFace(text, lang, persona, onStart, onEnd);
    } else {
      // Auto mode: ElevenLabs > Hugging Face > Browser
      if (this.isElevenLabsEnabled()) {
        this.speakWithElevenLabs(text, lang, persona, onStart, onEnd);
      } else {
        this.speakWithHuggingFace(text, lang, persona, onStart, onEnd);
      }
    }
  },

  // ─── ElevenLabs AI TTS (Premium) ───
  speakWithElevenLabs: function (text, lang, persona, onStart, onEnd) {
    var self = this;
    var voiceId = persona.voiceConfig.elevenLabsVoiceId;

    var voiceSettings = {
      stability: 0.65,
      similarity_boost: 0.8,
      style: 0.45,
      use_speaker_boost: true
    };

    if (onStart) onStart();

    fetch('https://api.elevenlabs.io/v1/text-to-speech/' + voiceId + '/stream', {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': self.apiKey
      },
      body: JSON.stringify({
        text: text,
        model_id: self.modelId,
        voice_settings: voiceSettings
      })
    })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('ElevenLabs API error: ' + response.status);
      }
      return response.blob();
    })
    .then(function (blob) {
      self.playAudioBlob(blob, onEnd);
    })
    .catch(function (err) {
      console.warn('ElevenLabs TTS failed, falling back to free AI voice:', err.message);
      self.speakWithHuggingFace(text, lang, persona, null, onEnd);
    });
  },

  // ─── Hugging Face Free AI TTS ───
  speakWithHuggingFace: function (text, lang, persona, onStart, onEnd) {
    var self = this;
    var modelId = self.hfModels[lang] || self.hfModels.en;

    if (onStart) onStart();

    var headers = {
      'Content-Type': 'application/json'
    };

    // Optional: use HF token for higher rate limits (but works without it)
    if (self.hfToken) {
      headers['Authorization'] = 'Bearer ' + self.hfToken;
    }

    fetch('https://api-inference.huggingface.co/models/' + modelId, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ inputs: text })
    })
    .then(function (response) {
      if (response.status === 503) {
        // Model is loading — wait and retry once
        return response.json().then(function (data) {
          var waitTime = Math.min((data.estimated_time || 10) * 1000, 30000);
          return new Promise(function (resolve) {
            setTimeout(function () {
              fetch('https://api-inference.huggingface.co/models/' + modelId, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ inputs: text })
              }).then(resolve);
            }, waitTime);
          });
        });
      }
      if (!response.ok) {
        throw new Error('HuggingFace API error: ' + response.status);
      }
      return response;
    })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('HuggingFace API error after retry: ' + response.status);
      }
      return response.blob();
    })
    .then(function (blob) {
      self.playAudioBlob(blob, onEnd);
    })
    .catch(function (err) {
      console.warn('HuggingFace TTS failed, falling back to browser:', err.message);
      self.speakWithBrowser(text, lang, persona, null, onEnd);
    });
  },

  // ─── Shared audio playback for AI TTS ───
  playAudioBlob: function (blob, onEnd) {
    var self = this;
    var audioUrl = URL.createObjectURL(blob);
    var audio = new Audio(audioUrl);
    self.currentAudio = audio;

    // Connect to analyser for waveform visualization
    self.connectAnalyser(audio);

    audio.onended = function () {
      URL.revokeObjectURL(audioUrl);
      self.currentAudio = null;
      isSpeaking = false;
      if (onEnd) onEnd();
    };

    audio.onerror = function () {
      URL.revokeObjectURL(audioUrl);
      self.currentAudio = null;
      isSpeaking = false;
      if (onEnd) onEnd();
    };

    audio.play().catch(function () {
      URL.revokeObjectURL(audioUrl);
      self.currentAudio = null;
      isSpeaking = false;
      if (onEnd) onEnd();
    });
    isSpeaking = true;
  },

  // ─── Enhanced Browser TTS ───
  speakWithBrowser: function (text, lang, persona, onStart, onEnd) {
    if (!('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    var vc = persona.voiceConfig.browserVoice;
    var langMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
    var targetLang = langMap[lang] || 'en-IN';

    // Break text into sentences for more natural delivery
    var sentences = text.match(/[^.!?।]+[.!?।]+/g) || [text];
    var sentenceIndex = 0;

    function speakNext() {
      if (sentenceIndex >= sentences.length) {
        isSpeaking = false;
        if (onEnd) onEnd();
        return;
      }

      var sentence = sentences[sentenceIndex].trim();
      if (!sentence) {
        sentenceIndex++;
        speakNext();
        return;
      }

      var utterance = new SpeechSynthesisUtterance(sentence);
      utterance.lang = targetLang;

      // Natural prosody — vary rate and pitch per sentence
      var rateVariation = (Math.random() * 0.06) - 0.03;
      var pitchVariation = (Math.random() * 0.08) - 0.04;
      utterance.rate = Math.max(0.7, Math.min(1.1, vc.rate + rateVariation));
      utterance.pitch = Math.max(0.6, Math.min(1.4, vc.pitch + pitchVariation));
      utterance.volume = 1;

      // Find the best available voice
      var voices = window.speechSynthesis.getVoices();
      var bestVoice = findBestVoice(voices, targetLang, vc.gender);
      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      utterance.onstart = function () {
        if (sentenceIndex === 0 && onStart) onStart();
        isSpeaking = true;
      };

      utterance.onend = function () {
        sentenceIndex++;
        // Natural pause between sentences (200-500ms)
        var pause = 200 + Math.random() * 300;
        setTimeout(speakNext, pause);
      };

      utterance.onerror = function () {
        sentenceIndex++;
        speakNext();
      };

      window.speechSynthesis.speak(utterance);
    }

    speakNext();
  },

  // ─── Audio Analyser for Waveform ───
  connectAnalyser: function (audio) {
    try {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 64;

      var source = this.audioContext.createMediaElementSource(audio);
      source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
    } catch (e) {
      // AudioContext may fail in some browsers — non-critical
    }
  }
};

// Find the most natural sounding voice for a language
function findBestVoice(voices, lang, gender) {
  if (!voices.length) return null;

  // Preferred natural-sounding voice names (Google/Microsoft premium voices)
  var premiumKeywords = ['Google', 'Microsoft', 'Natural', 'Neural', 'Enhanced', 'Premium', 'Online'];
  var roboticKeywords = ['eSpeak', 'MBROLA'];

  // Filter by language
  var langVoices = voices.filter(function (v) {
    return v.lang === lang || v.lang.startsWith(lang.split('-')[0]);
  });

  if (!langVoices.length) {
    // Fallback: try just the language prefix
    var prefix = lang.split('-')[0];
    langVoices = voices.filter(function (v) {
      return v.lang.startsWith(prefix);
    });
  }

  if (!langVoices.length) return null;

  // Score each voice
  var scored = langVoices.map(function (voice) {
    var score = 0;

    // Prefer premium/natural voices
    premiumKeywords.forEach(function (kw) {
      if (voice.name.indexOf(kw) !== -1) score += 10;
    });

    // Penalize robotic voices
    roboticKeywords.forEach(function (kw) {
      if (voice.name.indexOf(kw) !== -1) score -= 20;
    });

    // Prefer non-local (network) voices — they're usually better
    if (!voice.localService) score += 5;

    // Gender matching via name heuristics
    var femaleNames = ['female', 'woman', 'zira', 'hazel', 'susan', 'heera', 'kalpana', 'priya', 'aditi'];
    var maleNames = ['male', 'man', 'david', 'mark', 'ravi', 'hemant', 'madhur'];
    var nameLower = voice.name.toLowerCase();

    if (gender === 'female') {
      femaleNames.forEach(function (n) { if (nameLower.indexOf(n) !== -1) score += 3; });
    } else {
      maleNames.forEach(function (n) { if (nameLower.indexOf(n) !== -1) score += 3; });
    }

    return { voice: voice, score: score };
  });

  scored.sort(function (a, b) { return b.score - a.score; });
  return scored[0].voice;
}


/* ============================================
   Court UI — Cards, Speech, Waveform
   ============================================ */

// State
var activeCardId = null;
var dialogueIndices = {};
var isSpeaking = false;

function initCourt() {
  var grid = document.getElementById('court-grid');
  if (!grid) return;

  // Initialize dialogue counters
  courtPersonas.forEach(function (p) {
    dialogueIndices[p.id] = 0;
  });

  renderCourtCards();

  EventBus.on('lang:changed', function () {
    renderCourtCards();
  });
}

function renderCourtCards() {
  var grid = document.getElementById('court-grid');
  var lang = currentLang || 'en';

  grid.innerHTML = courtPersonas.map(function (persona) {
    var progressDots = persona.dialogues.map(function (_, i) {
      return '<span class="court-card__progress-dot" data-index="' + i + '"></span>';
    }).join('');

    var name = persona.name[lang] || persona.name.en;
    var title = persona.title[lang] || persona.title.en;

    return '<div class="court-card" data-persona="' + persona.id + '">' +
      '<div class="court-card__avatar" style="background: linear-gradient(135deg, ' + persona.avatar.color + ', ' + persona.avatar.color + '99)">' +
        persona.avatar.initials +
      '</div>' +
      '<h4 class="court-card__name">' + name + '</h4>' +
      '<p class="court-card__title">' + title + '</p>' +
      '<p class="court-card__era">' + persona.era + '</p>' +
      '<div class="court-card__buttons">' +
        '<button class="court-card__speak-btn">' + t('court.speak') + '</button>' +
        '<button class="court-card__talk-btn" data-persona="' + persona.id + '">' + t('court.talk') + '</button>' +
      '</div>' +
      '<div class="court-card__speech" id="speech-' + persona.id + '">' +
        '<div class="court-card__waveform" id="waveform-' + persona.id + '"></div>' +
        '<span class="court-card__speech-text" id="speech-text-' + persona.id + '"></span>' +
        '<span class="court-card__speech-cursor"></span>' +
        '<span class="court-card__speech-source" id="speech-source-' + persona.id + '"></span>' +
      '</div>' +
      '<div class="court-card__conversation" id="conversation-' + persona.id + '">' +
        '<div class="conversation__messages" id="conv-messages-' + persona.id + '"></div>' +
        '<div class="conversation__status" id="conv-status-' + persona.id + '"></div>' +
        '<div class="court-card__waveform" id="conv-waveform-' + persona.id + '"></div>' +
      '</div>' +
      '<div class="court-card__progress" id="progress-' + persona.id + '" style="display:none">' +
        progressDots +
      '</div>' +
    '</div>';
  }).join('');

  // Voice settings button
  var settingsExists = document.getElementById('voice-settings-btn');
  if (!settingsExists) {
    var settingsBtn = document.createElement('div');
    settingsBtn.className = 'voice-settings-trigger';
    settingsBtn.innerHTML = '<button class="voice-settings-btn" id="voice-settings-btn">' +
      getVoiceButtonLabel() +
      '</button>';
    var section = document.querySelector('.court .section-title');
    if (section) section.appendChild(settingsBtn);
  }

  // Event delegation
  grid.addEventListener('click', function (e) {
    var speakBtn = e.target.closest('.court-card__speak-btn');
    var talkBtn = e.target.closest('.court-card__talk-btn');
    var card = e.target.closest('.court-card');
    if (!card) return;
    var personaId = card.dataset.persona;

    if (speakBtn) {
      // Stop any active conversation first
      if (conversationEngine.isActive) conversationEngine.stop();
      handleSpeak(personaId, false);
    } else if (talkBtn) {
      // Start/stop real-time conversation
      ttsEngine.stop();
      conversationEngine.start(personaId);
    }
  });

  // Voice settings click
  document.addEventListener('click', function (e) {
    if (e.target.closest('#voice-settings-btn')) {
      openVoiceSettings();
    }
  });
}

function handleSpeak(personaId, withTTS) {
  var persona = courtPersonas.find(function (p) { return p.id === personaId; });
  if (!persona) return;

  var lang = currentLang || 'en';

  var allCards = document.querySelectorAll('.court-card');
  var speech = document.getElementById('speech-' + personaId);
  var textEl = document.getElementById('speech-text-' + personaId);
  var sourceEl = document.getElementById('speech-source-' + personaId);
  var progressEl = document.getElementById('progress-' + personaId);

  // Set active/dimmed
  activeCardId = personaId;
  allCards.forEach(function (c) {
    if (c.dataset.persona === personaId) {
      c.classList.add('court-card--active');
      c.classList.remove('court-card--dimmed');
    } else {
      c.classList.remove('court-card--active');
      c.classList.add('court-card--dimmed');
    }
  });

  // Get dialogue
  var idx = dialogueIndices[personaId];
  var dialogue = persona.dialogues[idx];
  var dialogueText = dialogue.text[lang] || dialogue.text.en;
  var sourceText = dialogue.source[lang] || dialogue.source.en;

  // Show speech bubble
  speech.classList.add('court-card__speech--visible');
  progressEl.style.display = 'flex';

  // Stop any current audio
  ttsEngine.stop();

  // Typewriter effect
  typeWriter(textEl, dialogueText, function () {
    sourceEl.textContent = '— ' + sourceText;

    if (withTTS) {
      ttsEngine.speak(dialogueText, lang, persona,
        function () {
          // onStart
          updateSpeakingUI(true, personaId);
          startWaveformAnimation(personaId);
        },
        function () {
          // onEnd
          updateSpeakingUI(false);
          stopWaveformAnimation(personaId);
        }
      );
    }
  });

  // Update progress dots
  var dots = progressEl.querySelectorAll('.court-card__progress-dot');
  dots.forEach(function (dot, i) {
    dot.classList.toggle('court-card__progress-dot--active', i <= idx);
  });

  dialogueIndices[personaId] = (idx + 1) % persona.dialogues.length;
  EventBus.emit('badge:increment', { badge: 'darbarListener' });
}

function updateSpeakingUI(speaking, personaId) {
  // Legacy: no longer uses listen button, but keep function for speech playback state
}

/* ============================================
   Conversation UI Helpers
   ============================================ */

function showConversationUI(personaId) {
  // Hide any speech bubble
  var speech = document.getElementById('speech-' + personaId);
  if (speech) speech.classList.remove('court-card__speech--visible');

  // Set active/dimmed
  var allCards = document.querySelectorAll('.court-card');
  allCards.forEach(function (c) {
    if (c.dataset.persona === personaId) {
      c.classList.add('court-card--active', 'court-card--talking');
      c.classList.remove('court-card--dimmed');
    } else {
      c.classList.remove('court-card--active', 'court-card--talking');
      c.classList.add('court-card--dimmed');
    }
  });

  // Show conversation container
  var conv = document.getElementById('conversation-' + personaId);
  if (conv) conv.classList.add('court-card__conversation--active');

  // Update talk button to stop state
  updateTalkButtonState(personaId, 'active');
}

function hideConversationUI() {
  // Reset all cards
  document.querySelectorAll('.court-card').forEach(function (c) {
    c.classList.remove('court-card--dimmed', 'court-card--active', 'court-card--talking');
  });

  // Hide all conversation containers
  document.querySelectorAll('.court-card__conversation--active').forEach(function (el) {
    el.classList.remove('court-card__conversation--active');
  });

  // Reset all talk buttons
  document.querySelectorAll('.court-card__talk-btn').forEach(function (btn) {
    btn.textContent = t('court.talk');
    btn.classList.remove('court-card__talk-btn--active', 'court-card__talk-btn--listening', 'court-card__talk-btn--thinking', 'court-card__talk-btn--speaking');
  });
}

function updateTalkButtonState(personaId, state) {
  var btn = document.querySelector('.court-card__talk-btn[data-persona="' + personaId + '"]');
  if (!btn) return;

  btn.classList.remove('court-card__talk-btn--active', 'court-card__talk-btn--listening', 'court-card__talk-btn--thinking', 'court-card__talk-btn--speaking');

  if (state === 'active' || state === 'listening') {
    btn.classList.add('court-card__talk-btn--active', 'court-card__talk-btn--listening');
    btn.textContent = t('court.talk.listening');
  } else if (state === 'thinking') {
    btn.classList.add('court-card__talk-btn--active', 'court-card__talk-btn--thinking');
    btn.textContent = t('court.talk.thinking');
  } else if (state === 'speaking') {
    btn.classList.add('court-card__talk-btn--active', 'court-card__talk-btn--speaking');
    btn.textContent = t('court.talk.speaking');
  }
}

function updateConversationStatus(personaId, state) {
  var statusEl = document.getElementById('conv-status-' + personaId);
  if (!statusEl) return;

  if (state === 'listening') {
    statusEl.innerHTML = '<span class="conversation__status-dot conversation__status-dot--listening"></span>' + t('court.talk.listening');
    statusEl.className = 'conversation__status conversation__status--listening';
  } else if (state === 'thinking') {
    statusEl.innerHTML = '<span class="conversation__status-dot conversation__status-dot--thinking"></span>' + t('court.talk.thinking');
    statusEl.className = 'conversation__status conversation__status--thinking';
  } else if (state === 'speaking') {
    statusEl.innerHTML = '<span class="conversation__status-dot conversation__status-dot--speaking"></span>' + t('court.talk.speaking');
    statusEl.className = 'conversation__status conversation__status--speaking';
  } else {
    statusEl.innerHTML = '';
    statusEl.className = 'conversation__status';
  }
}

function showUserMessage(personaId, text, isInterim) {
  var messagesEl = document.getElementById('conv-messages-' + personaId);
  if (!messagesEl) return;

  // Find or create the current user message bubble
  var existing = messagesEl.querySelector('.conversation__msg--user-current');
  if (existing) {
    existing.querySelector('.conversation__msg-text').textContent = text;
    if (!isInterim) {
      existing.classList.remove('conversation__msg--user-current');
      existing.classList.add('conversation__msg--user-final');
    }
  } else {
    var msgEl = document.createElement('div');
    msgEl.className = 'conversation__msg conversation__msg--user' + (isInterim ? ' conversation__msg--user-current' : ' conversation__msg--user-final');
    msgEl.innerHTML = '<span class="conversation__msg-text">' + escapeHtml(text) + '</span>';
    messagesEl.appendChild(msgEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
}

function showAIMessage(personaId, text, persona) {
  var messagesEl = document.getElementById('conv-messages-' + personaId);
  if (!messagesEl) return;

  var lang = currentLang || 'en';
  var name = persona.name[lang] || persona.name.en;

  var msgEl = document.createElement('div');
  msgEl.className = 'conversation__msg conversation__msg--ai';
  msgEl.innerHTML =
    '<span class="conversation__msg-avatar" style="background: ' + persona.avatar.color + '">' + persona.avatar.initials + '</span>' +
    '<div class="conversation__msg-body">' +
      '<span class="conversation__msg-name">' + name + '</span>' +
      '<span class="conversation__msg-text">' + escapeHtml(text) + '</span>' +
    '</div>';
  messagesEl.appendChild(msgEl);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function showConversationNote(personaId, text) {
  var messagesEl = document.getElementById('conv-messages-' + personaId);
  if (!messagesEl) return;

  var noteEl = document.createElement('div');
  noteEl.className = 'conversation__note';
  noteEl.textContent = text;
  messagesEl.appendChild(noteEl);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Remove after a few seconds
  setTimeout(function () { noteEl.remove(); }, 5000);
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ─── Waveform Visualization ───
var waveformAnimationId = null;

function startWaveformAnimation(personaId) {
  var container = document.getElementById('waveform-' + personaId);
  if (!container) return;

  // Create bars if not present
  if (!container.children.length) {
    for (var i = 0; i < 24; i++) {
      var bar = document.createElement('span');
      bar.className = 'waveform-bar';
      container.appendChild(bar);
    }
  }

  container.classList.add('court-card__waveform--active');

  function animate() {
    var bars = container.querySelectorAll('.waveform-bar');

    if (ttsEngine.analyser) {
      // Real audio data from AI TTS
      var dataArray = new Uint8Array(ttsEngine.analyser.frequencyBinCount);
      ttsEngine.analyser.getByteFrequencyData(dataArray);
      bars.forEach(function (bar, i) {
        var value = dataArray[i] || 0;
        var height = Math.max(2, (value / 255) * 24);
        bar.style.height = height + 'px';
      });
    } else {
      // Simulated waveform for browser TTS
      bars.forEach(function (bar) {
        var h = 2 + Math.random() * 18;
        bar.style.height = h + 'px';
      });
    }

    if (isSpeaking) {
      waveformAnimationId = requestAnimationFrame(animate);
    }
  }

  animate();
}

function stopWaveformAnimation(personaId) {
  if (waveformAnimationId) {
    cancelAnimationFrame(waveformAnimationId);
    waveformAnimationId = null;
  }
  var container = document.getElementById('waveform-' + personaId);
  if (container) {
    container.classList.remove('court-card__waveform--active');
    container.querySelectorAll('.waveform-bar').forEach(function (bar) {
      bar.style.height = '2px';
    });
  }
}

// ─── Voice Settings Helper ───
function getVoiceButtonLabel() {
  var mode = ttsEngine.voiceMode;
  if (mode === 'elevenlabs' && ttsEngine.isElevenLabsEnabled()) {
    return '🟢 ElevenLabs Active';
  } else if (mode === 'huggingface' || (mode === 'auto' && !ttsEngine.isElevenLabsEnabled())) {
    return '🟢 Free AI Voice';
  } else if (mode === 'auto' && ttsEngine.isElevenLabsEnabled()) {
    return '🟢 ElevenLabs Active';
  } else if (mode === 'browser') {
    return '🔊 Browser Voice';
  }
  return '🟢 Free AI Voice';
}

function getVoiceStatusText() {
  var mode = ttsEngine.voiceMode;
  if (mode === 'elevenlabs' && ttsEngine.isElevenLabsEnabled()) {
    return { active: true, text: 'ElevenLabs Premium Active' };
  } else if (mode === 'browser') {
    return { active: false, text: 'Browser voices (basic quality)' };
  }
  return { active: true, text: 'Free AI Voice Active (Hugging Face)' };
}

// ─── Voice Settings Modal ───
function openVoiceSettings() {
  var existing = document.getElementById('voice-settings-modal');
  if (existing) existing.remove();

  var currentMode = ttsEngine.voiceMode;
  var currentKey = ttsEngine.apiKey || '';
  var currentHfToken = ttsEngine.hfToken || '';
  var currentGeminiKey = conversationEngine.geminiKey || '';
  var currentLlmMode = conversationEngine.llmMode || 'auto';
  var status = getVoiceStatusText();

  var modal = document.createElement('div');
  modal.className = 'voice-modal-overlay';
  modal.id = 'voice-settings-modal';
  modal.innerHTML =
    '<div class="voice-modal">' +
      '<div class="voice-modal__header">' +
        '<h3>Voice & AI Settings</h3>' +
        '<button class="voice-modal__close" id="voice-modal-close">&times;</button>' +
      '</div>' +
      '<div class="voice-modal__body">' +
        '<p class="voice-modal__desc">' +
          'Configure how personas <strong>speak</strong> (voice) and <strong>think</strong> (AI brain). The Talk feature lets you have real conversations with historical personas powered by AI.' +
        '</p>' +
        '<div class="voice-modal__status voice-modal__status--' + (status.active ? 'active' : 'inactive') + '">' +
          '<span class="voice-modal__status-dot"></span>' +
          status.text +
        '</div>' +

        // --- VOICE SECTION ---
        '<h4 class="voice-modal__section-title">🔊 Voice Engine (Text-to-Speech)</h4>' +

        '<div class="voice-modal__modes">' +
          '<label class="voice-modal__mode' + (currentMode === 'auto' || currentMode === 'huggingface' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="voice-mode" value="huggingface"' + (currentMode === 'auto' || currentMode === 'huggingface' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<span class="voice-modal__mode-badge voice-modal__mode-badge--free">FREE</span>' +
              '<strong>AI Voice (Hugging Face)</strong>' +
              '<span class="voice-modal__mode-desc">Natural neural voices — English, Hindi, Marathi. No API key required.</span>' +
            '</div>' +
          '</label>' +
          '<label class="voice-modal__mode' + (currentMode === 'elevenlabs' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="voice-mode" value="elevenlabs"' + (currentMode === 'elevenlabs' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<span class="voice-modal__mode-badge voice-modal__mode-badge--premium">PREMIUM</span>' +
              '<strong>ElevenLabs</strong>' +
              '<span class="voice-modal__mode-desc">Ultra-realistic voices with unique persona characters. Requires API key.</span>' +
            '</div>' +
          '</label>' +
          '<label class="voice-modal__mode' + (currentMode === 'browser' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="voice-mode" value="browser"' + (currentMode === 'browser' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<strong>Browser Built-in</strong>' +
              '<span class="voice-modal__mode-desc">Uses your device\'s built-in voices. Quality varies by browser/OS.</span>' +
            '</div>' +
          '</label>' +
        '</div>' +

        // ElevenLabs key field
        '<div class="voice-modal__field voice-modal__elevenlabs-field" id="elevenlabs-field" style="' + (currentMode === 'elevenlabs' ? '' : 'display:none') + '">' +
          '<label for="elevenlabs-key-input">ElevenLabs API Key</label>' +
          '<input type="password" id="elevenlabs-key-input" placeholder="Enter your ElevenLabs API key..." value="' + currentKey + '" autocomplete="off">' +
          '<p class="voice-modal__hint">' +
            'Get a free key at <strong>elevenlabs.io</strong> — 10,000 characters/month free tier.' +
          '</p>' +
        '</div>' +

        // Optional HF token field
        '<div class="voice-modal__field voice-modal__hf-field" id="hf-field" style="' + (currentMode === 'auto' || currentMode === 'huggingface' ? '' : 'display:none') + '">' +
          '<label for="hf-token-input">Hugging Face Token (Optional)</label>' +
          '<input type="password" id="hf-token-input" placeholder="Optional — for higher rate limits..." value="' + currentHfToken + '" autocomplete="off">' +
          '<p class="voice-modal__hint">' +
            'Works without a token. Add a free <strong>huggingface.co</strong> token for higher rate limits.' +
          '</p>' +
        '</div>' +

        // --- AI BRAIN SECTION ---
        '<h4 class="voice-modal__section-title">🧠 AI Brain (Conversation Intelligence)</h4>' +
        '<p class="voice-modal__desc">' +
          'Controls how personas understand and respond to your questions. <strong>Gemini</strong> (recommended) gives the most accurate, historically rich answers. Without an API key, personas use a built-in knowledge base.' +
        '</p>' +

        '<div class="voice-modal__modes">' +
          '<label class="voice-modal__mode' + (currentLlmMode === 'auto' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="llm-mode" value="auto"' + (currentLlmMode === 'auto' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<span class="voice-modal__mode-badge voice-modal__mode-badge--free">RECOMMENDED</span>' +
              '<strong>Auto (Best Available)</strong>' +
              '<span class="voice-modal__mode-desc">Tries Gemini first, then Hugging Face, then built-in knowledge. Best reliability.</span>' +
            '</div>' +
          '</label>' +
          '<label class="voice-modal__mode' + (currentLlmMode === 'gemini' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="llm-mode" value="gemini"' + (currentLlmMode === 'gemini' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<span class="voice-modal__mode-badge voice-modal__mode-badge--free">FREE</span>' +
              '<strong>Google Gemini</strong>' +
              '<span class="voice-modal__mode-desc">Powerful AI with deep historical knowledge. Free API key — 15 requests/minute.</span>' +
            '</div>' +
          '</label>' +
          '<label class="voice-modal__mode' + (currentLlmMode === 'huggingface' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="llm-mode" value="huggingface"' + (currentLlmMode === 'huggingface' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<strong>Hugging Face (Mistral)</strong>' +
              '<span class="voice-modal__mode-desc">Open-source AI model. Free but may be slow or rate-limited.</span>' +
            '</div>' +
          '</label>' +
          '<label class="voice-modal__mode' + (currentLlmMode === 'local' ? ' voice-modal__mode--selected' : '') + '">' +
            '<input type="radio" name="llm-mode" value="local"' + (currentLlmMode === 'local' ? ' checked' : '') + '>' +
            '<div class="voice-modal__mode-content">' +
              '<strong>Built-in Knowledge</strong>' +
              '<span class="voice-modal__mode-desc">Offline mode. Uses pre-written historically accurate responses. No API needed.</span>' +
            '</div>' +
          '</label>' +
        '</div>' +

        // Gemini API key field
        '<div class="voice-modal__field" id="gemini-field" style="' + (currentLlmMode === 'auto' || currentLlmMode === 'gemini' ? '' : 'display:none') + '">' +
          '<label for="gemini-key-input">Google Gemini API Key</label>' +
          '<input type="password" id="gemini-key-input" placeholder="Enter your Gemini API key..." value="' + currentGeminiKey + '" autocomplete="off">' +
          '<p class="voice-modal__hint">' +
            'Get a free key at <strong>aistudio.google.com/apikey</strong> — completely free, 15 requests/minute.' +
          '</p>' +
        '</div>' +

      '</div>' +
      '<div class="voice-modal__actions">' +
        '<button class="btn btn--gold" id="voice-save-btn">Save & Activate</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(modal);

  // Voice mode switching
  modal.querySelectorAll('input[name="voice-mode"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      var mode = this.value;
      var modeGroup = this.closest('.voice-modal__modes');
      modeGroup.querySelectorAll('.voice-modal__mode').forEach(function (m) {
        m.classList.remove('voice-modal__mode--selected');
      });
      this.closest('.voice-modal__mode').classList.add('voice-modal__mode--selected');

      document.getElementById('elevenlabs-field').style.display = mode === 'elevenlabs' ? '' : 'none';
      document.getElementById('hf-field').style.display = (mode === 'huggingface' || mode === 'auto') ? '' : 'none';
    });
  });

  // LLM mode switching
  modal.querySelectorAll('input[name="llm-mode"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      var mode = this.value;
      var modeGroup = this.closest('.voice-modal__modes');
      modeGroup.querySelectorAll('.voice-modal__mode').forEach(function (m) {
        m.classList.remove('voice-modal__mode--selected');
      });
      this.closest('.voice-modal__mode').classList.add('voice-modal__mode--selected');

      document.getElementById('gemini-field').style.display = (mode === 'auto' || mode === 'gemini') ? '' : 'none';
    });
  });

  // Close
  document.getElementById('voice-modal-close').addEventListener('click', function () {
    modal.classList.add('voice-modal-overlay--closing');
    setTimeout(function () { modal.remove(); }, 200);
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.add('voice-modal-overlay--closing');
      setTimeout(function () { modal.remove(); }, 200);
    }
  });

  // Save
  document.getElementById('voice-save-btn').addEventListener('click', function () {
    // Save voice settings
    var selectedVoiceMode = modal.querySelector('input[name="voice-mode"]:checked').value;
    ttsEngine.setVoiceMode(selectedVoiceMode);

    var elKey = document.getElementById('elevenlabs-key-input').value.trim();
    ttsEngine.setApiKey(elKey);

    var hfToken = document.getElementById('hf-token-input').value.trim();
    ttsEngine.setHfToken(hfToken);

    // Save LLM settings
    var selectedLlmMode = modal.querySelector('input[name="llm-mode"]:checked').value;
    conversationEngine.setLlmMode(selectedLlmMode);

    var geminiKey = document.getElementById('gemini-key-input').value.trim();
    conversationEngine.setGeminiKey(geminiKey);

    // Update the settings button
    var btn = document.getElementById('voice-settings-btn');
    if (btn) btn.innerHTML = getVoiceButtonLabel();

    modal.classList.add('voice-modal-overlay--closing');
    setTimeout(function () { modal.remove(); }, 200);

    // Show confirmation
    var voiceNames = { huggingface: 'Free AI Voice', elevenlabs: 'ElevenLabs Premium', browser: 'Browser Voice', auto: 'Auto (Best Available)' };
    var llmNames = { auto: 'Auto (Best Available)', gemini: 'Google Gemini', huggingface: 'Hugging Face Mistral', local: 'Built-in Knowledge' };
    showToast('🎙️', 'Settings Saved', 'Voice: ' + voiceNames[selectedVoiceMode] + ' | AI: ' + llmNames[selectedLlmMode]);
  });
}

function showToast(icon, title, text) {
  var container = document.getElementById('toast-container');
  if (!container) return;
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<span class="toast__icon">' + icon + '</span><span class="toast__text"><strong>' + title + '</strong>' + text + '</span>';
  container.appendChild(toast);
  setTimeout(function () {
    toast.classList.add('toast--exit');
    setTimeout(function () { toast.remove(); }, 300);
  }, 4000);
}

// Typewriter
var typewriterTimeout = null;
function typeWriter(el, text, onComplete) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  el.textContent = '';
  var i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      typewriterTimeout = setTimeout(tick, 18);
    } else {
      if (onComplete) onComplete();
    }
  }
  tick();
}

// Clear dimming on click outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.court-card') && !e.target.closest('.court-card__speak-btn') &&
      !e.target.closest('.court-card__talk-btn') && !e.target.closest('.voice-modal') &&
      !e.target.closest('#voice-settings-btn')) {
    document.querySelectorAll('.court-card').forEach(function (c) {
      c.classList.remove('court-card--dimmed', 'court-card--active', 'court-card--talking');
    });
    ttsEngine.stop();
    if (conversationEngine.isActive) conversationEngine.stop();
  }
});

// Load voices on init
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function () {
    window.speechSynthesis.getVoices();
  };
}
