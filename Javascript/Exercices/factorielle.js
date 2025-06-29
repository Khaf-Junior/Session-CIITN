
function factoriellle(n){
    let resultat = 1;
    for(let compteur=2;compteur<=n;compteur++){
        resultat= resultat*compteur;
    }
    return resultat;
}

function factorielle(){
    let a= document.getElementById("num").value;

    let b=document.getElementById("message");
    if(a===""){
        b.textContent="CE CHAMPS EST OBLIGATOIRE!!!";
        b.style.color="red";
    }
    else{
        b.textContent="";
    }

    if(a!==""){
        let resultat = document.getElementById("result");
        a = parseFloat(a);
        if(a < 0){
            resultat.textContent="Le nombre est negatif. Impossible de calculer le factorielle";
            resultat.style.color ="red";
        }else if(a=== 0 || a=== 1 ){
            resultat.innerHTML="<b> "+a+" ! = 1</b>";
            resultat.style.color ="blue";
        }else{
            let p = factoriellle(a);
            resultat.innerHTML="<b> "+a+" ! = "+factoriellle(a)+" </b>";
            resultat.style.color ="orange";
        }
    }

    
}