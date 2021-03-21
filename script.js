
var ativado = 0

elemento = document.getElementById("mudaCor");

var alyson

var foto = document.getElementById("alien");


foto.onmouseover = function(){
    if (alyson != 1){
    foto.classList.remove("alien_sem_mouse");
    foto.classList.add("alien_com_mouse");}
}

foto.onmouseout = function(){
    if (alyson != 1){
    foto.classList.remove("alien_com_mouse");
    foto.classList.add("alien_sem_mouse");}
}

foto.ondblclick = function(){
    foto.src= "sources/alyson.png";
 alyson = 1;
}

elemento.onclick = function () {
    
    
   
      
    if (ativado == 0) {
        elemento.innerHTML = "modo claro"
        ativado = 1
        document.body.style.backgroundColor= "#0E050F"
        document.getElementById("conteudo").style.backgroundColor= "#9388A2"
        document.body.style.color= "white"
        
    } else {
        elemento.innerHTML = "modo escuro"
        
        document.body.style.backgroundColor= "#e9ecef"
        ativado = 0
        document.body.style.color= "black"
        document.getElementById("conteudo").style.backgroundColor= "green"
       
    }
}
