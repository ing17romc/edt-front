import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from 'components/utils/constant';

/**
 * @decription Option the a menu Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'Option Menu'.
 */

const Option = ({ label, path, icon, getCurrentPath }) => {
	return (
		<div className='container-option ' onClick={() => getCurrentPath(path)}>
			<div className='material-icons'>{icon}</div>
			<hr />
			<p> {label} </p>
		</div>
	);
};

Option.propTypes = {
	label: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	icon: PropTypes.oneOf(ICONS).isRequired,
	getCurrentPath: PropTypes.func.isRequired,
};

export default Option;
