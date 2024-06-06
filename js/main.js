let cueva;

let monto;

let compra;

let venta;

let tipoDolar;

let tipoEuro;

while (true) {
    cueva = prompt('¿Desea comprar o vender divisas?').toLowerCase();

    if (cueva == 'compra' || cueva == 'comprar') {
        while (true) {
            compra = prompt('¿Qué tipo de moneda desea comprar? \n- Dolar \n- Euro').toLowerCase();

            if (compra == 'dolar' || compra == 'euro') {
                break;
            }

            else {
                alert('Elija una opción posible');
            }
        }
        break;
    }

    else if (cueva == 'venta' || cueva == 'vender') {
        while (true) {
            venta = prompt('¿Qué tipo de moneda desea vender? \n- Dolar \n- Euro').toLowerCase();

            if (venta == 'dolar' || venta == 'euro') {
                break;
            }

            else {
                alert('Elija una opción posible');
            }
        }
        break;
    }

    else {
        alert('Elija una opción posible');
    }
}

let dolar = [];

const oficial = {
    venta: 918,
    compra: 878
};

const blue = {
    venta: 1250,
    compra: 1230
};

const mep = {
    venta: 1276,
    compra: 1274
};

dolar.push(oficial, blue, mep);

const euro = {
    oficialVenta: 1024,
    oficialCompra: 954,
    paraleloVenta: 1359,
    paraleloCompra: 1326
}

if (cueva == 'compra' || cueva == 'comprar') {
    if (compra == 'dolar') {
        while (true) {
            tipoDolar = prompt('¿Qué tipo de dolar quiere comprar \n- Oficial  \n- Blue \n- MEP').toLowerCase();

            if (tipoDolar == 'oficial' || tipoDolar == 'blue' || tipoDolar == 'mep') {
                break;
            }

            else {
                alert('Elija una opción posible');
            }
        }
    }

    else if (compra == 'euro') {
        while (true) {
            tipoEuro = prompt('¿A qué tipo de euro quiere comprar \n- Oficial  \n- Paralelo').toLowerCase();

            if (tipoEuro == 'oficial' || tipoEuro == 'paralelo') {
                break;
            }

            else {
                alert('Elija una opción posible');
            }
        }
    }
}

else if (cueva == 'venta' || cueva == 'vender') {
    if (venta == 'dolar') {
        while (true) {
            tipoDolar = prompt('¿Qué tipo de dolar quiere vender? \n- Oficial \n- Blue \n- MEP').toLowerCase();

            if (tipoDolar == 'oficial' || tipoDolar == 'blue' || tipoDolar == 'mep') {
                break;
            }

            else {
                alert('Elija una opción posible');
            }
        }
    } else if (venta == 'euro') {
        while (true) {
            tipoEuro = prompt('¿A qué tipo de euro quiere vender? \n- Oficial \n- Paralelo').toLowerCase();

            if (tipoEuro == 'oficial' || tipoEuro == 'paralelo') {
                break;
            }

            else {
                alert('Elija una opción posible');
            }
        }
    }
}



while (true) {
    monto = Number(prompt('Por favor, ingrese su monto a convertir'));

    if (isNaN(monto)) {
        alert('Por favor, ingrese un número')
    }

    else {
        break
    }
}

if (cueva == 'compra' || cueva == 'comprar' && tipoDolar == 'oficial') {
    alert('Usted puede comprar U$D' + (monto / oficial.venta) + 'al cambio oficial');
}

else if (cueva == 'compra' || cueva == 'comprar' && tipoDolar == 'blue') {
    alert('Usted puede comprar U$D' + (monto / blue.venta) + 'blue');
}

else if (cueva == 'compra' || cueva == 'comprar' && tipoDolar == 'mep') {
    alert('Usted puede comprar U$D' + (monto / mep.venta) + 'MEP');
}

if (cueva == 'venta' || cueva == 'vender' && tipoDolar == 'oficial') {
    alert('Usted puede comprar $' + (monto * oficial.compra) + ' pesos');
}

else if (cueva == 'venta' || cueva == 'vender' && tipoDolar == 'blue') {
    alert('Usted puede comprar $' + (monto * blue.compra) + ' pesos');
}

else if (cueva == 'venta' || cueva == 'vender' && tipoDolar == 'mep') {
    alert('Usted puede comprar $' + (monto * mep.compra) + ' pesos');
}


if (cueva == 'compra' || cueva == 'comprar' && tipoEuro == 'oficial') {
    alert('Usted puede comprar €' + (monto / euro.oficialVenta) + 'al cambio oficial');
}

else if (cueva == 'compra' || cueva == 'comprar' && tipoEuro == 'paralelo') {
    alert('Usted puede comprar €' + (monto / euro.paraleloVenta) + 'al paralelo');
}

if (cueva == 'venta' || cueva == 'vender' && tipoEuro == 'oficial') {
    alert('Usted puede comprar $' + (monto * euro.oficialVenta) + 'pesos');
}

else if (cueva == 'compra' || cueva == 'comprar' && tipoEuro == 'paralelo') {
    alert('Usted puede comprar $' + (monto * euro.paraleloVenta) + 'pesos');
}