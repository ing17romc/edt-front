import React, { useState } from 'react';
import { getValueInput } from '../../components/utils/functions';
import { civilStatus } from '../data';
//import UI from '../../components/controls';
import UI from 'edt-lib';

/**
 * @decriptionFuntion Seach Results Component
 * @author Rafael Orlando Márquez Cedeño
 */


const Form = () => {

    const [state, setstate] = useState({
        name: 'Rafael Orlando',
        lastName: 'Márquez Cedeño',
        dni: 'MACR860512',
        civilStatus: '1',
        gender: '',
        noticePrivacy: false,
        description: '',
        birthDate: '',

        disabled: false,
        required: false,
        readOnly: false,

    });

    const [loading, setloading] = useState(false);


    const onInputChange = e => {
        const object = getValueInput(e);
        if (e) {
            setstate(
                {
                    ...state,
                    [object.key]: object.value,
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted`);    
    }

    return <>

        {loading && <UI.Spinner />}
        <form onSubmit={handleSubmit}>
        <div className='container-body'>
            <div className='grid-primary'>
                <div className='start-1 size-12 padding-v-20'>
                    <UI.Title label='Cliente' />
                </div>

                <div className='grid-secondary'>

                    <div className='start-1 size-5 padding-v-20'>
                        <h4>Datos Personales</h4>
                    </div>

                    <div className='start-13 size-3 padding-v-20'>
                        <UI.CheckButton id='disabled' label='disabled' eventChange={e => onInputChange(e)} checked={state.disabled} />
                    </div>
                    <div className='size-3 padding-v-20'>
                        <UI.CheckButton id='readOnly' label='readOnly' eventChange={e => onInputChange(e)} checked={state.readOnly} />
                    </div>
                    <div className='size-2 padding-v-20'>
                        <UI.CheckButton id='required' label='required' eventChange={e => onInputChange(e)} checked={state.required} />
                    </div>


                    <div className='start-1 size-2 padding-v-20'>
                        Genero
                    </div>
                    <div className='size-3 padding-v-20'>
                        <UI.RadioButton id='man' name='gender' value={state.gender} label='Hombre' eventChange={e => onInputChange(e)} disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>
                    <div className='size-3 padding-v-20'>
                        <UI.RadioButton id='woman' name='gender' value={state.gender} label='Mujer' eventChange={e => onInputChange(e)} disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>

                    <div className='start-1 size-7 padding-v-20'>
                        <UI.TextBox id='name' value={state.name} eventChange={e => onInputChange(e)} titleBottom='Nombres' disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>
                    <div className='size-7 padding-v-20'>
                        <UI.TextBox id='lastName' value={state.lastName} eventChange={e => onInputChange(e)} titleBottom='Apellidos' disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>

                    <div className='size-6 padding-v-20'>
                        <UI.DatePicker id='birthDate' value={state.birthDate} eventChange={e => onInputChange(e)} title='Fecha de Nacimiento' disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>

                    <div className='start-1 size-7 padding-v-20'>
                        <UI.Selector
                            id='civilStatus'
                            value={state.civilStatus}
                            options={civilStatus}
                            eventChange={e => onInputChange(e)}
                            titleBottom='Estado civil'
                            disabled={state.disabled} required={state.required} readOnly={state.readOnly}
                        />
                    </div>

                    <div className='size-7 padding-v-20'>
                        <UI.TextBox id='dni' value={state.dni} eventChange={e => onInputChange(e)} titleBottom='Doc. Identificación' disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>

                    <div className='start-1 size-20 padding-v-20'>
                        <UI.TextArea rows={4} id='description' value={state.description} placeholder='Escriba aquí' title='Dirección' eventChange={e => onInputChange(e)} disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>

                    <div className='start-1 size-1 padding-v-20 center'>
                        <UI.CheckButton id='noticePrivacy' eventChange={e => onInputChange(e)} checked={state.noticePrivacy} disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>
                    <div className='size-6 padding-v-20'>
                        <UI.TextButton id='btnNoticePrivacy' text='Aviso de privacidad ' onClick={e => alert('clic Aviso privacidad')} disabled={state.disabled} required={state.required} readOnly={state.readOnly} />
                    </div>

                </div>

            </div>


        </div>
        <div className='grid-primary padding-v-10'>

            <div className='start-9 size-2 padding-v-10'>
                <UI.Button title='Cargando' type='secondary' onClick={(e) => setloading(true)} disabled={state.disabled} />
            </div>
            <div className='size-2 padding-v-10'>
                <UI.Button title='Continue' type='primary' disabled={state.disabled} />
            </div>

        </div>

    </form>

    </>;
};

export default Form;
