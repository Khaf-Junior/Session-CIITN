function verifieChamps(){
    const prenom=document.getElementById("prenom").value ;
    const nom=document.getElementById("nom").value ;
    const age=document.getElementById("age").value ;
    const bouton=document.getElementById("bouton");
    if(prenom!==""&& nom!==""&& age!==""){
       bouton.disabled=false;
    }else{
       bouton.disable=true;
    }
}
function afficher(){
    const prenom=document.getElementById("prenom").value ;
    const nom=document.getElementById("nom").value ;
    const age=document.getElementById("age").value ;
    const resultat=document.getElementById("resultat");
    resultat.innerHTML="prenom :"+prenom+"<br> nom :"+nom+"<br> age :"+age+" ans";
    resultat.style.color= "green ";

}