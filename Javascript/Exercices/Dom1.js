function somme(){
                const n1 = parseFloat(document.getElementById('num1').value);
                const n2 = parseFloat(document.getElementById('num2').value);
                const resultat = Math.pow(n1,n2);
                const a = document.getElementById('resultat');
                a.textContent = `${n1} ^ ${n2} = ${resultat}`;
                a.style.color = "red";
                a.style.fontsize = "16px";
}