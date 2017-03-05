document.getElementById('calcula').onclick= function calcularPeso(){
  var name=document.getElementById('name').value;
  var peso=document.getElementById('peso').value;
  peso=(peso/9.78);

  alert("Hola "+name+" tu peso en estos planetas es:\n"
        +"Marte: "+3.71*peso+"\nMercurio: "+3.72*peso+"\nVenus: "+8.82*peso);
}
document.getElementById('form').onsubmit = function(e){
  e.preventDefault();
}
