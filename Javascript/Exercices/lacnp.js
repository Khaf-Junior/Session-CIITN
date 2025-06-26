function cnpcalcule(){
    let a= document.getElementById("nump").value;
     let b= document.getElementById("numn").value;

      let c= document.getElementById("mess1");
       let d= document.getElementById("mess2");
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
    
       if (a !== "" && b !== "") {
        a = parseInt(a);
        b = parseInt(b); 
        if (b <= a) {
          let factn = 1, factp = 1, factdiff = 1;
            for (let i = 1; i <= a; i++){
               factn =factn *i;
            } 
            for (let i = 1; i <= b; i++){
              factp = factp* i;
            } 
            for (let i = 1; i <= (a - b); i++) {
                 factdiff= factdiff * i;
            }
           
           }

        let combinaison = factn / (factp * factdiff);

        let result = document.getElementById("result");
        result.innerHTML = "<b>" + combinaison + "</b>";
        result.style.color = "purple";
        result.style.fontSize = "50px";

    } else {
        let result = document.getElementById("result");
        result.innerHTML = "ERREUR : p doit être inférieur ou égal à n";
        result.style.color = "red";
        }
    }
     
    
