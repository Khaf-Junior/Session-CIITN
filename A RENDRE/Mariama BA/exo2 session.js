function parite(){
let n=prompt('entrez un nombre');
if(n%2==0){
    alert(n+' est un nombre pair');
}else{
    alert(n+' est un nombre impair');
}
}
function age(){
    let x=prompt('entrez votre age');
    if(x<18){
        alert('vous êtes mineur');
        }
        else if(x>60){
            alert('SENIOR');
                    }
        else {
            alert('vous êtes majeur');
        }
}
function conduite(){
    let pays=prompt ('entrez votre pays');
    let age=prompt('entrez votre age');
        if (pays=france){
            if(age>=18){
       alert('tu peux conduire');
       }
       else{
        alert('tu ne peux pas conduire');
       }
        }
       else if (pays=USA){
        if(age=>16){
         alert('tu peux conduire');
        }
        else{
            alert('tu ne peux pas conduire');
        }
         
     }
        else if (pays=Sénégal){
            if(age=>18){
         alert('tu peux conduire');
            }
            else{
                alert('tu ne peux pas conduire');
            }
               }
        
    else{
    alert('                       ');
 }
    
 
}