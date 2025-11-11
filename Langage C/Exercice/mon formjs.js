function afficher(){
            let prenom = document.getElementById("prenom").value;
            let nom = document.getElementById("nom").value;
            let age = document.getElementById("age").value;
            let tel = document.getElementById("tel").value;
            let indicatif = document.getElementById("indicatif").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            let p=document.getElementById("pm");
            let n=document.getElementById("nm");
            let a= document.getElementById("ag");
            let t= document.getElementById("t");
            let id= document.getElementById("id");
            let m= document.getElementById("mp");
             let c=document.getElementById("cmp");
             if(prenom===""){
                p.textContent="veuillez saissir ce champs";
                p.style.color="red";
             }
             if(nom===""){
                n.textContent="veuillez saissir ce champs";
                n.style.color="red";
             }
             if(age===""){
                a.textContent="veuillez saissir ce champs";
                a.style.color="red";
             }
             if(tel===""){
                t.textContent="veuillez saissir ce champs";
                t.style.color="red";
             }
             if(indicatif===""){
                id.textContent="veuillez saissir ce champs";
                id.style.color="red";
             }
             if(password===""){
                m.textContent="veuillez saissir ce champs";
                m.style.color="red";
             }
             if(confirmPassword===""){
                c.textContent="veuillez saissir ce champs";
                c.style.color="red";
             }
              if(prenom!==""){
                p.textContent="";
             }
             if(nom!==""){
                n.textContent=""; 
             }
             if(age!==""){
                a.textContent="";
             }
             if(tel!==""){
                t.textContent="";
             }
             if(indicatif!==""){
                id.textContent="";
             }
             if(password!==""){
                m.textContent="";
             }
             if(confirmPassword!==""){
                c.textContent="";
             }
             if(password!==confirmPassword){
                c.textContent="ne correspond pas au mot de passe !";
                c.style.color="red";
             }
            
}