function verifieChamps(){
    let n= document.getElementById("n").value ;
    let p= document.getElementById("p").value ;
    let bouton = document.getElementById("bouton");
    if(n!==""&& p!==""){
        bouton.disabled= false;
    }else{
        bouton.disable=true;
    }

}
function factorielle(x){
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
    let f1=factorielle(n);
     let f2=factorielle(n - p);
      f1=parseInt(f1);
       f2=parseInt(f2);

     if(n<0 &&(n-p)<0 || p>n){
            resultat.texteContent=" impossible";
             resultat.style.color=" red ";
            }
      else if((f1=== 0&& f2 === 0)|| (f1 === 1 && f2 === 1)||(f1 === 0 && f2 === 1)||(f1 === 1 && f2 === 0 )){
        resultat.textContent="A("+n+","+p+")=1";
        resultat.style.color= "pink";

         }
         else{
        let result= f1/f2;
       resultat.textContent="A("+n+","+p+")="+result;
        resultat.style.color="green";
            }
        
   }

    
