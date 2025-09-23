function fact(n){
    let i;
    let resultat;
    if(n<0){
        return impossible;
    }
     if(n===0){
        return 1;
    }
        resultat=1;
        for(i=1;i<=n;i++){ 
         resultat=resultat*i;
        }
        return resultat;
}
function afficher(){
    let n=document.getElementById('n').value;
    let p=document.getElementById('p').value;
     let messn=document.getElementById('n1');
     let messp=document.getElementById('p1');
     let r=document.getElementById('resultat');

     if( n===""){
        messn.textContent="veuiller saisir un nombre";
        messn.style.color="red";
         
    }
     if(p===""){
         messp.textContent="veuiller saisir un nombre";
        messp.style.color="red";
     }
     if( n!==""){
         messn.textContent="";
    }
     if( p!==""){
        
         messp.textContent="";
    }
    n= parseInt(n);
    p=parseInt(p);
    if(n<0||p<0 ||n<p|| isNaN(n) || isNaN(p)){
      r.textContent="impossible";
      r.style.color="orange";
    }
  
    let f1=fact(n);
    let f2=fact(p);
    let f3=fact(n-p);
    let result=f1/(f2*f3);
    r.textContent= "C("+n+","+p+")="+ result;
    r.style.color="green";  
   
}