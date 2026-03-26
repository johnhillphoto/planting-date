'use strict';

(function () {
  // Helpers
  function toDateInputValue(date) {
    // Returns "YYYY-MM-DD" string for <input type="date">
    var d = new Date(date);
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + month + '-' + day;
  }

  function daysBetween(startVal, endVal) {
    var start = new Date(startVal);
    var end = new Date(endVal);
    var diff = Math.abs(end - start);
    return Math.round(diff / (1000 * 60 * 60 * 24));
  }

  // Elements
  var startInput = document.getElementById('startDate');
  var endInput = document.getElementById('endDate');
  var daysInput = document.getElementById('daysDisplay');
  var calcBtn = document.getElementById('calcBtn');

  // Initialize both date pickers to today
  var today = toDateInputValue(new Date());
  startInput.value = today;
  endInput.value = today;
  daysInput.value = 0;

  // --- Pulse animation ---
  var pulseTimer = null;
  function triggerPulse() {
    if (pulseTimer) {
      clearTimeout(pulseTimer);
      daysInput.classList.remove('usePulse');
      // Force reflow so the animation restarts
      void daysInput.offsetWidth;
    }
    daysInput.classList.add('usePulse');
    pulseTimer = setTimeout(function () {
      daysInput.classList.remove('usePulse');
      pulseTimer = null;
    }, 1000);
  }

  // --- Update days when either date changes ---
  function updateDays() {
    var days = daysBetween(startInput.value, endInput.value);
    daysInput.value = days;
    triggerPulse();
  }

  startInput.addEventListener('change', updateDays);
  endInput.addEventListener('change', updateDays);

  // --- Calculate harvest date from planting date + days ---
  function calculateHarvestDate() {
    var days = parseInt(daysInput.value, 10);
    if (isNaN(days) || days < 0) {
      daysInput.classList.add('input-error');
      setTimeout(function () { daysInput.classList.remove('input-error'); }, 600);
      return;
    }
    var start = new Date(startInput.value);
    // Adjust for timezone offset so date arithmetic stays in local time
    start.setMinutes(start.getMinutes() + start.getTimezoneOffset());
    start.setDate(start.getDate() + days);
    endInput.value = toDateInputValue(start);
  }

  calcBtn.addEventListener('click', calculateHarvestDate);

  // Also allow pressing Enter in the days field
  daysInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') calculateHarvestDate();
  });
})();
