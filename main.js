const twitterFollowers = document.querySelector('#twitter-followers');
const youtubeFollowers = document.querySelector('#youtube-followers');
const facebookFollowers = document.querySelector('#facebook-followers');

let contador = 1000;
const idIterval = setInterval(() => {
  twitterFollowers.innerHTML = `${contador}`;
  if (contador >= 12000) {
    clearInterval(idIterval);
  }
  contador = contador + 100;
}, 10);

let contador1 = 500;
const idIterval1 = setInterval(() => {
  youtubeFollowers.innerHTML = `${contador1}`;
  if (contador1 > 4990) {
    clearInterval(idIterval1);
    youtubeFollowers.innerHTML = '5000';
  }
  contador1 = contador1 + 41;
}, 10);

let contador2 = 1000;
const idIterval2 = setInterval(() => {
  facebookFollowers.innerHTML = `${contador2}`;
  if (contador2 > 7490) {
    clearInterval(idIterval2);
    facebookFollowers.innerHTML = '7500';
  }
  contador2 = contador2 + 62;
}, 10);
