function calcularIva(importe){
    return importe * 21 /100
}
function calcularPago(importe,iva){
    return importe +iva
}
let importe = 800;
let modelo = "Custom";
let iva = calcularIva(importe);
console.log("Tabla Burton: "+ modelo + " -> A pagar "+calcularPago(importe,iva));