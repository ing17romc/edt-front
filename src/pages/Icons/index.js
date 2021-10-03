import React from 'react';
//import UI from '../../components/controls';
import UI from 'edt-lib';
import {
    SIZE_CONTROL,
    ACTION_ICONS,
    ALERT_ICONS,
    AUDIO_AND_VIDEO_ICONS,
    COMMUNICATION_ICONS,
    CONTENT_ICONS,
    DIVICE_ICONS,
    EDITOR_ICONS,
    FILE_ICONS,
    HARDWARE_ICONS,
    IMAGE_ICONS,
    NAVIGATION_ICONS,
    NOTIFICATION_ICONS,
    SOCIAL_ICONS,
} from '../../components/utils/constant';

/**
 * @decriptionFuntion Seach Results Component
 * @author Rafael Orlando Márquez Cedeño
 */

const Icons = () => {

    const returnHtml = (category, items) => {
        return <>
            <div className='grid-secondary padding-v-20 bg-light-gray'>
                <div className='start-1 size-20 padding-v-20'>
                    <h4>{category}</h4>
                </div>
                {
                    items.map((element, index) =>

                        <div key={index} className=' size-5 padding-v-20 '>
                            <UI.Icon name={element} />
                            <p>{element} </p>
                        </div>

                    )
                }
            </div>
            <div className='start-1  padding-v-20' />
        </>
    };

    return <>
        <div className='container-body'>
            <div className='grid-primary'>
                <div className='start-1 size-12 padding-v-20'>
                    <UI.Title label='Icons' />
                </div>
                <div className='grid-secondary padding-v-20  bg-light-gray'>
                    <div className='start-1 size-20 padding-v-20'>
                        <h4>Size</h4>
                    </div>
                    <div className=' start-1 size-5 padding-v-10'>
                        <UI.Icon name={'person'} size={SIZE_CONTROL.LG} />
                        <p>{'person'} - {SIZE_CONTROL.LG}</p>
                    </div>
                    <div className='  size-5 padding-v-10'>
                        <UI.Icon name={'person'} size={SIZE_CONTROL.MD} />
                        <p>{'person'} - {SIZE_CONTROL.MD}</p>
                    </div>
                    <div className='  size-5 padding-v-10'>
                        <UI.Icon name={'person'} size={SIZE_CONTROL.SM} />
                        <p>{'person'} - {SIZE_CONTROL.SM}</p>
                    </div>
                    <div className='  size-5 padding-v-10'>
                        <UI.Icon name={'person'} size={SIZE_CONTROL.XS} />
                        <p>{'person'} - {SIZE_CONTROL.XS}</p>
                    </div>
                </div>
                <div className='start-1  padding-v-20' />
                {
                    returnHtml('Action', ACTION_ICONS)
                }
                {
                    returnHtml('Alert', ALERT_ICONS)
                }
                {
                    returnHtml('Audio and Video', AUDIO_AND_VIDEO_ICONS)
                }
                {
                    returnHtml('Comunication', COMMUNICATION_ICONS)
                }
                {
                    returnHtml('Content', CONTENT_ICONS)
                }
                {
                    returnHtml('Divice', DIVICE_ICONS)
                }
                {
                    returnHtml('Editor', EDITOR_ICONS)
                }
                {
                    returnHtml('File', FILE_ICONS)
                }
                {
                    returnHtml('Hardware', HARDWARE_ICONS)
                }
                {
                    returnHtml('Image', IMAGE_ICONS)
                }
                {
                    returnHtml('Navigation', NAVIGATION_ICONS)
                }
                {
                    returnHtml('Notification', NOTIFICATION_ICONS)
                }
                {
                    returnHtml('Social', SOCIAL_ICONS)
                }
            </div>
        </div>
    </>;
};

export default Icons;
