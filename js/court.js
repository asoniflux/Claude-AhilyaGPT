/* ============================================
   AhilyaGPT - Court Personas
   ============================================ */

const courtPersonas = [
  {
    id: 'ahilya',
    name: 'Ahilya Bai Holkar',
    title: 'Lok Mata, Queen of Indore',
    era: '1725–1795',
    avatar: { initials: 'AB', color: '#C5A355' },
    dialogues: [
      { text: "A kingdom is not built by swords alone, but by dharamshalas at every crossroad and temples at every tirtha. True power lies in service to the people.", source: "On governance philosophy" },
      { text: "I rebuilt Kashi Vishwanath not for glory, but because the divine deserves a worthy abode, and the people deserve a place of solace.", source: "On the Varanasi temple, c. 1780" },
      { text: "Let no widow be turned away, let no pilgrim walk without shelter. The wealth of a kingdom belongs to its people, not to its throne.", source: "Royal decree on charitable works" },
      { text: "From Gangotri to Rameswaram, from Dwarka to Jagannath Puri — wherever there is a devotee in need, there shall be the hand of Indore.", source: "On pan-Indian philanthropy" },
      { text: "I sat on my father-in-law Malhar Rao's lap as a child, learning the art of war. But it was governing in peace that proved the greater challenge — and the greater reward.", source: "On her early education" }
    ]
  },
  {
    id: 'malhar',
    name: 'Malhar Rao Holkar',
    title: 'Commander & Father-in-law',
    era: '1693–1766',
    avatar: { initials: 'MR', color: '#8B2E3D' },
    dialogues: [
      { text: "When I first saw young Ahilya at the temple in Chondi, I knew she had the spirit of a ruler. I chose her as a bride for my son Khanderao, and history proved me right.", source: "On discovering Ahilya" },
      { text: "I taught her the ways of the battlefield and the court. But her wisdom in administration — that came from something greater than any teacher could give.", source: "On Ahilya's education" },
      { text: "After my son fell at the Battle of Kumher, I feared the kingdom would falter. But Ahilya's resolve was stronger than any army I had ever commanded.", source: "On Khanderao's death, 1754" },
      { text: "A good commander wins battles. A great ruler wins the hearts of the people. Ahilya was the latter — far greater than I ever was.", source: "On Ahilya's reign" }
    ]
  },
  {
    id: 'khanderao',
    name: 'Khanderao Holkar',
    title: 'Husband of Ahilya Bai',
    era: '1723–1754',
    avatar: { initials: 'KH', color: '#6B1D2A' },
    dialogues: [
      { text: "We were married as children, but Ahilya was never merely a bride. She rode alongside the army, understood strategy, and commanded respect even then.", source: "On their partnership" },
      { text: "I fell in the siege of Kumher, struck by a cannon. But I went knowing that Ahilya would carry the Holkar name to heights I could only dream of.", source: "On the Battle of Kumher, 1754" },
      { text: "My father chose well when he picked that young girl at the temple. She was destined for something far greater than any of us imagined.", source: "On their marriage" },
      { text: "In our brief years together, I saw in Ahilya a fire that could illuminate the entire kingdom. My only regret is that I could not witness her reign.", source: "On Ahilya's potential" }
    ]
  },
  {
    id: 'tukoji',
    name: 'Tukoji Rao Holkar',
    title: 'Military Commander',
    era: '1723–1797',
    avatar: { initials: 'TR', color: '#2A8B8B' },
    dialogues: [
      { text: "I served as the military arm of Ahilya Bai's kingdom. She directed where I fought, and together we kept Malwa safe from every threat.", source: "On the military arrangement" },
      { text: "Some questioned a woman ruling. But after seeing her judge cases in open court, manage state finances, and direct temple construction — those voices fell silent forever.", source: "On Ahilya's authority" },
      { text: "She once told me: 'Tukoji, the sword protects the body, but dharma protects the soul of a kingdom.' I never forgot those words.", source: "On Ahilya's philosophy" },
      { text: "While I campaigned across India, she built an empire of peace — dharamshalas, temples, wells. The soldiers fought, but Ahilya healed.", source: "On the division of duties" }
    ]
  },
  {
    id: 'priest',
    name: 'A Varanasi Priest',
    title: 'Witness to Kashi Vishwanath',
    era: 'c. 1780',
    avatar: { initials: 'VP', color: '#D4722A' },
    dialogues: [
      { text: "When the temple was destroyed, we thought Kashi had lost its light forever. Then word came from Indore — the Queen would rebuild it. We wept with joy.", source: "On the temple reconstruction, 1780" },
      { text: "She sent not just gold, but architects, artisans, and her own vision. The temple that rose was more magnificent than any that had stood before.", source: "On the construction" },
      { text: "Ahilya Bai also built the Dashashwamedh Ghat, where pilgrims now gather in thousands. She gave Varanasi back its soul.", source: "On the ghats of Varanasi" },
      { text: "I performed puja at the new temple on the day it was consecrated. The queen was not present — she said the glory belonged to Shiva, not to her.", source: "On Ahilya's humility" }
    ]
  },
  {
    id: 'boatman',
    name: 'A Narmada Boatman',
    title: 'Life on the Maheshwar Ghats',
    era: 'c. 1790',
    avatar: { initials: 'NB', color: '#4A7B3A' },
    dialogues: [
      { text: "Every morning I row past the ghats of Maheshwar, and every stone tells the story of our queen. She built these ghats with her own treasury, for all people, not just the wealthy.", source: "On the Maheshwar ghats" },
      { text: "Before her reign, Maheshwar was a small town. She made it the capital — built the fort, the temples, the weavers' quarters. Now it is the jewel of the Narmada.", source: "On Maheshwar's transformation" },
      { text: "The queen would sit at the ghat each evening, hearing the grievances of common people like me. No matter how small your problem, she listened.", source: "On Ahilya's accessibility" },
      { text: "She ensured that the Maheshwari weavers had patronage and protection. Their saris, with the gold and maroon threads, are famous across India because of her.", source: "On the textile tradition" }
    ]
  },
  {
    id: 'weaver',
    name: 'A Maheshwari Weaver',
    title: 'Master of the Loom',
    era: 'c. 1785',
    avatar: { initials: 'MW', color: '#5A1525' },
    dialogues: [
      { text: "The queen gave us the finest silk and cotton threads. She said: 'Your art is the pride of Maheshwar — it must be preserved for generations to come.'", source: "On royal patronage" },
      { text: "Each Maheshwari sari carries a story — the Bugdi pattern represents the turning of time, the Chatai the woven lives of our people. Ahilya Bai understood this.", source: "On sari patterns" },
      { text: "Under her rule, our weaving community grew from a handful of families to a thriving guild. She established training, provided looms, and found markets across India.", source: "On economic empowerment" },
      { text: "When nobles came from distant courts, the queen gifted them Maheshwari saris. It was her way of saying: 'This is the art of my people, and I am proud of it.'", source: "On cultural diplomacy" }
    ]
  },
  {
    id: 'diwan',
    name: 'Gangadhar Chandrachud',
    title: 'Diwan (Chief Minister)',
    era: 'c. 1770s',
    avatar: { initials: 'GC', color: '#3A5B8B' },
    dialogues: [
      { text: "As Diwan, I handled the treasury. But Ahilya Bai knew every figure. She could tell you the cost of building a well in Gokarn as easily as the revenue from Malwa's cotton trade.", source: "On financial acumen" },
      { text: "She maintained a court of justice where any citizen — Brahmin or farmer, merchant or widow — could present their case. Justice was never delayed, never denied.", source: "On the justice system" },
      { text: "The queen allocated funds for dharamshalas along every major pilgrimage route. Travelers from Haridwar to Rameswaram would find shelter built by the Holkar treasury.", source: "On charitable infrastructure" },
      { text: "What made her exceptional was not the scale of her charity — which was vast — but the precision. Every temple, every ghat, every well was planned, budgeted, and inspected.", source: "On administrative excellence" }
    ]
  }
];

