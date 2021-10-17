import React from 'react';
import Modal from '../Modal';
import Title from '../Title';
import PropTypes from 'prop-types';

const propTypes = {
	showModal: PropTypes.bool,
	eventModal: PropTypes.func,
	pdf: PropTypes.string.isRequired,
};

const ModalViewerPDF = ({ pdf, showModal, eventModal }) => {
	return (
		<Modal show={showModal} eventModal={e => eventModal(e)}>
			<div className='body-viewer-pdf'>
				<div className='grid-primary'>
					<div className='start-1 size-12 '>
						<Title label='Visor de PDF' secundary={true} />
					</div>

					<div className='start-1 size-12 padding-v-30'>
						<div className=' padding-v-30'>
							<iframe
								title='Viewer PDF'
								src={pdf}
								frameBorder='0'
							/>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

ModalViewerPDF.propTypes = propTypes;

export default ModalViewerPDF;
