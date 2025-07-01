function calculer(){
            const libele = document.getElementById("libelle").value;
            const prix = document.getElementById("prix").value;
            const quantite = document.getElementById("quantite").value;

            const msgLibele = document.getElementById("msgLibelle");
            const msgPrix = document.getElementById("msgPrix");
            const msgQuantite = document.getElementById("msgQuantite");

            const htAffiche = document.getElementById("montantHT");
            const taxeAffiche = document.getElementById("taxe");
            const ttcAffiche = document.getElementById("montantTTC");


            if(libele===""){
                msgLibele.textContent = "Veuillez remplir ce champ ! ";
                msgLibele.style.color = "red";
            }else{
                msgLibele.textContent = "";
            }

            if(prix===""){
                msgPrix.textContent = "Veuillez remplir ce champ ! ";
                msgPrix.style.color = "red";
            }else{
                 msgPrix.textContent = "";
            }

            if(quantite === ""){
                msgQuantite.textContent = "Veuillez remplir ce champ ! ";
                msgQuantite.style.color = "red";
            }else{
                msgQuantite.textContent = "";
            }

            if(libele !== "" && prix !=="" && quantite !== ""){
                const prixNumber = parseFloat(prix);
                const quantitenumber = parseFloat(quantite);

                if(isNaN(prixNumber) || prixNumber < 5000 || prixNumber > 150000 ){
                    msgPrix.textContent = "Le prix unitaire est un entier compris entre 5000 et 150000";
                    msgPrix.style.color = "red";
                }else{
                     msgPrix.textContent = "";
                }

                if(isNaN(quantitenumber) || quantitenumber <= 0  ){
                    msgQuantite.textContent = "La quantité doit être un nombre > 0";
                    msgQuantite.style.color = "red";
                }else{
                     msgQuantite.textContent = "";
                }
                
                if(!isNaN(prixNumber && prixNumber >= 5000 && prixNumber <= 150000 && !isNaN(quantitenumber) && quantitenumber > 0) ){
                    const montantHT = prixNumber * quantitenumber;
                    let taux;

                    if(montantHT < 100000){
                        taux = 0.1;
                    }else{
                        taux = 0.05;
                    }

                    const montantTaxe = montantHT * taux;
                    const montantTTC =  montantHT + montantTaxe;

                    htAffiche.textContent = "Montant HT : "+montantHT+" FCFA";
                    taxeAffiche.textContent = "Montant Taxe ("+(taux * 100)+"%) :"+ montantTaxe + " F CFA";
                    ttcAffiche.textContent = "Montant TTC : " + montantTTC + " FCFA";

                    htAffiche.style.color = "green";
                    taxeAffiche.style.color = "orange";
                    ttcAffiche.style.color = "blue";

                }
                
            }
        }