// Ejercicio 1 

//let nota1 = parseFloat(prompt("Ingrese su primera nota"))
//let nota2 = parseFloat(prompt("Ingrese su segunda nota"))
//let nota3 = parseFloat(prompt("Ingrese su tercera nota"))

//let promedio = (nota1 + nota2 + nota3)/3;
//if (promedio <= 3.9){
//    console.log("Estudie vago")
//} else {
//    console.log("Esta becado")
//}
// Ejercicio 2

//let numero = parseFloat(prompt("ingrese un numero"));

//if (numero % 2 == 0){
//    alert("Es un numero par");
//}else {
//    alert("Es un numero impar");
//}
//if (numero > 10){
//    alert("El numero es mayor a 10")
//}else if (numero = 10){
//    alert("El numero es igual a 10")
//}
//else {
//    alert("No es mayor a 10 ")
//}

// Ejercicio 3  V=I*R

//let voltaje = parseFloat(prompt("Ingrese la cantidad del voltaje:"));
//let resistencia = parseFloat(prompt("Ingrese la cantidad de la resistencia:"));

//let corriente = (voltaje * resistencia)

//alert("el resultado de la intensidad es "+ corriente)


// Ejercicio 4 

//let nombrePersona = [];
//let edadPersona = [];
//let edadMayor = -1;
//let nombreMayor = ""; 

//for (let i = 0; i <3 ; i++){
//    let nombre = prompt("Ingrese el nombre: ")
//    let edad = parseInt(prompt("Ingrese la edad: "))
//    nombrePersona.push(nombre);
//    edadPersona.push(edad);
//}
//console.log(nombrePersona, edadPersona);
//for (let i = 0; i< edadPersona.length;i++){
//    if (edadPersona[i]>edadMayor){
//        edadMayor=edadPersona[i];
//        nombreMayor=nombrePersona[i];  
//    }
//}
//console.log(nombreMayor,edadMayor)

// Ejercicio 5

//let numero1 = parseInt(prompt("Ingrese el primer numero"));
//let numero2 = parseInt(prompt("Ingrese el segundo numero"));

//if (numero1 > numero2){
//    let sumaNumeros= numero1 + numero2;
    //console.log(sumaNumeros);
//    let diferenciaNumeros = numero1 - numero2;
    //console.log(diferenciaNumeros);
//}else {
//    let division = numero1/numero2;
    //console.log(division);
//    let producto = numero1*numero2;
    //console.log(producto);
//}


// Ejercicio 6

//let estudiantesNotaMas = [];
//let estudiantesNotaMenos = [];
//let notaMayor = []; 
//let notaMenor = []; 
//let estudiantesMA = []; 
//let estudiantesMN = []; 
//for (let i = 0; i < 3; i++) {
//    let nombre = prompt("Ingrese su nombre: ");
//    let nota = parseInt(prompt("Ingrese la nota definitiva: "));
//   estudiantesNotaMas.push({ nombre, nota });
//    estudiantesNotaMenos.push({ nombre, nota });    
//    if (nota > notaMayor) {
//       notaMayor = nota;
//    }
//    if (nota < notaMenor) {
//        notaMenor = nota;
//    }
//}
//for (let i = 0; i < estudiantesNotaMas.length; i++) {
//    if (estudiantesNotaMas[i].nota === notaMayor) {
//        estudiantesMA.push(estudiantesNotaMas[i]);
//    }
//}
//for (let i = 0; i < estudiantesNotaMenos.length; i++) {
//    if (estudiantesNotaMenos[i].nota === notaMenor) {
//        estudiantesMN.push(estudiantesNotaMenos[i]);
//    }
//}
//console.log("Los estudiantes con la mayor nota son: ", estudiantesMA);
//console.log("Los estudiantes con la menor nota son: ", estudiantesMN);

// Ejercicio 7

//let nombreP = [];
//let valorP  = [];
//let montoPagar = 0;

//for (let i = 0; i < 3; i++) {
//    let nombre = prompt("Ingrese el nombre del producto: ");
//    let valor = parseInt(prompt("Ingrese el valor del producto: "));
//    nombreP.push(nombre);
//    valorP.push(valor);

//}for (let i = 0; i < valorP.length; i++){
//    montoPagar += valorP[i];

//}for (let i = 0; i < nombreP.length; i++){
//    console.log("Producto", nombreP[i], "cuesta", valorP[i]);
//}

//console.log("Valor total a pagar es de", montoPagar)

//Ejercicio 8 

//let ladoC = parseInt(prompt("Ingrese los valores del cuadrado"));
//let perimetroC = ladoC * 4;

//console.log("El valor del perimetro del cuadrado es", perimetroC)

//let baseT = parseInt(prompt("Ingrese la base del triangulo:"));
//let alturaT = parseInt(prompt("Ingrese la altura del triangulo:"));
//let areaT = baseT * alturaT/2

//console.log("El area del triangulo es:", areaT);