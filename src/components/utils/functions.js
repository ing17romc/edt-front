const funciones = {};

export const jsonToArray = (json) => {
    const result = [];
    for (var i in json)
        result.push(json[i]);
    return result;
}

export const getOptionsSelector = (json) => {
    const result = [];
    for (var i in json)
        result.push({key:json[i], value: json[i]});
    return result;
}

export const getValueInput = e => {
    if (e && e.target) {
        if (e.target.tagName.toLowerCase() === 'input') {
            if (e.target.type.toLowerCase() === 'checkbox') {
                return { key: e.target.name, value: e.target.checked };
            } else if (e.target.type.toLowerCase() === 'radio') {
                return { key: e.target.name, value: e.target.id };
            } else {
                return { key: e.target.name, value: e.target.value };
            }
        }
        else if (e.target.tagName.toLowerCase() === 'button') {
            return { key: e.target.id, value: '' };
        }
        else if (e.target.tagName.toLowerCase() === 'textarea' ||  e.target.tagName.toLowerCase() === 'select' ) {
            return { key: e.target.id, value: e.target.value };
        }
    } else if (e) {
        return { key: e.id, value: e.value }
    }
    else {
        return null;
    }
};

funciones.actualizarElemento = (lista, campoABuscar, valorABucar, campoACambiar, valorNuevo) => {
    lista.forEach(function (elemento) {
        if (elemento[campoABuscar] === valorABucar) {
            elemento[campoACambiar] = valorNuevo;
        }
    });
    return lista;
};

funciones.actualizarJSON = (json, nuevoJson) => {
    for (const clave in json) {
        if (json.hasOwnProperty(clave) && nuevoJson.hasOwnProperty(clave)) {
            json[clave] = nuevoJson[clave];
        }
    }
};

export const validarValor = (valorNuevo, valorInicial) => {
    if (valorNuevo === undefined || valorNuevo === null) {
        return valorInicial;
    } else { return valorNuevo; }
};

export const ternaryOperation = (condicion, valorVerdadero, valorFalso) => {
    if (condicion) {
        return valorVerdadero;
    } else {
        return valorFalso;
    }
};

export const soloNumero = valor => validarValor(valor, '').replace(/[^0-9]/g, '');
// falta los acentos y la Ñ
export const soloAlfanumericoConEspacio = valor => validarValor(valor, '').replace(/[^\wñÑáÁéÉíÍóÓúÚ\s]/g, '');
// falta los acentos y la Ñ
export const soloAlfanumericoSinEspacio = valor => validarValor(valor, '').replace(/[\W]/g, '');

export const textoMinusculas = valor => validarValor(valor, '').toLowerCase();

export const textoMayusculas = valor => validarValor(valor, '').toUpperCase();

export const textoCapitalizar = valor => validarValor(valor, '').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));


export default funciones;
