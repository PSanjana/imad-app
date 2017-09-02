console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'new value';
//move image on click

var img = document.getElementById('madi');

img.onclick = function(){ 
    img.style.marginLeft = '100px';
};
