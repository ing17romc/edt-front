import React from 'react';
import PropTypes from 'prop-types';
import { STYLE_STATUS_CONTROL } from '../../utils/constant';

/**
 * @decription Component TextBox
 * @author Rafael Orlando Márquez Cedeño
 * @param id Text to specify a unique.
 * @param titleTop Text to component top title.
 * @param placeholder Text to component placeholder.
 * @param titleBottom Text to component bottom title.
 * @param value Value handled by the component
 * @param disabled Boolean value to show the component with disabled style (by default it is false).
 * @param required Boolean value to show the component with required style (by default it is false).
 * @param readOnly Boolean value to show the component read only (by default it is false).
 * @param noPaste Boolean value to allow paste value (by default it is false).
 * @param noCopy Boolean value to allow copy value (by default it is false).
 * @param size number value to maximum character length (by default it is 200).
 * @param eventChange Function that will be invoked when there is a change.
 * @param eventFocus Function that will be invoked when the component is focused.
 * @param eventBlur Function that will be invoked when the component is out of focus.
 * @param eventKeyDown Function that will be invoked when the key is down.
 * @returns Returns the code of an html element with the characteristics of the 'TextBox'.
 **/

const TextBox = ({
	id,
	titleTop,
	placeholder,
	titleBottom,
	value,
	required,
	disabled,
	readOnly,
	noPaste,
	noCopy,
	size = 200,
	eventChange,
	eventFocus,
	eventBlur,
	eventKeyDown,
	ref = null,
}) => {
	const onChange = e => {
		if (eventChange && !disabled) eventChange(e);
	};

	const onFocus = e => {
		if (eventFocus && !disabled && !readOnly) eventFocus(e);
	};

	const onBlur = e => {
		if (eventBlur && !disabled && !readOnly) eventBlur(e);
	};

	const onKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault();
		else if (eventKeyDown && !disabled && !readOnly) eventKeyDown(e);
	};

	const style = () => {
		if (disabled) {
			return STYLE_STATUS_CONTROL.DISABLED;
		} else if (readOnly) {
			return STYLE_STATUS_CONTROL.READ_ONLY;
		} else if (required && !value) {
			return STYLE_STATUS_CONTROL.REQUIRED;
		} else {
			return '';
		}
	};

	return (
		<div className={'control-container '}>
			<div className={style()}>
				<span htmlFor={id}>{titleTop}</span>
				<input
					type='search'
					id={id}
					name={id}
					value={value}
					placeholder={placeholder}
					onKeyDown={e => onKeyDown(e)}
					onChange={e => onChange(e)}
					onFocus={e => onFocus(e)}
					onBlur={e => onBlur(e)}
					readOnly={readOnly}
					onPaste={e => {
						if (noPaste) e.preventDefault();
					}}
					onCopy={e => {
						if (noCopy) e.preventDefault();
					}}
					maxLength={size}
					size={size}
					autoComplete='off'
					disabled={disabled}
					required={required}
					ref={ref}
				/>
				<span htmlFor={id}>{titleBottom}</span>
			</div>
		</div>
	);
};

TextBox.propTypes = {
	id: PropTypes.string.isRequired,
	titleTop: PropTypes.string,
	titleBottom: PropTypes.string,
	placeholder: PropTypes.string,

	value: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	required: PropTypes.bool,

	eventChange: PropTypes.func.isRequired,
	eventFocus: PropTypes.func,
	eventBlur: PropTypes.func,
	eventKeyDown: PropTypes.func,

	readOnly: PropTypes.bool,
	noCopy: PropTypes.bool,
	noPaste: PropTypes.bool,
	size: PropTypes.number,
	ref: PropTypes.object,
};

export default TextBox;
