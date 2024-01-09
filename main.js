const hamburger = document.getElementById('hamburger');
const Close = document.getElementById('close');
const aside = document.getElementById('aside');

hamburger.addEventListener('click',function(){
    hamburger.style.display = 'none';
    Close.style.display = 'block';
    aside.style.display = 'block';
});

Close.addEventListener('click',function(){
    Close.style.display = 'none';
    hamburger.style.display = 'block';
    aside.style.display = 'none';
});