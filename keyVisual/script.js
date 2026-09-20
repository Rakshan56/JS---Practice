
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(det){
    if(det.key === " "){
        h1.textContent = "SPC";
    }else{
        h1.textContent = det.key;
    }
})