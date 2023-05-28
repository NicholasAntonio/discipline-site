count = 1;
document.getElementById("radio1").checked = true;
const nav = document.getElementById('navbar');

setInterval(function(){
    next()
},8000)

function next(){
    count ++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true
}

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 100){
        nav.classList.add('navbarBlack');
    }else{
        nav.classList.remove('navbarBlack');
    }
}
)
