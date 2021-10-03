import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @decription Component Button
 * @author Rafael Orlando Márquez Cedeño
 * @param show Boolean value to show the Modal
 * @param eventModal Function that is executed to close or open the Modal 
 * @param children Content the modal
 * @returns Returns the code of an html element with the characteristics of the 'Modal'.
 **/

const Modal = ({ show, eventModal, children }) => {

    const [state, setState] = useState(show);

    const closeModal = e => {
        eventModal(e);
    };

    useEffect(() => {
        setState(show);
    }, [show]);

    return <div>
        <ReactModal isOpen={state} onRequestClose={closeModal} style={style} shouldCloseOnOverlayClick={false}>
            <div className='modal-container'>
                <div className='padding-v-20 padding-h-20 '>
                    <h4 className='modal-close-button' onClick={closeModal}>X</h4>
                </div>
            </div>

            <div className='modal-body '>
                {children}
            </div>
        </ReactModal>
    </div>;
}

Modal.propTypes = {
    eventModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

let elementoContenedorPrincipal = document.getElementById('root');
if (elementoContenedorPrincipal === null) {
    elementoContenedorPrincipal = document.createElement('div');
    elementoContenedorPrincipal.id = 'root';
    document.body.appendChild(elementoContenedorPrincipal);
}

ReactModal.setAppElement('#root');

const style = {
    overlay: {
        backgroundColor: '#000F0880',
        zIndex: 10,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '0px',
    },
};

export default Modal;
