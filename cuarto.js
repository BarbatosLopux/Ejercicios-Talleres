let datos = null;
let objeto = {};
let array = [];
let arrayObjetos = [];

while (true) {
  const opcion = parseInt(prompt(`---------MENU-----------
1. Lectura de datos
2. Crear objeto
3. Mostrar objeto
4. Crear array
5. Mostrar array
6. Eliminar primer elemento del array
7. Eliminar último elemento del array
8. Eliminar cualquier elemento
9. Agregar elemento al comienzo del array
10. Agregar elemento al final del array
11. Crear array con objetos
12. Iterar array con objetos con FOR
13. Iterar array con objetos con ForEach
14. Iterar array con objetos con Map y crear copia
15. Proceso personal
0. Salir
`));

  switch (opcion) {
    case 1:
      datos = prompt("Ingrese datos:");
      break;
    case 2:
      objeto = {};
      objeto.nombre = prompt("Nombre del objeto:");
      objeto.valor = prompt("Valor del objeto:");
      break;
    case 3:
      console.log("Objeto:", objeto);
      break;
    case 4:
      array = [];
      const elementos = prompt("Ingrese elementos separados por comas:");
      array = elementos.split(",");
      break;
    case 5:
      console.log("Array:", array);
      break;
    case 6:
      array.shift();
      break;
    case 7:
      array.pop();
      break;
    case 8:
      const indiceEliminar = parseInt(prompt("Índice del elemento a eliminar:"));
      if (indiceEliminar >= 0 && indiceEliminar < array.length) {
        array.splice(indiceEliminar, 1);
      }
      break;
    case 9:
      const elementoInicio = prompt("Elemento a agregar al inicio:");
      array.unshift(elementoInicio);
      break;
    case 10:
      const elementoFinal = prompt("Elemento a agregar al final:");
      array.push(elementoFinal);
      break;
    case 11:
      arrayObjetos = [];
      const cantidadObjetos = parseInt(prompt("Número de objetos en el array:"));
      for (let i = 0; i < cantidadObjetos; i++) {
        const obj = {};
        obj.nombre = prompt(`Nombre del objeto ${i + 1}:`);
        obj.valor = prompt(`Valor del objeto ${i + 1}:`);
        arrayObjetos.push(obj);
      }
      break;
    case 12:
      console.log("Iteración con FOR:");
      for (let i = 0; i < arrayObjetos.length; i++) {
        console.log(arrayObjetos[i]);
      }
      break;
    case 13:
      console.log("Iteración con ForEach:");
      arrayObjetos.forEach((element) => {
        console.log(element);
      });
      break;
    case 14:
      const copiaArrayObjetos = arrayObjetos.map((element) => ({ ...element }));
      console.log("Copia del array de objetos:", copiaArrayObjetos);
      break;
    case 15:
      // Proceso personal (agrega tu propio código aquí)
      break;
    case 0:
      return;
    default:
      alert("Opción no válida. Intente nuevamente.");
  }
}
