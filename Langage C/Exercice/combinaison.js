function verifieChamps(){
     let n= document.getElementById("n").value ;
    let p= document.getElementById("p").value ;
    let bouton = document.getElementById("bouton");
    if(n!==""&& p!==""){
        bouton.disabled= false;
    }else{
        bouton.disabled=true;
    }
}
function factoriel(x){
    if(x<0){
        return impossible;
    }
    if(x===0){
        return 1;
    }
    let resultat=1;
    let i;
    for(i=1;i<=x;i++){
        resultat=resultat*i;
    }
            return resultat;
    }

    function calculer(){
     let n= document.getElementById("n").value ;
    let p= document.getElementById("p").value ;
    let resultat= document.getElementById("resultat");
    n=parseFloat(n);
    p=parseFloat(p);

     if(n<0||p<0|| p>n|| !Number.isInteger(n)||!Number.isInteger(p) ){
     resultat.textContent="impossible!!!";
     resultat.style.color="red";
     return false;
     }
     let f1=factoriel(n);
     let f2= factoriel(p);
     let f3= factoriel(n-p);
     let r=f1/(f2*f3);
     resultat.textContent= "C("+n+","+p+")="+r;
     resultat.Style.color="green";
    }