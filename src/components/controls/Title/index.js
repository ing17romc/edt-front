import React from 'react';
import PropTypes from 'prop-types';

/**
 * @decription Component Title
 * @author Rafael Orlando Márquez Cedeño
 * @param label Text to display in the component.
 * @param secundary Boolean value to show the component with secundary title (by default it is false).
**/

const Title = ({ label, secundary }) => {

    let component;

    if (secundary) {
        component = <div className="title">
            <h4 className="font-bold">{label}</h4>
            <div className='line' />
        </div>;
    } else {
        component = <div className="title">
            <h2 className="font-bold">{label}</h2>
            <div className='line' />
        </div>;
    }

    return component;
};

Title.propTypes = {
    label: PropTypes.string.isRequired,
    secundary: PropTypes.bool,
};

export default Title;
