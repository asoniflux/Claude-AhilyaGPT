/* ============================================
   Deepak Counter
   ============================================ */

var DEEPAK_BASE = 1247856;
var DEEPAK_KEY = 'ahilya_deepak';
var currentDisplayCount = 0;

function initDeepak() {
  var stored = Storage.get(DEEPAK_KEY, { personalCount: 0, lastVisit: null });

  // Increment on page visit
  stored.personalCount += 1;
  stored.lastVisit = Date.now();
  Storage.set(DEEPAK_KEY, stored);

  // Calculate display count
  var daysSinceEpoch = Math.floor(Date.now() / 86400000);
  var simulatedGrowth = daysSinceEpoch * 73;
  var displayCount = DEEPAK_BASE + simulatedGrowth + stored.personalCount;
  currentDisplayCount = displayCount;

  // Render counter
  renderCounter(displayCount);
  renderHeroCounter(displayCount);
  renderPersonalCount(stored.personalCount);

  // Light a Deepak button
  document.getElementById('light-deepak-btn').addEventListener('click', function () {
    lightDeepak();
  });

  // Mini deepak button
  document.getElementById('deepak-mini').addEventListener('click', function () {
    document.getElementById('deepak-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(lightDeepak, 600);
  });
}

function lightDeepak() {
  var stored = Storage.get(DEEPAK_KEY, { personalCount: 0, lastVisit: null });
  stored.personalCount += 1;
  stored.lastVisit = Date.now();
  Storage.set(DEEPAK_KEY, stored);

  currentDisplayCount += 1;

  // Animate counter
  renderCounter(currentDisplayCount);
  renderHeroCounter(currentDisplayCount);
  renderPersonalCount(stored.personalCount);

  // Flash effect
  var flash = document.getElementById('deepak-flash');
  flash.classList.remove('deepak__flash--active');
  void flash.offsetWidth; // Force reflow
  flash.classList.add('deepak__flash--active');

  // Badge
  EventBus.emit('badge:increment', { badge: 'deepakBearer' });
}

function renderCounter(count) {
  var container = document.getElementById('deepak-counter');
  if (!container) return;

  var formatted = formatIndianNumber(count);
  var html = '';

  for (var i = 0; i < formatted.length; i++) {
    var ch = formatted[i];
    if (ch === ',') {
      html += '<span class="deepak__comma">,</span>';
    } else {
      html += '<span class="deepak__digit-wrapper"><span class="deepak__digit">' + ch + '</span></span>';
    }
  }
  html += '<span class="deepak__plus">+</span>';

  container.innerHTML = html;
}

function renderHeroCounter(count) {
  var el = document.getElementById('hero-counter-number');
  if (el) {
    el.textContent = formatIndianNumber(count);
  }
}

function renderPersonalCount(personal) {
  var el = document.getElementById('deepak-personal');
  if (el) {
    el.textContent = 'You have personally lit ' + personal + ' deepak' + (personal === 1 ? '' : 's');
  }
}
