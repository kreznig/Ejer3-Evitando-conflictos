document.getElementById('calcula').onclick= function calcularPeso(){
  var name=document.getElementById('name').value;
  var peso=document.getElementById('peso').value;
  peso=(peso/9.78);
  alert("Hola "+name+" tu peso en otros planetas es:"+
        "\nMarte: "+(3.71*peso).toFixed(2)+"\nMercurio: "+(3.72*peso).toFixed(2)+
        "\nVenus: "+(8.82*peso).toFixed(2)+"\nJúpiter: "+(23.13*peso).toFixed(2)+
        "\nSaturno : "+(9.01*peso).toFixed(2)+"\nUrano: "+(8.72*peso).toFixed(2));
}
