const PI = 3.14;
let marca = "BH";
let radio = 30;
let rueda =  2 * 3.14 * radio;
let esDeCarretera = true;
marca = "ORBEA";
radio = 400;
console.log("Marca :" + marca);
console.log("Longitud Rueda :" + rueda);
console.log(radio);
console.log(esDeCarretera);

let bici ={
    marca: "BH",
    precio: 300,
    radio: 30,
    esDeCarretera: true,
    color: "rojo",
};
console.log(bici.color);
bici.color = "azul";
console.log(bici);
console.log(bici.precio);
console.log(bici.color);

let colores = ["rojo", "azul", "blanco"];
console.log(colores);
console.log(colores [1]);
colores[2] = "negro";
console.log(colores);
bici.marca = marca;
console.log(bici);


let esGrande = bici.radio < 25;
let meGusta = bici.color == "azul";
console.log(esGrande);
console.log(meGusta);

// declaracion
let etiqueta;
//asignacion
etiqueta = "Hola";
//instruccion
console.log(etiqueta);
// expresion
etiqueta = 'horas: ' + 12 + 12;
//comparaciones
// <> >= <= == !=
