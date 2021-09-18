import React from 'react';
import PropTypes from 'prop-types';
import { SIZE_CONTROL } from '../../utils/constant';
import { icons } from '../../utils/icons';
import { jsonToArray } from '../../utils/functions';

const nameIcons = icons.map(element => element.key);

const getImg = (_name) => {
    const result = icons.find(element => {
        return element.key === _name
    });

    if (result) {
        return result.value;
    } else {
        return '';
    }
}

const Icon = ({ name, size = SIZE_CONTROL.MD }) => {
    return <div className={`container-icon ${size}`} >
        <img loading='lazy' id={name} src={getImg(name)} alt={name} />
    </div>;
}

Icon.propTypes = {
    name: PropTypes.oneOf(nameIcons).isRequired,
    size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL)),
};

export default Icon;
