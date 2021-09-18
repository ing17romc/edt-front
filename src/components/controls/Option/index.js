import React from 'react';
import PropTypes from 'prop-types';
import { icons } from '../../utils/icons';
import { Link } from 'react-router-dom';

const nameIcons = icons.map(element => element.key);

const Option = ({ label = 'label', path = '/', nameIcon = 'AppDefault' }) => {

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

    return <Link className='container-option ' to={path} >
        <img loading='lazy' id={nameIcon} src={getImg(nameIcon)} alt={nameIcon} />
        <hr />
        <p> {label} </p>
    </Link>;
}

Option.propTypes = {
    nameIcon: PropTypes.oneOf(nameIcons).isRequired,
};

export default Option;
