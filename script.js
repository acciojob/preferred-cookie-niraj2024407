//your JS code here. If required.
// Helper to set a cookie
function setCookie(name, value, days = 365) {
  document.cookie = `${name}=${value}; max-age=${days*24*60*60}; path=/`;
}

// Helper to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [k, v] = cookie.split('=');
    if (k === name) return v;
  }
  return null;
}

// Apply preferences from cookies (if any) on page load
function applyPreferences() {
  const size = getCookie('fontsize') || 16;
  const color = getCookie('fontcolor') || '#000000';
  document.documentElement.style.setProperty('--fontsize', size + 'px');
  document.documentElement.style.setProperty('--fontcolor', color);
  // Update form values too
  document.getElementById('fontsize').value = size;
  document.getElementById('fontcolor').value = color;
}

// Handle form submit
document.getElementById('font-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const size = document.getElementById('fontsize').value;
  const color = document.getElementById('fontcolor').value;
  setCookie('fontsize', size);
  setCookie('fontcolor', color);
  applyPreferences();
});

window.onload = applyPreferences;