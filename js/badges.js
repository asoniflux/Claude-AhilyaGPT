/* ============================================
   Collector Badges System
   ============================================ */

var BADGES_KEY = 'ahilya_badges';

var badgeDefinitions = [
  {
    id: 'kashiExplorer',
    name: 'Kashi Explorer',
    description: 'View 5 map locations',
    icon: '🛕',
    threshold: 5
  },
  {
    id: 'darbarListener',
    name: 'Darbar Listener',
    description: 'Hear 3 court dialogues',
    icon: '💬',
    threshold: 3
  },
  {
    id: 'royalArtist',
    name: 'Royal Artist',
    description: 'Generate 3 studio creations',
    icon: '🎨',
    threshold: 3
  },
  {
    id: 'stateAmbassador',
    name: 'State Ambassador',
    description: 'View 3 state dashboards',
    icon: '🗺️',
    threshold: 3
  },
  {
    id: 'deepakBearer',
    name: 'Deepak Bearer',
    description: 'Light 5 deepaks',
    icon: '🪔',
    threshold: 5
  },
  {
    id: 'lokMataDevotee',
    name: 'Lok Mata Devotee',
    description: 'Unlock all other badges',
    icon: '👑',
    threshold: 5 // 5 other badges
  }
];

var badgeState = {};

function initBadges() {
  // Load state
  badgeState = Storage.get(BADGES_KEY, {});

  // Initialize missing badges
  badgeDefinitions.forEach(function (badge) {
    if (!badgeState[badge.id]) {
      badgeState[badge.id] = { progress: 0, unlocked: false };
    }
  });

  // Listen for badge increments
  EventBus.on('badge:increment', function (data) {
    if (!data || !data.badge) return;
    incrementBadge(data.badge);
  });

  // Render badge panel
  renderBadgePanel();
  updateBadgeCounts();

  // Toggle badge panel
  document.getElementById('badge-toggle').addEventListener('click', openBadgePanel);
  document.getElementById('badge-toggle-mobile').addEventListener('click', openBadgePanel);
  document.getElementById('badge-close').addEventListener('click', closeBadgePanel);
  document.getElementById('badge-overlay').addEventListener('click', closeBadgePanel);
}

function incrementBadge(badgeId) {
  var state = badgeState[badgeId];
  if (!state || state.unlocked) return;

  state.progress += 1;

  var def = badgeDefinitions.find(function (b) { return b.id === badgeId; });
  if (!def) return;

  if (state.progress >= def.threshold && !state.unlocked) {
    state.unlocked = true;
    showBadgeToast(def);
    checkMetaBadge();
  }

  Storage.set(BADGES_KEY, badgeState);
  renderBadgePanel();
  updateBadgeCounts();
}

function checkMetaBadge() {
  var otherBadges = badgeDefinitions.filter(function (b) { return b.id !== 'lokMataDevotee'; });
  var allUnlocked = otherBadges.every(function (b) { return badgeState[b.id] && badgeState[b.id].unlocked; });

  if (allUnlocked && !badgeState.lokMataDevotee.unlocked) {
    badgeState.lokMataDevotee.progress = 5;
    badgeState.lokMataDevotee.unlocked = true;
    var def = badgeDefinitions.find(function (b) { return b.id === 'lokMataDevotee'; });
    showBadgeToast(def);
    Storage.set(BADGES_KEY, badgeState);
    renderBadgePanel();
    updateBadgeCounts();
  }
}

function renderBadgePanel() {
  var list = document.getElementById('badge-list');
  if (!list) return;

  var totalUnlocked = 0;

  list.innerHTML = badgeDefinitions.map(function (badge) {
    var state = badgeState[badge.id] || { progress: 0, unlocked: false };
    var isUnlocked = state.unlocked;
    if (isUnlocked) totalUnlocked++;

    var progressPercent = Math.min((state.progress / badge.threshold) * 100, 100);

    return '<div class="badge-item ' + (isUnlocked ? 'badge-item--unlocked' : 'badge-item--locked') + '">' +
      '<div class="badge-item__icon ' + (isUnlocked ? 'badge-item__icon--unlocked' : 'badge-item__icon--locked') + '">' +
        badge.icon +
        (!isUnlocked ? '<span class="badge-item__lock">🔒</span>' : '') +
      '</div>' +
      '<div class="badge-item__info">' +
        '<p class="badge-item__name">' + badge.name + '</p>' +
        '<p class="badge-item__desc">' + badge.description + '</p>' +
        (!isUnlocked ?
          '<div class="badge-item__progress-bar"><div class="badge-item__progress-fill" style="width:' + progressPercent + '%"></div></div>' :
          ''
        ) +
      '</div>' +
      (isUnlocked ? '<span class="badge-item__check">✓</span>' : '') +
    '</div>';
  }).join('');

  // Update progress
  document.getElementById('badges-unlocked').textContent = totalUnlocked;
  document.getElementById('badges-progress').style.width = ((totalUnlocked / badgeDefinitions.length) * 100) + '%';
}

function updateBadgeCounts() {
  var count = 0;
  badgeDefinitions.forEach(function (b) {
    if (badgeState[b.id] && badgeState[b.id].unlocked) count++;
  });
  document.getElementById('badge-count').textContent = count;
  document.getElementById('badge-count-mobile').textContent = count;
}

function openBadgePanel() {
  document.getElementById('badge-panel').classList.add('badge-panel--open');
  document.getElementById('badge-overlay').classList.add('badge-panel-overlay--open');
}

function closeBadgePanel() {
  document.getElementById('badge-panel').classList.remove('badge-panel--open');
  document.getElementById('badge-overlay').classList.remove('badge-panel-overlay--open');
}

function showBadgeToast(badge) {
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML =
    '<span class="toast__icon">' + badge.icon + '</span>' +
    '<span class="toast__text"><strong>Badge Unlocked!</strong>' + badge.name + '</span>';
  container.appendChild(toast);

  setTimeout(function () {
    toast.classList.add('toast--exit');
    setTimeout(function () { toast.remove(); }, 300);
  }, 4000);
}
