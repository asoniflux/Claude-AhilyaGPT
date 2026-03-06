/* ============================================
   Utilities - EventBus, Helpers
   ============================================ */

// Lightweight event bus using native CustomEvent
const EventBus = {
  emit(event, detail) {
    document.dispatchEvent(new CustomEvent(event, { detail }));
  },
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  off(event, callback) {
    document.removeEventListener(event, callback);
  }
};

// Throttle
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Format number with Indian comma system (1,25,000)
function formatIndianNumber(num) {
  const str = Math.floor(num).toString();
  if (str.length <= 3) return str;
  let result = str.slice(-3);
  let remaining = str.slice(0, -3);
  while (remaining.length > 2) {
    result = remaining.slice(-2) + ',' + result;
    remaining = remaining.slice(0, -2);
  }
  if (remaining.length > 0) {
    result = remaining + ',' + result;
  }
  return result;
}

// Scroll reveal observer
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale, .reveal--stagger').forEach((el) => {
    observer.observe(el);
  });
}

// Safe localStorage
const Storage = {
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Quota exceeded or private browsing
    }
  }
};
