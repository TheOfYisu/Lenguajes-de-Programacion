var xd = parseInt(prompt("Inserte el valor del primer tiro"));
var po = parseInt(prompt("Ingrese el valor del segundo tiro"));
if(xd==po){
    document.write("Par")
} else if((xd+po)<=6){
    document.write("Juego perdido")
} else if((xd==0 || po==1)||(po==0 || xd==1)){
    document.write("Puntaje deficiente")
} else if((xd==5 || xd==6)||(po==5 || po==6)){
    document.write("Puntaje alto")
} else if(xd<po || po<xd){
    document.write("Lanzamiento")
} else{
    document.write("Error")
}