import React from 'react';
import PropTypes from 'prop-types';
import UI from 'components/controls';
import { TYPE_NOTIFICATION } from 'components/utils/constant';
import { jsonToArray } from 'components/utils/functions';

/**
 * @decription ModalNotifications Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'ModalNotifications'.
 */

const ModalNotifications = ({
	title,
	message,
	details,
	type = TYPE_NOTIFICATION.INFO,
	eventContinue,
	showModal,
	eventModal,
}) => {
	const getText = () => {
		switch (type) {
			case TYPE_NOTIFICATION.ERROR:
				return 'X';
			case TYPE_NOTIFICATION.WARNING:
				return '!';
			case TYPE_NOTIFICATION.INFO:
				return 'i';
			case TYPE_NOTIFICATION.SUCCESSFULL:
				return '✔';
			default:
				return '';
		}
	};

	return (
		<UI.Modal show={showModal} eventModal={e => eventModal(e)}>
			<div className='body-generic-notifications '>
				<div className='grid-primary'>
					<div className='start-1 size-12 '>
						<UI.Title label={title} secundary={true} />
					</div>

					<div className='center start-1 size-12 padding-v-40  '>
						<div className={`circle ${type} center`}>
							<h1>{getText()}</h1>
						</div>
					</div>

					<div className='center start-1 size-12 padding-v-30  '>
						<p className='font-16'> {message} </p>
					</div>

					<div className='center start-1 size-12 padding-v-30  '>
						<p className='font-14'> {details} </p>
					</div>

					<div className='padding-v-20 start-9 size-4'>
						<UI.Button
							title='Continuar'
							type='primary'
							onClick={e => eventContinue(e)}
						/>
					</div>
				</div>
			</div>
		</UI.Modal>
	);
};

ModalNotifications.propTypes = {
	showModal: PropTypes.bool.isRequired,
	eventModal: PropTypes.func,
	type: PropTypes.oneOf(jsonToArray(TYPE_NOTIFICATION)),
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	details: PropTypes.string,
	eventContinue: PropTypes.func,
};

export default ModalNotifications;
