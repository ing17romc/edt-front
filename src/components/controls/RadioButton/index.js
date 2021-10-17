import React from 'react';
import PropTypes from 'prop-types';
import { STYLE_STATUS_CONTROL } from '../../utils/constant';

/**
 * @decription Component RadioButton
 * @author Rafael Orlando Márquez Cedeño
 * @param id Text to specify a unique.
 * @param name Text to specify the name of component.
 * @param label Text to display in the component.
 * @param disabled Boolean value to show the component with disabled style (by default it is false).
 * @param required Boolean value to show the component with required style (by default it is false).
 * @param readOnly Boolean value to show the component read only (by default it is false).
 * @param value Value handled by the component
 * @param eventChange Function that will be invoked when there is a change.
 * @returns Returns the code of an html element with the characteristics of the 'RadioButton'.
 **/

const RadioButton = ({
	id,
	name,
	label,
	disabled,
	required,
	readOnly,
	value,
	eventChange,
	ref = null,
}) => {
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
		<div className={`radiobutton ${style()}`}>
			<input
				type='radio'
				id={id}
				name={name}
				required={!disabled && required && !value}
				disabled={disabled}
				value={value}
				checked={id === value}
				onChange={e => {
					if (!readOnly) {
						eventChange(e);
					}
				}}
				ref={ref}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

RadioButton.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	readOnly: PropTypes.bool,
	value: PropTypes.string,
	eventChange: PropTypes.func.isRequired,
	ref: PropTypes.object,
};

export default RadioButton;
