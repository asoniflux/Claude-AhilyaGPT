/* ============================================
   App - Main Orchestrator
   ============================================ */

(function () {
  // Section lazy initialization using IntersectionObserver
  var initialized = {};

  var sectionInitMap = {
    'court': initCourt,
    'sacred-map': initMap,
    'studio': initStudio,
    'dashboard': initDashboard,
    'deepak-section': initDeepak
  };

  var lazyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          if (sectionInitMap[id] && !initialized[id]) {
            initialized[id] = true;
            sectionInitMap[id]();
          }
        }
      });
    },
    { rootMargin: '200px 0px' }
  );

  // Observe all sections
  Object.keys(sectionInitMap).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) lazyObserver.observe(el);
  });

  // Initialize badges immediately (needs to listen from the start)
  initBadges();

  // Initialize scroll reveal
  initScrollReveal();

  // Initialize deepak counter immediately for hero display
  initDeepak();
  initialized['deepak-section'] = true;
})();
