window.onload = function() {
    
    let elmSuit = document.getElementsByClassName("figure");

    let suit = Math.round(Math.random()*3)+1;

    for (let i = 0; i < elmSuit.length; i++) {
      
        if (suit === 1){
        elmSuit[i].innerHTML = "\u2660";
        }else if (suit === 2){
        elmSuit[i].innerHTML = "\u2663";
        }else if (suit === 3){
        elmSuit[i].innerHTML = "\u2665";
        elmSuit[i].style.color = "red";
        }else if (suit === 4){
        elmSuit[i].innerHTML = "\u2666";
        }

  }

    let numberAl = Math.round(Math.random()*9)+1;
    let elemento = document.getElementById("number");
    elemento.innerHTML = numberAl;

}