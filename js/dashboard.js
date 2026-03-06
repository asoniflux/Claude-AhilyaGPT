/* ============================================
   Politician Dashboard & Share Kits
   ============================================ */

var statesViewed = {};

function initDashboard() {
  var stateSelect = document.getElementById('state-select');
  var citySelectWrapper = document.getElementById('city-select-wrapper');
  var citySelect = document.getElementById('city-select');
  var card = document.getElementById('dashboard-card');
  var emptyState = document.getElementById('dashboard-empty');

  // Populate state dropdown
  Object.keys(stateContributions).sort().forEach(function (state) {
    var opt = document.createElement('option');
    opt.value = state;
    opt.textContent = state;
    stateSelect.appendChild(opt);
  });

  // State selection handler
  stateSelect.addEventListener('change', function () {
    var state = this.value;
    if (!state) {
      card.classList.remove('dashboard__card--visible');
      citySelectWrapper.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    var data = stateContributions[state];
    if (!data) return;

    // Show city dropdown
    if (data.cities && data.cities.length > 0) {
      citySelectWrapper.style.display = 'block';
      citySelect.innerHTML = '<option value="">All cities in ' + state + '</option>';
      data.cities.forEach(function (city) {
        var opt = document.createElement('option');
        opt.value = city;
        opt.textContent = city;
        citySelect.appendChild(opt);
      });
    } else {
      citySelectWrapper.style.display = 'none';
    }

    renderDashboardCard(state, data);

    // Track for badges
    statesViewed[state] = true;
    EventBus.emit('badge:increment', { badge: 'stateAmbassador' });
  });

  // City selection (future: could filter contributions by city)
  citySelect.addEventListener('change', function () {
    // Currently shows full state data — could be enhanced
  });

  // Share buttons
  document.getElementById('share-twitter').addEventListener('click', function () {
    var state = stateSelect.value;
    if (!state) return;
    var data = stateContributions[state];
    var text = data.shareText;
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'width=600,height=400');
  });

  document.getElementById('share-linkedin').addEventListener('click', function () {
    var text = 'Discover the incredible legacy of Lok Mata Ahilya Bai Holkar — temples, ghats, and dharamshalas across India.';
    var url = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href) + '&summary=' + encodeURIComponent(text);
    window.open(url, '_blank', 'width=600,height=400');
  });

  document.getElementById('share-copy').addEventListener('click', function () {
    var state = stateSelect.value;
    if (!state) return;
    var data = stateContributions[state];
    var text = data.shareText + '\n\nLearn more: ' + window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        showCopyToast();
      });
    } else {
      // Fallback
      var textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showCopyToast();
    }
  });
}

function renderDashboardCard(state, data) {
  var card = document.getElementById('dashboard-card');
  var emptyState = document.getElementById('dashboard-empty');

  document.getElementById('card-title').textContent = "Ahilya Bai's Legacy in " + state;
  document.getElementById('card-subtitle').textContent = data.cities.join(' · ');
  document.getElementById('card-summary').textContent = data.summary;

  // Contributions list
  var ul = document.getElementById('card-contributions');
  ul.innerHTML = data.contributions.map(function (c) {
    return '<li>' + c + '</li>';
  }).join('');

  // Key fact
  document.getElementById('card-keyfact').textContent = data.keyFact;

  // Show card, hide empty
  card.classList.add('dashboard__card--visible');
  emptyState.style.display = 'none';
}

function showCopyToast() {
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<span class="toast__icon">📋</span><span class="toast__text"><strong>Copied!</strong>Share text copied to clipboard</span>';
  container.appendChild(toast);
  setTimeout(function () {
    toast.classList.add('toast--exit');
    setTimeout(function () { toast.remove(); }, 300);
  }, 2500);
}
