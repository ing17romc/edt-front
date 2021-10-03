
export const jsonToArray = (json) => {
    const result = [];
    for (var i in json)
        result.push(json[i]);
    return result;
}

export const getOptionsSelector = (json) => {
    const result = [];
    for (var i in json)
        result.push({ key: json[i], value: json[i] });
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
        else if (e.target.tagName.toLowerCase() === 'textarea' || e.target.tagName.toLowerCase() === 'select') {
            return { key: e.target.id, value: e.target.value };
        }
    } else if (e) {
        return { key: e.id, value: e.value }
    }
    else {
        return null;
    }
};

export const getInitialValue = (newValue, initialValue) => {
    if (newValue === undefined || newValue === null) {
        return initialValue;
    } else { return newValue; }
};

export const ternaryOperation = (condicion, valorVerdadero, valorFalso) => {
    if (condicion) {
        return valorVerdadero;
    } else {
        return valorFalso;
    }
};

export const onlyNumber = value =>
    getInitialValue(value, '').replace(/[^0-9]/g, '');

export const onlyAlphanumericWithSpace = value =>
    getInitialValue(value, '').replace(/[^\wñÑáÁéÉíÍóÓúÚ\s]/g, '');

export const onlyAlphanumericWithoutSpace = value =>
    getInitialValue(value, '').replace(/[\W]/g, '');

export const lowerCaseText = value =>
    getInitialValue(value, '').toLowerCase();

export const upperCaseText = value =>
    getInitialValue(value, '').toUpperCase();

export const capitalText = value =>
    getInitialValue(value, '').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
