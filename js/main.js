let cueva;

let compra;

let venta;

while (true) {
    cueva = prompt('¿Desea comprar o vender divisas?').toLowerCase();

    if (cueva == 'compra' || cueva == 'comprar') {
        compra = prompt('¿Qué tipo de moneda desea comprar?').toLowerCase();
        break;
    }

    else if (cueva == 'venta' || cueva == 'vender') {
        venta = prompt('¿Qué tipo de moneda desea vender?').toLowerCase();
        break;
    }

    else {
        alert('Elija una opción posible');
    }
}

let monto;

while (true) {
    monto = Number(prompt('Por favor, ingrese su monto a convertir'));

    if (isNaN(monto)) {
        alert('Por favor, ingrese un número')
    }

    else {
        break
    }
}

if (compra == 'dolar' || compra == 'dolares') {
    alert('Usted puede comprar U$D' + (monto / 927));
}

else if (compra == 'euro' || compra == 'euros') {
    alert('Usted puede comprar €' + (monto / 1006));
}

if (venta == 'dolar' || venta == 'dolares') {
    alert('Usted puede comprar ' + (monto * 927) + ' pesos');
}

else if (venta == 'euro' || venta == 'euros') {
    alert('Usted puede comprar ' + (monto * 1006) + ' pesos');
}