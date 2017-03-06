
document.getElementById('calcula').onclick= function calcularPeso(){
  var name=document.getElementById('name').value;
  var peso=document.getElementById('peso').value;
  var print = document.getElementById('print');
  peso=(peso/9.78);
  if(name && peso)
  print.innerHTML = "<h3>"+name+" tu peso en otros planetas es:</h3>"+
                    "<br>Mercurio: " + (3.72*peso).toFixed(2) +
                    "<br>Venus: " + (8.82*peso).toFixed(2) + "<br>Tierra: " + (1 * peso).toFixed(2) +
                    "<br>Marte: " + (3.71*peso).toFixed(2) + "<br>Júpiter: " + (23.13*peso).toFixed(2) +
                    "<br>Saturno: " + (9.01*peso).toFixed(2) + "<br>Urano: " + (8.72*peso).toFixed(2);
}
document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}
