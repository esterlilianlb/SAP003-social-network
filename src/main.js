import Timeline from './pages/feed.js';

function init() {
  document.querySelector('main').innerHTML = Timeline();
}

window.addEventListener('load', init);
