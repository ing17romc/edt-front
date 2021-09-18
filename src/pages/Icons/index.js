import React from 'react';
import UI from '../../components/controls';
import { SIZE_CONTROL } from '../../components/utils/constant';
import { icons } from '../../components/utils/icons';

/**
 * @decriptionFuntion Seach Results Component
 * @author Rafael Orlando Márquez Cedeño
 */

const Icons = () => {
    return <>
        <div className='container-body'>
            <div className='grid-primary'>
                <div className='start-1 size-12 padding-v-20'>
                    <UI.Title label='Icons' />
                </div>
                {
                    icons.map((element, index ) =>
                        <div  key={index}  className='grid-secondary padding-v-20'>


                            <div className=' start-1 size-5 padding-v-10'>
                                <UI.Icon name={element.key} size={SIZE_CONTROL.LG} />
                                <h4>{element.key} - {SIZE_CONTROL.LG}</h4>
                            </div>
                            <div className='  size-5 padding-v-10'>
                                <UI.Icon name={element.key} size={SIZE_CONTROL.MD} />
                                <h4>{element.key} - {SIZE_CONTROL.MD}</h4>
                            </div>
                            <div className='  size-5 padding-v-10'>
                                <UI.Icon name={element.key} size={SIZE_CONTROL.SM} />
                                <h4>{element.key} - {SIZE_CONTROL.SM}</h4>
                            </div>
                            <div className='  size-5 padding-v-10'>
                                <UI.Icon name={element.key} size={SIZE_CONTROL.XS} />
                                <h4>{element.key} - {SIZE_CONTROL.XS}</h4>
                            </div>


                        </div>
                    )
                }
            </div>
        </div>
    </>;
};

export default Icons;