// State
let activeCardId = null;
let dialogueIndices = {};

function initCourt() {
  const grid = document.getElementById('court-grid');
  if (!grid) return;

  // Initialize dialogue counters
  courtPersonas.forEach(function (p) {
    dialogueIndices[p.id] = 0;
  });

  // Render cards
  grid.innerHTML = courtPersonas.map(function (persona) {
    const progressDots = persona.dialogues.map(function (_, i) {
      return '<span class="court-card__progress-dot" data-index="' + i + '"></span>';
    }).join('');

    return '<div class="court-card" data-persona="' + persona.id + '">' +
      '<div class="court-card__avatar" style="background: linear-gradient(135deg, ' + persona.avatar.color + ', ' + persona.avatar.color + '99)">' +
        persona.avatar.initials +
      '</div>' +
      '<h4 class="court-card__name">' + persona.name + '</h4>' +
      '<p class="court-card__title">' + persona.title + '</p>' +
      '<p class="court-card__era">' + persona.era + '</p>' +
      '<button class="court-card__speak-btn">💬 Speak</button>' +
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
    const btn = e.target.closest('.court-card__speak-btn');
    const card = e.target.closest('.court-card');
    if (!btn || !card) return;

    const personaId = card.dataset.persona;
    handleSpeak(personaId);
  });
}

function handleSpeak(personaId) {
  const persona = courtPersonas.find(function (p) { return p.id === personaId; });
  if (!persona) return;

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

  // Show speech bubble
  speech.classList.add('court-card__speech--visible');
  progressEl.style.display = 'flex';

  // Typewriter effect
  typeWriter(textEl, dialogue.text, function () {
    sourceEl.textContent = '— ' + dialogue.source;
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
  if (!e.target.closest('.court-card') && !e.target.closest('.court-card__speak-btn')) {
    document.querySelectorAll('.court-card').forEach(function (c) {
      c.classList.remove('court-card--dimmed', 'court-card--active');
    });
  }
});
