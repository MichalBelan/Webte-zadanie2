
function calc()
{
  rok = document.getElementById("rok").value;
  vek = document.getElementById("vek").value;

  var today = new Date();
    var birthDate = new Date(rok);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

   if(age == vek){
    
    document.getElementById("rok").style.backgroundColor="green";
    document.getElementById("vek").style.backgroundColor="green";
    }

  else{
    document.getElementById("rok").style.backgroundColor="red";
    document.getElementById("vek").style.backgroundColor="red";
    document.getElementById("narodenie-chyba").textContent="Nevyplnený rok";
    document.getElementById("vek-chyba").textContent="Nevyplnený vek";
  }
  
}
document.getElementById("rok").addEventListener("focusout",calc);
document.getElementById("vek").addEventListener("focusout",calc);

function check_mail()
{
  var input = document.getElementById("e-mail");
  var reg = /^[^\s@]{3,}@[^\s@]+\.[^\s@]{2,4}$/;

  if(input.value.match(reg)) {
    document.getElementById("e-mail-chyba").textContent="";
    document.getElementById("e-mail").style.backgroundColor="green";

  }
  else {
    document.getElementById("e-mail").style.backgroundColor="red";
    document.getElementById("e-mail-chyba").textContent="Nevyplnený email";
  }
}
document.getElementById("e-mail").addEventListener("focusout",check_mail);


function text_1()  
{
  a = document.getElementById("text-1");
  b = document.getElementById("text-2");
  c = document.getElementById("text-3");
  
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
}

function text_2()  
{
  a = document.getElementById("text-1");
  b = document.getElementById("text-2");
  c = document.getElementById("text-3");
  
  a.style.display = "none";
  b.style.display = "block";
  c.style.display = "none";
}

function text_3()  
{
  a = document.getElementById("text-1");
  b = document.getElementById("text-2");
  c = document.getElementById("text-3");
  
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "block";  
}

var sezonaObject = {
    "Leto": {
        "futbal": ["kopačky", "štucne", "dres", "chrániče"],
        "volejbal": ["sieť", "lopta", "halovky", "vrece"],
        "atletika": ["tretry", "kladivo", "oštep", "disk"]
    },
    "Zima": {
        "hokej": ["korčule", "hokejka", "prilba"],
        "lyžovanie": ["lyže", "lyžiarky", "paličky"]
    }
}
window.onload = function () {
    var sezonaSel = document.getElementById("sezona");
    var sportSel = document.getElementById("sport");
    var pomockySel = document.getElementById("pomocky");
    for (var x in sezonaObject) {
        sezonaSel.options[sezonaSel.options.length] = new Option(x, x);
    }
    sezonaSel.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        pomockySel.length = 1;
        sportSel.length = 1;
        //display correct values
        for (var y in sezonaObject[this.value]) {
            sportSel.options[sportSel.options.length] = new Option(y, y);
        }
    }
    sportSel.onchange = function () {
        //empty Chapters dropdown
        pomockySel.length = 1;
        //display correct values
        var z = sezonaObject[sezonaSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            pomockySel.options[pomockySel.options.length] = new Option(z[i], z[i]);
        }
    }
}
/*
function submit_check()
{
  all_ok = 1;
  
  if(document.getElementById('meno').value == "")
  {
    all_ok = 0;
    alert("Nevyplnil si povinné pole meno!"); 
  }
  
  if(document.getElementById('priezvisko').value == "")
  {
    all_ok = 0;
    alert("Nevyplnil si povinné pole priezvisko!"); 
  }
  
  if(document.getElementById('vek').value == "")
  {
    all_ok = 0;
    alert("Nevyplnil si povinné pole vek!"); 
  }
  else
  {
    rok = document.getElementById('rok').value;
    vek = document.getElementById('vek').value;
    d = new Date();
    datum_rok = 1900 + d.getYear();
    
    if(datum_rok != (parseInt(rok) + parseInt(vek)) && rok != "" && vek != "")
    {
      all_ok = 0;
      alert("Dátum narodenia a tvoj vek nesúhlasia!");
    }
  }
  
  if(document.getElementById('rok').value == "")
  {
    all_ok = 0;
    alert("Nevyplnil si povinné pole rok narodenia!"); 
  }
  
  if(document.getElementById('e-mail').value == "")
  {
    all_ok = 0;
    alert("Nevyplnil si povinné pole e-mail!"); 
  }
  else
  {
    mail_value = document.getElementById('e-mail').value;
    reg = /^[^\s@]{3,}@[^\s@]+\.[^\s@]{2,4}$/;
  
    if(reg.test(mail_value) == false )              
    {
      all_ok = 0;
      alert("Chybná forma mailu!");
    }
  }
  
  if(all_ok == 1)
  {
    return true;  
  }
  else
  {
    return false;
  }
}
*/



function ValidationNumber(){
  var input= document.getElementById("phone");
  var regex= /^\+?[1-9]\d{1,14}$/;
  if (input.value.match(regex)){
    document.getElementById("phone-chyba").textContent="";
    document.getElementById("phone").style.backgroundColor="green";

  }
  else{
    document.getElementById("phone").style.backgroundColor="red";
    document.getElementById("phone-chyba").textContent = "Nevyplnené čislo";
  }
  
  
}
document.getElementById("phone").addEventListener("focusout",ValidationNumber);

