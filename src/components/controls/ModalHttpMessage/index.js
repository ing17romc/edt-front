import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Title from '../Title';
import TextArea from '../TextArea';

/**
 * @decription ModalHttpMessage Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'ModalHttpMessage'.
 */

const ModalHttpMessage = ({
	showModal,
	eventModal,
	code,
	title,
	message,
	details,
}) => {
	const style = codeHttp => {
		switch (true) {
			case codeHttp < 200:
				return 'code-one-hundred';
			case codeHttp < 300:
				return 'code-two-hundred';
			case codeHttp < 400:
				return 'code-three-hundred';
			case codeHttp < 500:
				return 'code-four-hundred';
			case codeHttp < 600:
				return 'code-five-hundred';
			default:
				return '';
		}
	};

	return (
		<Modal show={showModal} eventModal={e => eventModal(e)}>
			<div className='body-generic-http-message'>
				<div className=' grid-primary'>
					<div className='start-1 size-12 '>
						<Title label='Mensaje HTTP' secundary={true} />
					</div>
					<div className=' grid-secondary padding-v-50'>
						<div className='center start-1 size-20   '>
							<h1 className={style(code)}>{code} </h1>
						</div>

						<div className='center start-1 size-20  padding-v-10  '>
							<h4 className={style(code)}>{title}</h4>
						</div>
					</div>

					<div className=' start-1 size-12 '>
						<p className='font-18'> Mensaje </p>
					</div>

					<div className=' start-1 size-12 padding-v-10  '>
						<p className='font-16'> {message} </p>
					</div>

					<div className='start-1 size-12 padding-v-50  '>
						<TextArea
							rows={6}
							id='Detalles'
							value={details}
							title='Detalles'
							readOnly={true}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

ModalHttpMessage.propTypes = {
	showModal: PropTypes.bool.isRequired,
	eventModal: PropTypes.func,
	code: PropTypes.number,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	details: PropTypes.string,
};

export default ModalHttpMessage;
