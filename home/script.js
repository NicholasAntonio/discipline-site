count = 1;
document.getElementById("radio1").checked = true;

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