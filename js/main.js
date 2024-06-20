let cueva;

let monto;

let compra;

let venta;

let tipoDolar;

let tipoEuro;

let tipoCambio;

let cambioElegido;

let stringObjetos

let consulta = prompt('¿Desea consultar precios o intercambiar divisas?')

let dolar = [];

let dolares = document.createElement("h2");

dolares.innerText = "Dolarucos!!!";

document.body.appendChild(dolares);

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

if (consulta == 'consultar' || consulta == 'consultar precios') {
    while (true) {
        consulta = prompt('Desea consultar por Dolares o por Euros?').toLowerCase();

        if (consulta == 'dolares' || consulta == 'dolar') {
            tipoCambio = parseInt(prompt("¿qué tipo de dolar queria consultar? \n0- Oficial  \n1- Blue \n2- MEP"));

            cambioElegido = dolar.find(obj => obj.id === tipoCambio);

            if (!isNaN(tipoCambio) && tipoCambio >= 0 && tipoCambio < dolar.length) {
                stringObjetos = JSON.stringify(dolar[tipoCambio]);

                stringObjetos = stringObjetos.slice(1, -1);

                alert(stringObjetos);
            }

            else {
                alert('Elija un número válido');
            }
        }

        else if (consulta == 'euros' || consulta == 'euro') {
            alert('no papi, el euro cambia mucho')
        }

        else {
            alert('Elija una opción posible');
        }
    }
}

else if (consulta == 'intercambiar' || consulta == 'intercambiar divisas') {
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


if (consulta == 'intercambiar' || consulta == 'intercambiar divisas') {
    while (true) {
        monto = Number(prompt('Por favor, ingrese su monto a convertir'));

        if (isNaN(monto)) {
            alert('Por favor, ingrese un número')
        }

        else {
            break
        }
    }
}

if ((cueva == 'compra' || cueva == 'comprar') && tipoDolar == 'oficial') {
    alert('Usted puede comprar U$D' + (monto / oficial.venta).toFixed(2) + 'al cambio oficial');
}

else if ((cueva == 'compra' || cueva == 'comprar') && tipoDolar == 'blue') {
    alert('Usted puede comprar U$D' + (monto / blue.venta).toFixed(2) + 'blue');
}

else if ((cueva == 'compra' || cueva == 'comprar') && tipoDolar == 'mep') {
    alert('Usted puede comprar U$D' + (monto / mep.venta).toFixed(2) + 'MEP');
}

if ((cueva == 'venta' || cueva == 'vender') && tipoDolar == 'oficial') {
    alert('Usted puede comprar $' + (monto * oficial.compra).toFixed(2) + ' pesos');
}

else if ((cueva == 'venta' || cueva == 'vender') && tipoDolar == 'blue') {
    alert('Usted puede comprar $' + (monto * blue.compra).toFixed(2) + ' pesos');
}

else if ((cueva == 'venta' || cueva == 'vender') && tipoDolar == 'mep') {
    alert('Usted puede comprar $' + (monto * mep.compra).toFixed(2) + ' pesos');
}


if ((cueva == 'compra' || cueva == 'comprar') && tipoEuro == 'oficial') {
    alert('Usted puede comprar €' + (monto / euro.oficialVenta).toFixed(2) + 'al cambio oficial');
}

else if ((cueva == 'compra' || cueva == 'comprar') && tipoEuro == 'paralelo') {
    alert('Usted puede comprar €' + (monto / euro.paraleloVenta).toFixed(2) + 'al paralelo');
}

if ((cueva == 'venta' || cueva == 'vender') && tipoEuro == 'oficial') {
    alert('Usted puede comprar $' + (monto * euro.oficialVenta).toFixed(2) + 'pesos');
}

else if ((cueva == 'compra' || cueva == 'comprar') && tipoEuro == 'paralelo') {
    alert('Usted puede comprar $' + (monto * euro.paraleloVenta).toFixed(2) + 'pesos');
}