function surname(){
  var input=document.getElementById("priezvisko").value;
  document.getElementById("priezvisko").innerHTML= input.length + "/" + input.maxLength;

  if(input.length ==0){
    document.getElementById("priezvisko-chyba").textContent="Nevyplnené priezvisko";
    document.getElementById("priezvisko").style.backgroundColor="red";

  }
  else if(input.length ==21){
     document.getElementById("priezvisko-chyba").textContent="Presiahol si počet";

  }else{
    document.getElementById("priezvisko-chyba").textContent="";
    document.getElementById("priezvisko").style.backgroundColor="green"
  }

}
document.getElementById("priezvisko").addEventListener("focusout",surname);


function name1(){
  var input=document.getElementById("meno").value;
  document.getElementById("meno").innerHTML= input.length + "/" + input.maxLength;

  if(input.length ==0){
    document.getElementById("meno-chyba").textContent="Nevyplnené meno";
    document.getElementById("meno").style.backgroundColor="red";

  }
  else if(input.length ==21){
     document.getElementById("meno-chyba").textContent="Presiahol si počet";

  }else{
    document.getElementById("meno-chyba").textContent="";
    document.getElementById("meno").style.backgroundColor="green"
  }

}
document.getElementById("meno").addEventListener("focusout",name1);




function CheckBox(){
  var array = [];
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
  }
  console.log(array);
  return array;
 }
 
 function RadioPohlavie(){
  
  var radiobutton = document.getElementsByName('pohlavie');
  
  for (var i = 0; i < radiobutton.length; i++) {
    if(radiobutton[i].checked){
      return radiobutton[i].value;
    }
  }
  
 }

 function RadioStrava() {
  var radiobutton = document.getElementsByName('strava');

  for (var i = 0; i < radiobutton.length; i++) {
    if(radiobutton[i].checked){
      return radiobutton[i];
    }
  }
 }

 function RadioProtein() {
  var radiobutton = document.getElementsByName('protein_vm');

  for (var i = 0; i < radiobutton.length; i++) {
    if(radiobutton[i].checked){
      return radiobutton[i];
    }
  }
 }

 function RadioKreatin() {
  var radiobutton = document.getElementsByName('kreatin_on');

  for (var i = 0; i < radiobutton.length; i++) {
    if(radiobutton[i].checked){
      return radiobutton[i];
    }
  }
 }

 function RadioBcaa() {
  var radiobutton = document.getElementsByName('bcaa_tp');

  for (var i = 0; i < radiobutton.length; i++) {
    if(radiobutton[i].checked){
      return radiobutton[i];
    }
  }
 }

 function ZobrazHidden() {
  document.getElementById("hidden_name").style.visibility="visible";
 }


function Modal_all(){
  
   var modalPozadie= document.getElementById("myModal");
   modalPozadie.classList.add("modal");

   var modalObsah= document.createElement("div");
   modalObsah.id = "modalObsah";
   modalObsah.classList.add("modal-content");
   modalPozadie.appendChild(modalObsah);

   var meno=document.createElement("p");
   meno.textContent = "Meno: " + document.getElementById("meno").value;
   modalObsah.appendChild(meno);

   var priezvisko=document.createElement("p");
   priezvisko.textContent = "Priezvisko: " + document.getElementById("priezvisko").value;
   modalObsah.appendChild(priezvisko);

   var vek=document.createElement("p");
   vek.textContent = "Vek: " + document.getElementById("vek").value;
   modalObsah.appendChild(vek);

   var narodenie=document.createElement("p");
   narodenie.textContent = "Rok narodenia: " + document.getElementById("rok").value;
   modalObsah.appendChild(narodenie);

   var email=document.createElement("p");
   email.textContent = "E-mail: " + document.getElementById("e-mail").value;
   modalObsah.appendChild(email);

   var mobil=document.createElement("p");
   mobil.textContent = "Tel.čislo: " + document.getElementById("phone").value;
   modalObsah.appendChild(mobil);

   var gopass=document.createElement("p");
   gopass.textContent = "GoPass: " + CheckBox();
   modalObsah.appendChild(gopass);
   var pass=document.createElement("p");
   pass.textContent="Čislo Gopass: " + document.getElementById("gopass_number").value;
   modalObsah.appendChild(pass);

   var pohlavie=document.createElement("p");
   pohlavie.textContent = "Pohlavie: " + RadioPohlavie();
   modalObsah.appendChild(pohlavie);
   
   var doplnky=document.createElement("p");
   doplnky.textContent = "Aké doplnky stravy používaš? " + RadioStrava().value;
   modalObsah.appendChild(doplnky);
   
   switch (RadioStrava().id) {
      case "protein":
        var protein=document.createElement("p");
        protein.textContent = "Zarábate si protein s vodou alebo mliekom? " + RadioProtein().value;
        modalObsah.appendChild(protein);
        break;

      case "kreatin":
        var kreatin=document.createElement("p");
        kreatin.textContent = "Kreatín beriete ochutený alebo neochutený? " + RadioKreatin().value;
        modalObsah.appendChild(kreatin);
        break;

      case "bcaa":
        var bcaa=document.createElement("p");
        bcaa.textContent = "V akej forme použivate BCAA? " + RadioBcaa().value;
        modalObsah.appendChild(bcaa);
        break;
   }

  var objednajTlacidlo=document.createElement("input");
  objednajTlacidlo.type="submit";
  objednajTlacidlo.value="Objednaj";
  modalObsah.appendChild(objednajTlacidlo);
}

var modalPozadie= document.getElementById("myModal");
window.onclick = function(event) {
  if (event.target == modalPozadie) {
    document.getElementById("modalObsah").remove();
    modalPozadie.classList.remove("modal");
  }
}