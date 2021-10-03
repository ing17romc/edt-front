import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from '../../utils/constant';
import { Link } from 'react-router-dom';

/**
 * @decription Option the a menu Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'Option Menu'.
 */

const Option = ({ label, path, icon }) => {

    return <Link className='container-option ' to={path} >
        <div className='material-icons'>{icon}</div>
        <hr />
        <p> {label} </p>
    </Link>;

};

Option.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(ICONS).isRequired,
};

export default Option;
