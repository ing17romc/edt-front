import React from 'react';
import PropTypes from 'prop-types';
import { SIZE_CONTROL, STYLE_CONTROL } from '../../utils/constant';
import { jsonToArray, ternaryOperation } from '../../utils/functions';

/**
 * @decription Component Button
 * @author Rafael Orlando Márquez Cedeño
 * @param id Text to specify a unique.
 * @param title Text to display in the component.
 * @param disabled Boolean value to show the component with disabled style (by default it is false).
 * @param onClick Function that is executed when the button's onClick event is fired.
 * @param type String value to style of button. the default value is 'primary'.
 * Values: primary, secundary.
 * @param size Larger or smaller button value. the default value is 'md'.
 * Values: lg, md, sm, xs. 
 * @returns Returns the code of an html element with the characteristics of the "Button".
 */

const Button = ({ id, title, disabled, onClick, type = STYLE_CONTROL.PRIMARY, size = SIZE_CONTROL.MD }) => {

    return <button
        id={id}
        className={`${type} ${size}`}
        type={ternaryOperation(onClick, 'button', 'submit')}
        onClick={e => { if (onClick) onClick(e) }}
        disabled={disabled}>
        {title}
    </button>
};

Button.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(jsonToArray(STYLE_CONTROL)),
    size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL)),
};

export default Button;
