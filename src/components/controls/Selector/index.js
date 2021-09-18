import React from 'react';
import PropTypes from 'prop-types';

/**
 * @decription Component Selector
 * @author Rafael Orlando Márquez Cedeño
 * @param id Text to specify a unique.
 * @param titleTop Text to component top title.
 * @param titleBottom Text to component bottom title.
 * @param disabled Boolean value to show the component with disabled style (by default it is false).
 * @param required Boolean value to show the component with required style (by default it is false).
 * @param readOnly Boolean value to show the component read only (by default it is false).
 * @param value Value handled by the component
 * @param eventChange Function that will be invoked when there is a change.
 * @param options List of options the component.
 * @returns Returns the code of an html element with the characteristics of the "Selector".
**/

const Selector = ({ id, titleTop, titleBottom, value, required, disabled, readOnly, eventChange, options = [], ref = null }) => {

    const onChange = e => {
        if (eventChange && !disabled) {
            eventChange(e);
        }
    };

    const style = () => {
        if (disabled) {
            return "disabled";
        } else if (readOnly) {
            return "readOnly";
        } else if (required && !value) {
            return "required";
        } else {
            return "";
        }
    };

    const validate = (newValue, initialValue) => {
        if (newValue === undefined || newValue === null) {
            return initialValue;
        } else { return newValue; }
    };

    return <div className={'control-container '} >
        <div className={style()} >
            <span htmlFor={id} >{titleTop}</span>
            <select
                id={id}
                name={id}
                value={value}
                onChange={e => onChange(e)}
                disabled={readOnly | disabled}
                required={required}
                ref={ref}>
                {
                    options.map((element, index) =>
                        <option
                            key={index}
                            value={validate(element.key, element.value)}>

                            {element.value}

                        </option>
                    )
                }
            </select>
            <span htmlFor={id}>
                {titleBottom}
            </span>
        </div>
    </div>;

};

Selector.propTypes = {
    id: PropTypes.string.isRequired,
    titleTop: PropTypes.string,
    titleBottom: PropTypes.string,

    value: PropTypes.any.isRequired,
    eventChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,

    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            key: PropTypes.string,
        })),
};

export default Selector;
