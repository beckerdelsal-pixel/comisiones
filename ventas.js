const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;
}

function validarInput(idInput, idError) {
    let input = document.getElementById(idInput);
    let mensaje = document.getElementById(idError);
    let valor = input.value.trim();

    // Limpiar mensaje anterior
    mensaje.textContent = "";

    // No puede estar vacío
    if (valor === "") {
        mensaje.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    // Solo números
    if (!/^\d+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números.";
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}

function calcular() {

    if (
        !validarInput("txtSueldoBase", "errorSueldoBase") ||
        !validarInput("txtVentas", "errorVentas") ||
        !validarInput("txtPrecio", "errorPrecio")
    ) {
        return;
    }

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