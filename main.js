"use strict";


const divs = document.querySelectorAll("#app div");

// do something for each div
divs.forEach(function(div){
    // div.style.transform = `translate(50vw, 50vh)`;
    
    div.addEventListener("mouseenter", function(){
        div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        // hsl(360, 12%, 12%) = hue saturation lightness
        div.style.backgroundColor = `hsl(${Math.random()*360}, ${Math.random()*100}%, 50%)`;


    });
    

});








