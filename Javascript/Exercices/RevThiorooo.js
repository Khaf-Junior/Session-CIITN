 function Afficher(){
            const prenom = document.getElementById("prenom").value;
            const nom = document.getElementById("nom").value;
            const age = document.getElementById("age").value;

            const message1 = document.getElementById("message1");
            const message2 = document.getElementById("message2");
            const message3 = document.getElementById("message3");


            if(prenom === ""){
                message1.textContent = "Veuillez remplir ce champs !";
                message1.style.color = "red";
            }else{
                message1.textContent = "";
            }

            if(nom === ""){
                message2.textContent = "Veuillez remplir ce champs !";
                message2.style.color = "red";
            }else{
                message2.textContent = "";
            }

            if(age === ""){
                message3.textContent = "Veuillez remplir ce champs !";
                message3.style.color = "red";
            }else{
                message3.textContent = "";
            }

            if(prenom !=="" && nom !=="" && age !== ""){
                const resultat = document.getElementById("resultat");
                resultat.textContent = "Prenom: "+ prenom + " Nom : "+nom+" age: "+age ;
                resultat.style.color = "blue";
                resultat.style.fontSize = "17px";
            }
}