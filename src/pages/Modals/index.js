import React, { useState } from 'react';
import { getValueInput, getOptionsSelector } from '../../components/utils/functions';
import { TYPE_NOTIFICATION } from '../../components/utils/constant';
import { httpCodes } from '../data';
import UI from '../../components/controls';

/**
 * @decriptionFuntion Seach Results Component
 * @author Rafael Orlando Márquez Cedeño
 */


const Modales = () => {

    const [state, setstate] = useState({
        typeNotification: 'info',
        httpCode: 500,
    });


    const onInputChange = e => {
        const object = getValueInput(e);
        console.log(object)
        if (e) {
            setstate(
                {
                    ...state,
                    [object.key]: object.value,
                });
        }
    };

    const [modal, setModal] = useState(false);
    const [modalNotifications, setModalNotifications] = useState(false);
    const [modalHttpMessage, setModalHttpMessage] = useState(false);


    return <>

        <div className='container-body'>
            <div className='grid-primary '>

                <div className='start-1 size-12 padding-v-20'>
                    <UI.Title label='Ejemplos modales' />
                </div>

                <div className='grid-secondary  padding-v-40'>

                    <div className='start-1 size-7 padding-v-10'>
                        <UI.Selector
                            id='typeNotification'
                            titleTop='Tipos de notificación'
                            value={state.typeNotification}
                            options={getOptionsSelector(TYPE_NOTIFICATION)}
                            eventChange={e => onInputChange(e)}
                        />
                    </div>


                    <div className='size-7 padding-v-10'>
                        <UI.Selector
                            id='httpCode'
                            titleTop='Codigos http'
                            value={state.httpCode}
                            options={httpCodes}
                            eventChange={e => onInputChange(e)}
                        />
                    </div>




                    <div className='start-1 size-7 padding-v-10'>
                        <UI.Button title='Mostrar modal de notificaciones' type='secondary' onClick={() => { if (state.typeNotification) { setModalNotifications(!modalNotifications) } }} />
                    </div>

                    <div className=' size-7 padding-v-10'>
                        <UI.Button title='Mostrar modal respuesta http' type='secondary' onClick={() => setModalHttpMessage(!modalHttpMessage)} />
                    </div>

                    <div className=' size-6 padding-v-10'>
                        <UI.Button title='Mostrar Generico' type='secondary' onClick={() => setModal(!modal)} />
                    </div>

                </div>

            </div>
        </div>

        <UI.Modal show={modal} eventModal={() => setModal(!modal)} >
            <div className='padding-v-40 padding-h-40'>
                <h1>Example Modal!</h1>
            </div>
        </UI.Modal>

        <UI.ModalNotifications
            showModal={modalNotifications}
            eventModal={() => setModalNotifications(!modalNotifications)}
            title={state.typeNotification}
            type={state.typeNotification}
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            eventContinue={() => setModalNotifications(!modalNotifications)} />

        <UI.ModalHttpMessage
            showModal={modalHttpMessage}
            eventModal={() => setModalHttpMessage(!modalHttpMessage)}
            code={parseInt(state.httpCode)}
            title={'Not Found'}
            details="This class of status code is intended for situations in which the error seems to have been caused by the client. Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents should display any included entity to the user."
            message="The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible."
            eventContinue={() => setModalHttpMessage(!modalHttpMessage)} />

    </>;
};

export default Modales;
