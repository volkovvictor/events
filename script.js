'use strict';

const btn = document.getElementById('btn'),
      text = document.getElementById('text'),
      range = document.getElementById('range'),
      square = document.getElementById('square'),
      circle = square.querySelector('#circle'),
      eBtn = square.querySelector('#e_btn');

const changeColor = function() {
   const value = text.value.trim();
   if(value !== '') {
      square.style.backgroundColor = value;
      text.value = '';
   }
};

const changeSize = function() {
   const value = range.value;

   circle.style.width = value + '%';
   circle.style.height = value + '%';
};

btn.addEventListener('click', changeColor);

/////////////////

eBtn.style.display = 'none';

/////////////////

range.addEventListener('input', changeSize);