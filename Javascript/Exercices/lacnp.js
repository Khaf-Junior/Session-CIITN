function factoriellle(n){
    let resultat = 1;
    for(let compteur=2;compteur<=n;compteur++){
        resultat= resultat * compteur;
    }
    return resultat;
}


function cnpcalcule(){
    let a= document.getElementById("numn").value;
    let b= document.getElementById("nump").value;

    let c= document.getElementById("mess2");
    let d= document.getElementById("mess1");

        if(a===""){
          c.textContent="CE CHAMPS EST OBLIGATOIRE!!!";
          c.style.color="red";
        }
        else{
          c.textContent="";
        }
          if(b===""){
          d.textContent="CE CHAMPS EST OBLIGATOIRE!!!";
          d.style.color="red";
        }
        else{
          d.textContent="";
        }

        if(a !=="" && b!==""){

          a = parseFloat(a);
          b = parseFloat(b);

          const p = b;
            if(p < 0 || p > a){
              document.getElementById("erreur").textContent = "Le nombre doit etre compris entre 0 et n";
              document.getElementById("erreur").style.color = "red";
            }else if(a<0){
              document.getElementById("erreur").textContent = "La valeur de n ne doit pas etre negatif";
              document.getElementById("erreur").style.color = "red";
            }
            else{
              const s = document.getElementById("result");
              let combinaison =(factoriellle(b) * factoriellle(a - b));
              const r = factoriellle(a) / combinaison;
              s.innerHTML= "<strong>La combinaison est = "+ r + "</strong>";
            }
        }
}
