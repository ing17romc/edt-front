import React from 'react';
import PropTypes from 'prop-types';
import { STYLE_STATUS_CONTROL } from 'components/utils/constant';

/**
 * @decription TextArea Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'TextArea'.
 */

const TextArea = ({
	id,
	title,
	placeholder,
	value = '',
	required,
	disabled,
	readOnly,
	noPaste,
	noCopy,
	eventChange,
	eventFocus,
	eventBlur,
	eventKeyDown,
	ref = null,
	rows = 2,
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
				<span htmlFor={id}>{title}</span>
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
					onPaste={e => {
						if (noPaste) e.preventDefault();
					}}
					onCopy={e => {
						if (noCopy) e.preventDefault();
					}}
					disabled={disabled}
					required={required}
					ref={ref}
					rows={rows}
				/>
			</div>
		</div>
	);
};

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
	ref: PropTypes.object,
};

export default TextArea;
