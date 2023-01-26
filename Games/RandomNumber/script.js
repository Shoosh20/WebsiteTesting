let a;

document.getElementById("generateButton").onclick = function(){
    a = Math.floor(Math.random() * 6) + 1;
    document.getElementById("label").innerHTML = a;
};