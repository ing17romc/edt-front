import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import UI from 'edt-lib';
import UI from '../../components';

const Menu = ({ options }) => {
	const history = useHistory();

	return (
		<UI.Menu
			options={options}
			getCurrentPath={path => history.push(path)}
		/>
	);
};

Menu.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	),
};

export default Menu;
