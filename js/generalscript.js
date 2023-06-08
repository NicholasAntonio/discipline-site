const hamburguer = document.getElementById('mobile-menu');
const icon = document.querySelector('.fa-bars');

hamburguer.onclick = function(){
   const navBar = document.querySelector('.nav-links');
   navBar.classList.toggle('active');
   icon.classList.toggle('fa-xmark');
};

