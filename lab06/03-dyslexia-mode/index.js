/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


// const dyslexia = () => {
//   if (document.querySelector("body").className == "dyslexia-mode") {
//     document.querySelector('body').className = "";
//   }
//   else {
//     document.querySelector('body').className = 'dyslexia-mode';
//   };
// }

// const dyslexia = () => {
//   if (document.querySelector('body').className != 'dyslexia-mode') {
//     document.querySelector('body').className = 'dyslexia-mode';
//   }
//   else {
//     document.querySelector('body').className = '';
//   }
// }


// document.querySelector('#dyslexia-toggle').addEventListener('click', dyslexia);

document.querySelector('#dyslexia-toggle').addEventListener('click', () => {
  if (document.querySelector('body').className != 'dyslexia') {
    document.querySelector('body').className = 'dyslexia';
  }
  else {
    document.querySelector('body').className = '';
  }
})
