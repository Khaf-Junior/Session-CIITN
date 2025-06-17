function afficher(event){
    if(event){
        event.preventDefault();
    }
    const p=document.getElementById('prenom').value;
    const n=document.getElementById('nom').value;
    const a=document.getElementById('age').value;
    document.getElementById('text').value=p+' '+n+' '+a;
    document.getElementById('r').style.display='block';
}