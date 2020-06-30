import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const masonry = new Macy({
  container: '.container',
  mobileFirst: true,
  colums: 1,
  breakAt: {
    320: 1,
    700: 2,
    1100: 3,
  },
  margin: {
    x: 20,
    y: 20,
  },
});
