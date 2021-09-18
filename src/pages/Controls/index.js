import React, { useState } from 'react';
import { getValueInput } from '../../components/utils/functions';
import UI from '../../components/controls';
import { valuesSelector } from '../data';

/**
 * @decriptionFuntion Seach Results Component
 * @author Rafael Orlando Márquez Cedeño
 */


const Form = () => {

    const [state, setstate] = useState({

        text: 'This is a text example',
        checkButton: false,
        radioButton: '',
        selector: '',
        datePicker:  new Date().toString(),

        inputDisabled: false,
        inputRequired: false,
        inputReadOnly: false,

        buttonDisabled: false,

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

    return <>
        {loading && <UI.Spinner />}
        <div className='container-body'>
            <div className='grid-primary'>
                <div className='start-1 size-12 padding-v-20'>
                    <UI.Title label='Controls' />
                </div>


                <div className='start-1 size-12 padding-v-20'>
                    <h3>Inputs</h3>
                </div>
                <div className='start-1 size-1 padding-v-20'>
                    <div className='font-16 strong'> Options: </div>
                </div>
                <div className=' size-2 padding-v-20'>
                    <UI.CheckButton id='inputDisabled' label='disabled' eventChange={e => onInputChange(e)} checked={state.inputDisabled} />
                </div>
                <div className='size-2 padding-v-20'>
                    <UI.CheckButton id='inputReadOnly' label='readOnly' eventChange={e => onInputChange(e)} checked={state.inputReadOnly} />
                </div>
                <div className='size-2 padding-v-20'>
                    <UI.CheckButton id='inputRequired' label='required' eventChange={e => onInputChange(e)} checked={state.inputRequired} />
                </div>


                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>TextBox</h4>
                    </div>
                    <div className='start-1 size-6 padding-v-20'>
                        <UI.TextBox id='text' value={state.text} eventChange={e => onInputChange(e)} titleBottom='TitleBottom' disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                    <div className='size-6 padding-v-20'>
                        <UI.TextBox id='text' value={state.text} eventChange={e => onInputChange(e)} titleTop='TitleTop' disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                    <div className='size-6 padding-v-20'>
                        <UI.TextBox id='text' value={state.text} eventChange={e => onInputChange(e)} placeholder='placeholder' disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                </div>


                <div className='start-1  padding-v-20' />
                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>TextArea</h4>
                    </div>
                    <div className='start-1 size-9 padding-v-20'>
                        <UI.TextArea id='text' value={state.text} eventChange={e => onInputChange(e)} title='Title' disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                    <div className='size-9 padding-v-20'>
                        <UI.TextArea id='text' value={state.text} eventChange={e => onInputChange(e)} placeholder='placeholder' disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                </div>


                <div className='start-1 padding-v-20' />
                <div className='grid-secondary  bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>CheckButton</h4>
                    </div>
                    <div className='start-1 size-2 padding-v-20'>
                        <div className='font-16 strong'> Opciones: </div>
                    </div>
                    <div className='start-1 size-20 padding-v-20'>
                        <UI.CheckButton id='checkButton' label='CheckButton' checked={state.checkButton} eventChange={e => onInputChange(e)} disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                </div>


                <div className='start-1 padding-v-20' />
                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>RadioButton</h4>
                    </div>

                    <div className='start-1 size-2 padding-v-20'>
                        <div className='font-16 strong'> Opciones: </div>
                    </div>
                    <div className='start-1 size-4 padding-v-20'>
                        <UI.RadioButton id='rb1' name='radioButton' value={state.radioButton} label='RadioButton 1' eventChange={e => onInputChange(e)} disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.RadioButton id='rb2' name='radioButton' value={state.radioButton} label='RadioButton 2' eventChange={e => onInputChange(e)} disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
                    </div>
                </div>


                <div className='start-1 padding-v-20' />
                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>DatePicker</h4>
                    </div>
                    <div className='start-1 size-6 padding-v-20'>
                    <UI.DatePicker id='datePicker' value={state.datePicker} eventChange={e => onInputChange(e)} title='Date'  disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly} />
   
                    </div>
                </div>

                <div className='start-1 padding-v-20' />
                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>Selector</h4>
                    </div>
                    <div className='start-1 size-6 padding-v-20'>
                        <UI.Selector
                            id='selector'
                            value={state.selector}
                            options={valuesSelector}
                            eventChange={e => onInputChange(e)}
                            titleBottom='titleBottom'
                            disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly}
                        />
                    </div>
                    <div className=' size-6 padding-v-20'>
                        <UI.Selector
                            id='selector'
                            value={state.selector}
                            options={valuesSelector}
                            eventChange={e => onInputChange(e)}
                            titleTop='titleTop'
                            disabled={state.inputDisabled} required={state.inputRequired} readOnly={state.inputReadOnly}
                        />
                    </div>
                </div>

                <div className='start-1 size-12 padding-v-20'>
                    <h3>Buttons</h3>
                </div>
                <div className='start-1 size-1 padding-v-20'>
                    <div className='font-16 strong'> Option: </div>
                </div>
                <div className='size-3 padding-v-20'>
                    <UI.CheckButton id='buttonDisabled' label='disabled' eventChange={e => onInputChange(e)} checked={state.buttonDisabled} />
                </div>

                <div className='start-1  padding-v-20' />
                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>Button</h4>
                    </div>
                    <div className='start-1 size-4 padding-v-20'>
                        <UI.Button title='Primary' type='primary' size='lg' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.Button title='Primary' type='primary' size='md' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.Button title='Primary' type='primary' size='sm' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.Button title='Primary' type='primary' size='xs' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='start-1 size-4 padding-v-20'>
                        <UI.Button title='Secondary' type='secondary' size='lg' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.Button title='Secondary' type='secondary' size='md' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.Button title='Secondary' type='secondary' size='sm' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='size-4 padding-v-20'>
                        <UI.Button title='Secondary' type='secondary' size='xs' onClick={() => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                </div>


                <div className='start-1  padding-v-20' />
                <div className='grid-secondary bg-light-gray '>
                    <div className='start-1 size-5 padding-v-20'>
                        <h4>TextButton</h4>
                    </div>
                    <div className='start-1 size-20 padding-v-20'>
                        <UI.TextButton id='textButton' text='Primary' type='primary' onClick={e => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                    <div className='start-1 size-20 padding-v-20'>
                        <UI.TextButton id='textButton' text='Secundary' type='secondary' onClick={e => alert('clic!!!')} disabled={state.buttonDisabled} />
                    </div>
                </div>


                <div className='start-1  padding-v-20' />
                <div className='start-1 size-5 padding-v-20'>
                    <h4>Title</h4>
                </div>
                <div className='grid-secondary'>
                    <div className='start-1 size-20 padding-v-20'>
                        <UI.Title label='Title primary' />
                    </div>
                    <div className='start-1 size-20 padding-v-20'>
                        <UI.Title label='Title secondary' secundary={true} />
                    </div>
                </div>


                <div className='start-1 padding-v-20' />
                <div className='start-1 size-5 padding-v-20'>
                    <h4>Spinner</h4>
                </div>
                <div className='grid-secondary'>
                    <div className='start-1 size-20 padding-v-20'>
                        <UI.Button title='Mostrar spinner' type='secondary' size='md' onClick={() => setloading(true)} />
                    </div>
                </div>



            </div>

        </div>
        <div className='start-1  padding-v-60' />

    </>;
};

export default Form;
