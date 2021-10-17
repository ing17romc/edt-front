import React from 'react';
import PropTypes from 'prop-types';
import { STYLE_CONTROL, STYLE_STATUS_CONTROL } from 'components/utils/constant';
import { ternaryOperation, jsonToArray } from 'components/utils/functions';

/**
 * @decription Component Button
 * @author Rafael Orlando Márquez Cedeño
 * @param id Text to specify a unique.
 * @param text Text to display in the component.
 * @param disabled Boolean value to show the component with disabled style (by default it is false).
 * @param type String value to style of button. the default value is 'primary'.
 * Values: primary, secundary.
 * @param onClick Function that is executed when the button's onClick event is fired.
 * @returns Returns the code of an html element with the characteristics of the 'Button'.
 */

const TextButton = ({
	id,
	text,
	disabled,
	onClick,
	type = STYLE_CONTROL.PRIMARY,
}) => {
	const style = () => {
		return `textButton ${type} ${ternaryOperation(
			disabled,
			STYLE_STATUS_CONTROL.DISABLED,
			''
		)}`;
	};

	return (
		<div>
			<button
				className={style()}
				id={id}
				type={ternaryOperation(onClick, 'button', 'submit')}
				name={id}
				disabled={disabled}
				onClick={e => {
					if (!disabled) {
						onClick(e);
					}
				}}>
				{text}
			</button>
		</div>
	);
};

TextButton.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(jsonToArray(STYLE_CONTROL)),
};

export default TextButton;
