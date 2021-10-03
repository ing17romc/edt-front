import React from 'react';
import PropTypes from 'prop-types';
import { SIZE_CONTROL, ICONS } from '../../utils/constant';
import { jsonToArray } from '../../utils/functions';

/**
 * @decription Icon Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'Icon'.
 */

const Icon = ({ name, size = SIZE_CONTROL.MD }) => {

    return <div className={`container-icon ${size}`} >
        <div className='material-icons'>{name}</div>
    </div>;

};

Icon.propTypes = {
    name: PropTypes.oneOf(ICONS).isRequired,
    size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL)),
};

export default Icon;
