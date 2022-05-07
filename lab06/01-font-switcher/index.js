let p_font = 1;
let h_font = 2;

const makeBigger = () => {

   // alert('make bigger!');
   // var currentSize = $("div.content").css('font-size');         
   // var currentSize = parseFloat(currentSize)*1.2;
   // font = document.querySelector("p").style.fontSize;
   // font = document.querySelector("p").style.fontSize;
   p_font = p_font + 0.1;
   h_font = h_font + 0.1
   document.querySelector("p").style.fontSize = `${p_font}em`;
   document.querySelector("h1").style.fontSize = `${h_font}em`;
};

const makeSmaller = () => {
   p_font = p_font - 0.1;
   h_font = h_font - 0.1
   document.querySelector("p").style.fontSize = `${p_font}em`;
   document.querySelector("h1").style.fontSize = `${h_font}em`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

