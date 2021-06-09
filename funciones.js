function saludar() {
    console.log("Hola Mundo");
}
saludar();

function saludarPorNombre(nombre){
    console.log("Hola " + nombre);
}
saludarPorNombre("Gerardo");
let amigo = 'PAPAS';
saludarPorNombre(amigo);

function saludarElaborado(nombre, saludo) {
    console.log(saludo + nombre);
}
saludarElaborado("PAPAS ", "Buenos dias ");

function calcularCircunferencia(r){
    //2 * PI * r
    const PI = 3.14;
    return 2 * PI * r;
}
let circunferencia = calcularCircunferencia("10");
console.log(circunferencia);
