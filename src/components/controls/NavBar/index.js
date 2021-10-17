import React from 'react';
import PropTypes from 'prop-types';

/**
 * @decription NavBar Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'Main Menu'.
 */

const NavBar = ({ leftOptions, rightOptions, correntPath, getCurrentPath }) => {
	const renderOption = (index, path, name) => (
		<label
			key={index}
			className={path === correntPath ? 'active' : ''}
			onClick={() => getCurrentPath(path)}>
			{name}
		</label>
	);

	return (
		<div>
			<div className=' container-nav-bar-father '>
				<div className='container-nav-bar bg-primary-1'>
					<form className='grid-primary padding-v-0'>
						<div className='start-1 size-12'>
							<div className='topnav font-22'>
								{leftOptions.map((element, index) =>
									renderOption(
										index,
										element.path,
										element.name
									)
								)}
								<div className='topnav-right'>
									{rightOptions.map((element, index) =>
										renderOption(
											index,
											element.path,
											element.name
										)
									)}
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className='nav-bar-margin-bootom ' />
		</div>
	);
};

NavBar.propTypes = {
	leftOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	rightOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	correntPath: PropTypes.string.isRequired,
	getCurrentPath: PropTypes.func.isRequired,
};

export default NavBar;
