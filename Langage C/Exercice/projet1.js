function afficher(){
    let a= document.getElementById("prenom").value ;
    let b= document.getElementById("nom").value ;
    let c= document.getElementById("ddn").value ;
    let d= document.getElementById("ldn").value ;
    let e= document.getElementById("g1").value ;
    let f= document.getElementById("g2").value ;
    let g= document.getElementById("nationalite").value ;
    let h= document.getElementById("email").value ;
    let i= document.getElementById("num").value ;
    let j= document.getElementById("aa").value ;
    let k= document.getElementById("nea").value ;
    let l= document.getElementById("def").value ;
    let m= document.getElementById("do").value ;
    let n= document.getElementById("filiere").value ;
    let o= document.getElementById("r").value ;
    let ma= document.getElementById("mprenom");
    let mb= document.getElementById("mnom");
    let mc= document.getElementById("mddn");
    let md= document.getElementById("mldn");
    let me= document.getElementById("mg");
    let mg= document.getElementById("mnationalite");
    let mh= document.getElementById("memail");
    let mi= document.getElementById("mnum");
    let mj= document.getElementById("maa");
    let mk= document.getElementById("mnea");
    let ml= document.getElementById("mdef");
    let mm= document.getElementById("mdo");
    let mn= document.getElementById("mfiliere");
    let mo= document.getElementById("mr");
    if(a===""){
        ma.textContent="Veuillez remplir ce champs!";
        ma.style.color="red";
    }
     if(b===""){
        mb.textContent="Veuillez remplir ce champs!";
        mb.style.color="red";
    }
     if(c===""){
        mc.textContent="Veuillez remplir ce champs!";
        mc.style.color="red";
    }
     if(d===""){
        md.textContent="Veuillez remplir ce champs!";
        md.style.color="red";
    }
     if(e===""||f===""){
        me.textContent="Veuillez faire un choix!";
        me.style.color="red";
    }
     if(g===""){
        mg.textContent="Veuillez choisir un genre!";
        mg.style.color="red";
    }
     if(h===""){
        mh.textContent="Veuillez remplir ce champs!";
        mh.style.color="red";
    }
     if(i===""){
        mi.textContent="Veuillez remplir ce champs!";
        mi.style.color="red";
    }
     if(j===""){
        mj.textContent="Veuillez remplir ce champs!";
        mj.style.color="red";
    }
      if(k===""){
        mk.textContent="Veuillez remplir ce champs!";
        mk.style.color="red";
    }
     if(l===""){
        ml.textContent="Veuillez remplir ce champs!";
        ml.style.color="red";
    }
     if(m===""){
        mm.textContent="Veuillez remplir ce champs!";
        mm.style.color="red";
    }
     if(n===""){
        mn.textContent="Veuillez remplir ce champs!";
        mn.style.color="red";
    }
     if(o===""){
        mo.textContent="Veuillez remplir ce champs!";
        mo.style.color="red";
    }
    if(a!==""){
        ma.textContent="";
    }
     if(b!==""){
        mb.textContent="";
    }
     if(c!==""){
        mc.textContent="";
    }
     if(d!==""){
        md.textContent="";
    }
     if(e!==""||f!==""){
        me.textContent="";
    }
     if(g!==""){
        mg.textContent="";
    }
     if(h!==""){
        mh.textContent="";
    }
     if(i!==""){
        mi.textContent="";
     }
     if(j!==""){
        mj.textContent="";
    }
      if(k!==""){
        mk.textContent="";
    }
     if(l!==""){
        ml.textContent="";
    }
     if(m!==""){
        mm.textContent="";
    }
     if(n!==""){
        mn.textContent="";
    }
     if(o!==""){
        mo.textContent="";
     }
       
}