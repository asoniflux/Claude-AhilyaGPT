/* ============================================
   AI Media Creation Studio
   ============================================ */

var studioGenCount = 0;
var galleryItems = [];

// CSS gradient art generators
var artStyles = {
  scene: [
    { cls: 'studio__gallery-art--fort', label: 'Maheshwar Fort at Dusk' },
    { cls: 'studio__gallery-art--narmada', label: 'Narmada Ghats, Golden Hour' },
    { cls: 'studio__gallery-art--temple', label: 'Kashi Vishwanath at Dawn' },
    { cls: 'studio__gallery-art--court', label: 'The Holkar Darbar' },
    { cls: 'studio__gallery-art--fort', label: 'Battlefield in Moonlight' }
  ],
  portrait: [
    { cls: 'studio__gallery-art--portrait', label: 'Regal Oil Portrait' },
    { cls: 'studio__gallery-art--court', label: 'Miniature Art Style' },
    { cls: 'studio__gallery-art--fort', label: 'Contemplative Watercolor' },
    { cls: 'studio__gallery-art--portrait', label: 'Commanding Digital Art' }
  ],
  sari: [
    { cls: 'studio__gallery-art--sari', label: 'Traditional Bugdi Weave' },
    { cls: 'studio__gallery-art--sari', label: 'Chatai Pattern' },
    { cls: 'studio__gallery-art--sari', label: 'Chameli Design' },
    { cls: 'studio__gallery-art--sari', label: 'Nandana Pattern' }
  ]
};

// Dynamic gradients based on selections
var moodGradients = {
  majestic: ['#1a0a2e', '#4A0E1C', '#C5A355', '#E8D5A3'],
  serene: ['#1a3a4a', '#2A8B8B', '#87CEEB', '#E8D5A3'],
  dramatic: ['#0a0a0a', '#4A0E1C', '#8B2E3D', '#D4722A'],
  golden: ['#3a2a0a', '#8B7332', '#C5A355', '#F0A050'],
  moonlit: ['#0a0a2e', '#1a1a4e', '#3a3a8e', '#C5A355']
};

var locationIcons = {
  maheshwar: '🏰', narmada: '🌊', kashi: '🛕', court: '👑', battlefield: '⚔️'
};

function initStudio() {
  // Tab switching
  document.getElementById('studio-tabs').addEventListener('click', function (e) {
    var tab = e.target.closest('.tab');
    if (!tab) return;
    var tabId = tab.dataset.tab;

    // Update active tab
    document.querySelectorAll('#studio-tabs .tab').forEach(function (t) {
      t.classList.remove('tab--active');
    });
    tab.classList.add('tab--active');

    // Show panel
    document.querySelectorAll('.studio__tab-panel').forEach(function (p) {
      p.classList.remove('studio__tab-panel--active');
    });
    document.getElementById('tab-' + tabId).classList.add('studio__tab-panel--active');
  });

  // Generate buttons
  document.querySelectorAll('.studio__generate-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var type = this.dataset.generate;
      generateArt(type);
    });
  });
}

function generateArt(type) {
  var grid = document.getElementById('gallery-grid');

  // Remove empty state
  var empty = grid.querySelector('.studio__empty');
  if (empty) empty.remove();

  // Show loading
  var loadingEl = document.createElement('div');
  loadingEl.className = 'studio__loading';
  loadingEl.innerHTML = '<div class="studio__loading-spinner"></div><p class="studio__loading-text">Creating your masterpiece...</p>';
  grid.insertBefore(loadingEl, grid.firstChild);

  // Build dynamic gradient based on selection
  var gradient = buildGradient(type);

  setTimeout(function () {
    loadingEl.remove();

    var art = artStyles[type];
    var picked = art[studioGenCount % art.length];

    var item = document.createElement('div');
    item.className = 'studio__gallery-item';
    item.innerHTML =
      '<div class="studio__gallery-art" style="' + gradient + '">' +
        '<span class="studio__gallery-label">' + picked.label + '</span>' +
      '</div>';

    grid.insertBefore(item, grid.firstChild);
    galleryItems.push(picked);
    studioGenCount++;

    // Badge
    EventBus.emit('badge:increment', { badge: 'royalArtist' });
  }, 2000);
}

function buildGradient(type) {
  if (type === 'scene') {
    var mood = document.getElementById('scene-mood').value;
    var colors = moodGradients[mood] || moodGradients.majestic;
    return 'background: linear-gradient(180deg, ' + colors[0] + ' 0%, ' + colors[1] + ' 35%, ' + colors[2] + ' 65%, ' + colors[3] + ' 100%);';
  } else if (type === 'portrait') {
    var style = document.getElementById('portrait-style').value;
    var styleColors = {
      oil: ['#2C2420', '#4A0E1C', '#C5A355', '#E8D5A3'],
      miniature: ['#1a3a2a', '#2A6B4B', '#C5A355', '#FDF6E3'],
      photo: ['#1a1a1a', '#3a3a3a', '#8B8B8B', '#E8E8E8'],
      watercolor: ['#4a6a8a', '#87CEEB', '#F0A050', '#FDF6E3'],
      digital: ['#0a0a2e', '#4A0E7C', '#D4722A', '#E8D5A3']
    };
    var c = styleColors[style] || styleColors.oil;
    return 'background: linear-gradient(135deg, ' + c[0] + ' 0%, ' + c[1] + ' 40%, ' + c[2] + ' 70%, ' + c[3] + ' 100%);';
  } else {
    var color = document.getElementById('sari-color').value;
    var sariColors = {
      'maroon-gold': ['#6B1D2A', '#C5A355'],
      'purple-silver': ['#4A1A6B', '#C0C0C0'],
      'saffron-ivory': ['#D4722A', '#FDF6E3'],
      'indigo-gold': ['#1A1A6B', '#C5A355']
    };
    var sc = sariColors[color] || sariColors['maroon-gold'];
    return 'background: repeating-linear-gradient(45deg, ' + sc[0] + ' 0px, ' + sc[0] + ' 10px, ' + sc[1] + ' 10px, ' + sc[1] + ' 12px, ' + sc[0] + 'CC 12px, ' + sc[0] + 'CC 22px, ' + sc[1] + '80 22px, ' + sc[1] + '80 24px);';
  }
}
