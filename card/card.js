// Fit the 402×874 card to the screen and wire up the flip buttons.
(function () {
  var W = 402, H = 874, M = 16;
  var root = document.documentElement;
  function fit() {
    var vw = window.innerWidth, vh = window.innerHeight;
    var margin = vw < 500 ? 0 : M * 2; // edge-to-edge on phones
    var s = Math.min((vw - margin) / W, (vh - margin) / H);
    root.style.setProperty('--s', s.toFixed(4));
  }
  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);

  var card = document.getElementById('card');
  var faces = card.querySelectorAll('.face');
  function sync() {
    var flipped = card.classList.contains('flipped');
    faces[0].inert = flipped;   // keep keyboard focus on the visible side
    faces[1].inert = !flipped;
    faces[0].setAttribute('aria-hidden', flipped);
    faces[1].setAttribute('aria-hidden', !flipped);
  }
  card.querySelectorAll('.flip').forEach(function (btn) {
    btn.addEventListener('click', function () { card.classList.toggle('flipped'); sync(); });
  });
  sync();
})();
