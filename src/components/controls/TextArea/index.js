import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ id, title, placeholder, value = '', required, disabled, readOnly, noPaste, noCopy, size, eventChange, eventFocus, eventBlur, eventKeyDown, ref = null, rows =2 }) => {

    const onChange = e => {
        if (eventChange && !disabled)
            eventChange(e);
    }

    const onFocus = e => {
        if (eventFocus && !disabled && !readOnly)
            eventFocus(e);
    }

    const onBlur = e => {
        if (eventBlur && !disabled && !readOnly)
            eventBlur(e);
    }

    const onKeyDown = e => {
        if (e.key === 'Enter')
            e.preventDefault();

        else if (eventKeyDown && !disabled && !readOnly)
            eventKeyDown(e);
    }

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

    return <div className={"control-container "} >
        <div className={style()} >
            <span htmlFor={id} >{title}</span>
            <textarea
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                onKeyDown={e => onKeyDown(e)}
                onChange={e => onChange(e)}
                onFocus={e => onFocus(e)}
                onBlur={e => onBlur(e)}
                readOnly={readOnly}
                onPaste={(e) => { if (noPaste) e.preventDefault() }}
                onCopy={(e) => { if (noCopy) e.preventDefault() }}
                disabled={disabled}
                required={required}
                ref={ref}
                rows={rows}
            />
        </div>
    </div>;
}

TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,

    value: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,

    eventChange: PropTypes.func,
    eventFocus: PropTypes.func,
    eventBlur: PropTypes.func,
    eventKeyDown: PropTypes.func,

    readOnly: PropTypes.bool,
    noCopy: PropTypes.bool,
    noPaste: PropTypes.bool,
    rows: PropTypes.number,
};



export default TextArea;