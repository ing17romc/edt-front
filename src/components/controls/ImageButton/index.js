import React from 'react';
import PropTypes from 'prop-types';
import {
	STYLE_STATUS_CONTROL,
	SIZE_CONTROL,
	ICONS,
} from 'components/utils/constant';
import { ternaryOperation, jsonToArray } from 'components/utils/functions';
import Icon from 'components/controls/Icon';
/**
 * @decription Component ImageButton
 * @author Rafael Orlando Márquez Cedeño
 * @param id Text to specify a unique.
 * @param text Text to display in the component.
 * @param disabled Boolean value to show the component with disabled style (by default it is false).
 * @param onClick Function that is executed when the button's onClick event is fired.
 * @returns Returns the code of an html element with the characteristics of the 'ImageButton'.
 */

const ImageButton = ({
	id,
	text,
	icon,
	size = SIZE_CONTROL.MD,
	disabled,
	onClick,
}) => {
	const style = () => {
		return `imageButton ${ternaryOperation(
			disabled,
			STYLE_STATUS_CONTROL.DISABLED,
			''
		)}`;
	};

	return (
		<abbr title={text}>
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
				<Icon name={icon} size={size} />
			</button>
		</abbr>
	);
};

ImageButton.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string,
	icon: PropTypes.oneOf(ICONS).isRequired,
	size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL)),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ImageButton;
