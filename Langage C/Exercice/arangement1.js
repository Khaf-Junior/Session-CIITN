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
function factorielle(x){
    if (x < 0) {
        return impossible;
    }
    if (x === 0) {
        return 1;
    }

    let resultat = 1;
    for (let i = 1; i <= x; i++) {
        resultat *= i;
    }
    return resultat;

} 
   
function calculer(){
    let n= document.getElementById("n").value ;
    let p= document.getElementById("p").value ;
    let resultat= document.getElementById("resultat");
   

     if(n<0 || p<0 || p>n){
            resultat.textContent=" impossible";
             resultat.style.color=" red ";
            }

   
     let f1=factorielle(n);
     let f2=factorielle(n - p);
      f1=parseInt(f1);
      f2=parseInt(f2);
        let result= f1/f2;
        resultat.textContent="A("+n+","+p+")="+result;
        resultat.style.color="green";
            
        
   }

    
