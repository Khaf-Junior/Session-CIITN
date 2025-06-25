function comparaison(){
    let a= document.getElementById("num1").value;
    let b= document.getElementById("num2").value;

    let c= document.getElementById("fornum1");
    let d= document.getElementById("fornum2");

    if(a===""){
      c.textContent="Ce champs est obligatoire";
      c.style.color="red";
    }
    else{
        c.textContent="";
    }

    if(b===""){
      d.textContent="Ce champs est obligatoire";
      d.style.color="red";
    }
    else{
        d.textContent="";
    }

    if(a!=="" && b!==""){
        let resultat= document.getElementById("result");
        a=parseFloat(a);
        b=parseFloat(b);
        if(a>b){
             resultat.innerHTML="<b>" +a+ "</b>";
             resultat.style.color="green";
        }
        else if (b>a){
             resultat.innerHTML="<b>" +b+ "</b>";
             resultat.style.color="pink";
        }
        else{
         resultat.innerHTML="<b>" +a+"="+b+ "</b>";
             resultat.style.color="yellow";
        }
    }


}