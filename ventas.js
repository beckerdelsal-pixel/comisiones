const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;
}

function calcular(){

    //recuperamos propiedades de las cajas de texto
    //let cmpSueldoBase = document.getElementById("txtSueldoBase");

   // let cmpVentas = document.getElementById("txtVentas");
   //let cmpPrecio = document.getElementById("txtPrecio");

    //recuperamos los valores de las cajas de texto
    //let sueldoBaseStr = cmpSueldoBase.value;
    let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    let ventasStr = recuperarTexto("txtVentas");
    let precioStr = recuperarTexto("txtPrecio");

    //convertimos los valores a tipo numerico

    //let sueldoBase = parseFloat(sueldoBaseStr);
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarEntero("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    //calculamos la comisión
    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;



    //let spSueldoBase = document.getElementById("spSueldoBase");
    //let spComision = document.getElementById("spComision");
    //let spTotal = document.getElementById("spTotal");


    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}