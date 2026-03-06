/* ============================================
   AI Media Creation Studio + Photo Upload
   ============================================ */

var studioGenCount = 0;
var galleryItems = [];
var uploadedImageData = null;

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

// Royal overlay styles for AI photo
var royalStyles = {
  maratha: {
    label: 'Maratha Royal',
    overlay: 'linear-gradient(180deg, rgba(107, 29, 42, 0) 0%, rgba(107, 29, 42, 0) 40%, rgba(107, 29, 42, 0.6) 70%, rgba(74, 14, 28, 0.9) 100%)',
    filter: 'sepia(0.4) saturate(1.3) contrast(1.1) brightness(0.95)',
    border: 'linear-gradient(135deg, #C5A355, #8B7332, #C5A355)'
  },
  mughal: {
    label: 'Mughal Miniature',
    overlay: 'linear-gradient(180deg, rgba(26, 58, 42, 0) 0%, rgba(26, 58, 42, 0) 40%, rgba(26, 58, 42, 0.5) 70%, rgba(15, 40, 28, 0.9) 100%)',
    filter: 'sepia(0.6) saturate(1.5) contrast(1.05) hue-rotate(-10deg)',
    border: 'linear-gradient(135deg, #C5A355, #2A6B4B, #C5A355)'
  },
  oil: {
    label: 'Oil Painting',
    overlay: 'linear-gradient(180deg, rgba(44, 36, 32, 0) 0%, rgba(44, 36, 32, 0) 40%, rgba(44, 36, 32, 0.5) 70%, rgba(30, 24, 20, 0.9) 100%)',
    filter: 'sepia(0.3) saturate(0.8) contrast(1.2) brightness(0.9)',
    border: 'linear-gradient(135deg, #8B7332, #4A3520, #8B7332)'
  },
  golden: {
    label: 'Golden Age',
    overlay: 'linear-gradient(180deg, rgba(197, 163, 85, 0.1) 0%, rgba(197, 163, 85, 0) 30%, rgba(139, 115, 50, 0.4) 70%, rgba(74, 14, 28, 0.85) 100%)',
    filter: 'sepia(0.5) saturate(1.4) contrast(1.15) brightness(1.05)',
    border: 'linear-gradient(135deg, #F5C842, #C5A355, #F5C842)'
  }
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

  // Photo upload
  var uploadInput = document.getElementById('photo-upload-input');
  var uploadBtn = document.getElementById('photo-upload-btn');
  var transformBtn = document.getElementById('photo-transform-btn');

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', function () {
      uploadInput.click();
    });

    uploadInput.addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function (ev) {
        uploadedImageData = ev.target.result;
        // Show preview
        var preview = document.getElementById('photo-preview');
        preview.innerHTML = '<img src="' + uploadedImageData + '" alt="Your photo" class="photo-preview-img">';
        preview.classList.add('photo-preview--visible');
        if (transformBtn) transformBtn.style.display = 'block';
      };
      reader.readAsDataURL(file);
    });
  }

  if (transformBtn) {
    transformBtn.addEventListener('click', function () {
      if (!uploadedImageData) return;
      generateRoyalPortrait();
    });
  }
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

function generateRoyalPortrait() {
  if (!uploadedImageData) return;

  var grid = document.getElementById('gallery-grid');
  var style = document.getElementById('photo-style').value;
  var royalStyle = royalStyles[style] || royalStyles.maratha;

  // Remove empty state
  var empty = grid.querySelector('.studio__empty');
  if (empty) empty.remove();

  // Show loading
  var loadingEl = document.createElement('div');
  loadingEl.className = 'studio__loading';
  loadingEl.innerHTML = '<div class="studio__loading-spinner"></div><p class="studio__loading-text">Transforming into a royal portrait...</p>';
  grid.insertBefore(loadingEl, grid.firstChild);

  setTimeout(function () {
    loadingEl.remove();

    var item = document.createElement('div');
    item.className = 'studio__gallery-item studio__gallery-item--royal';
    item.innerHTML =
      '<div class="royal-portrait">' +
        '<div class="royal-portrait__frame" style="background: ' + royalStyle.border + '; padding: 4px;">' +
          '<div class="royal-portrait__inner">' +
            '<img src="' + uploadedImageData + '" alt="Royal Portrait" class="royal-portrait__img" style="filter: ' + royalStyle.filter + ';">' +
            '<div class="royal-portrait__overlay" style="background: ' + royalStyle.overlay + ';"></div>' +
            '<div class="royal-portrait__ornament royal-portrait__ornament--top"></div>' +
            '<div class="royal-portrait__ornament royal-portrait__ornament--bottom"></div>' +
            '<span class="royal-portrait__label">' + royalStyle.label + ' Portrait</span>' +
            '<span class="royal-portrait__crest">👑</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    grid.insertBefore(item, grid.firstChild);
    studioGenCount++;

    // Badge
    EventBus.emit('badge:increment', { badge: 'royalArtist' });
  }, 2500);
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
