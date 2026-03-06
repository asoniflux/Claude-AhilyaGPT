/* ============================================
   AhilyaGPT - Court Personas with Text-to-Speech
   ============================================ */

const courtPersonas = [
  {
    id: 'ahilya',
    name: { en: 'Ahilya Bai Holkar', hi: 'अहिल्या बाई होलकर', mr: 'अहिल्या बाई होळकर' },
    title: { en: 'Lok Mata, Queen of Indore', hi: 'लोकमाता, इंदौर की रानी', mr: 'लोकमाता, इंदौरच्या राणी' },
    era: '1725–1795',
    avatar: { initials: 'AB', color: '#C5A355' },
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

// State
let activeCardId = null;
let dialogueIndices = {};
let currentSpeechUtterance = null;
var isSpeaking = false;

function initCourt() {
  const grid = document.getElementById('court-grid');
  if (!grid) return;

  // Initialize dialogue counters
  courtPersonas.forEach(function (p) {
    dialogueIndices[p.id] = 0;
  });

  renderCourtCards();

  // Listen for language changes
  EventBus.on('lang:changed', function () {
    renderCourtCards();
  });
}

function renderCourtCards() {
  const grid = document.getElementById('court-grid');
  var lang = currentLang || 'en';

  grid.innerHTML = courtPersonas.map(function (persona) {
    const progressDots = persona.dialogues.map(function (_, i) {
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
        '<button class="court-card__speak-btn" data-i18n-html="court.speak">' + t('court.speak') + '</button>' +
        '<button class="court-card__listen-btn" data-i18n-html="court.listen">' + t('court.listen') + '</button>' +
      '</div>' +
      '<div class="court-card__speech" id="speech-' + persona.id + '">' +
        '<span class="court-card__speech-text" id="speech-text-' + persona.id + '"></span>' +
        '<span class="court-card__speech-cursor"></span>' +
        '<span class="court-card__speech-source" id="speech-source-' + persona.id + '"></span>' +
      '</div>' +
      '<div class="court-card__progress" id="progress-' + persona.id + '" style="display:none">' +
        progressDots +
      '</div>' +
    '</div>';
  }).join('');

  // Add click handlers
  grid.addEventListener('click', function (e) {
    var speakBtn = e.target.closest('.court-card__speak-btn');
    var listenBtn = e.target.closest('.court-card__listen-btn');
    var card = e.target.closest('.court-card');
    if (!card) return;

    var personaId = card.dataset.persona;

    if (speakBtn) {
      handleSpeak(personaId);
    } else if (listenBtn) {
      handleSpeak(personaId, true);
    }
  });
}

function handleSpeak(personaId, withTTS) {
  const persona = courtPersonas.find(function (p) { return p.id === personaId; });
  if (!persona) return;

  var lang = currentLang || 'en';

  const allCards = document.querySelectorAll('.court-card');
  const speech = document.getElementById('speech-' + personaId);
  const textEl = document.getElementById('speech-text-' + personaId);
  const sourceEl = document.getElementById('speech-source-' + personaId);
  const progressEl = document.getElementById('progress-' + personaId);

  // Set active/dimmed states
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

  // Get current dialogue
  var idx = dialogueIndices[personaId];
  var dialogue = persona.dialogues[idx];
  var dialogueText = dialogue.text[lang] || dialogue.text.en;
  var sourceText = dialogue.source[lang] || dialogue.source.en;

  // Show speech bubble
  speech.classList.add('court-card__speech--visible');
  progressEl.style.display = 'flex';

  // Stop any ongoing TTS
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // Typewriter effect
  typeWriter(textEl, dialogueText, function () {
    sourceEl.textContent = '— ' + sourceText;

    // Text-to-speech if requested
    if (withTTS && 'speechSynthesis' in window) {
      speakText(dialogueText, lang);
    }
  });

  // Update progress dots
  var dots = progressEl.querySelectorAll('.court-card__progress-dot');
  dots.forEach(function (dot, i) {
    dot.classList.toggle('court-card__progress-dot--active', i <= idx);
  });

  // Advance index
  dialogueIndices[personaId] = (idx + 1) % persona.dialogues.length;

  // Track for badges
  EventBus.emit('badge:increment', { badge: 'darbarListener' });
}

function speakText(text, lang) {
  if (!('speechSynthesis' in window)) return;

  var utterance = new SpeechSynthesisUtterance(text);

  // Map language to speech synthesis lang code
  var langMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
  utterance.lang = langMap[lang] || 'en-IN';
  utterance.rate = 0.9;
  utterance.pitch = 1;

  // Try to find a matching voice
  var voices = window.speechSynthesis.getVoices();
  var preferredVoice = voices.find(function (v) {
    return v.lang === utterance.lang;
  });
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onstart = function () {
    isSpeaking = true;
    document.querySelectorAll('.court-card__listen-btn').forEach(function (btn) {
      var card = btn.closest('.court-card');
      if (card && card.dataset.persona === activeCardId) {
        btn.classList.add('court-card__listen-btn--speaking');
      }
    });
  };

  utterance.onend = function () {
    isSpeaking = false;
    document.querySelectorAll('.court-card__listen-btn--speaking').forEach(function (btn) {
      btn.classList.remove('court-card__listen-btn--speaking');
    });
  };

  window.speechSynthesis.speak(utterance);
}

var typewriterTimeout = null;
function typeWriter(el, text, onComplete) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  el.textContent = '';
  var i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      typewriterTimeout = setTimeout(tick, 20);
    } else {
      if (onComplete) onComplete();
    }
  }
  tick();
}

// Clear dimming on click outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.court-card') && !e.target.closest('.court-card__speak-btn') && !e.target.closest('.court-card__listen-btn')) {
    document.querySelectorAll('.court-card').forEach(function (c) {
      c.classList.remove('court-card--dimmed', 'court-card--active');
    });
    // Stop TTS if clicking outside
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
});

// Load voices (needed for some browsers)
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function () {
    window.speechSynthesis.getVoices();
  };
}
