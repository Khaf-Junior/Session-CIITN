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
        if(a>0){
         a=parseFloat(a);
        let i,p ;
        p=1;
        for(i=1;i<=a;i++){
            p=p*i;
         }
         let r=document.getElementById("result");
         r.innerHTML="<b>"+p+ "</b>";
         r.style.color="pink";
         r.style.fontSize="50px";
        }
        else{
            r.innerHTML="IMPOSSIBLE";
            r.style.color="red";
        }
    }
    
}