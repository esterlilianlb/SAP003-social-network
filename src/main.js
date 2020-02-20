import Register from './pages/register.js';

function init() {
  document.querySelector('main').innerHTML = Register();
}

window.addEventListener('load', init);
