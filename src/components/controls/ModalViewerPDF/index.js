import React, { useState } from 'react';
import UI from '..';
//import UI from 'edt-lib';
import PropTypes from 'prop-types';
import { Page, Document } from 'react-pdf/dist/umd/entry.webpack';

const propTypes = {
    habilitarBotonContinuar: PropTypes.bool,
};

const ModalViewerPDF = ({ pdf, showModal, eventModal }) => {

    const SCALE_DEFAULT = 0.7;
    const SCALE_MIN = 0.2;
    const SCALE_MAX = 1.5;
    const SCALE_JUMPING = 0.1;
    const [pages, setNumberPages] = useState(1);
    const [pageCurrent, setPageCurrent] = useState(1);
    const [scale, setScale] = useState(SCALE_DEFAULT);

    const successfullyLoaded = ({ numPages }) => {
        setNumberPages(numPages);
    };

    const ZERO = 0;
    const ONE = 1;
    const TWO = 2;
    const THREE = 3;

    const eventPager = value => {
        if (value === ZERO) {
            setPageCurrent(1);
        }
        if (value === ONE && pageCurrent > 1) {
            setPageCurrent(pageCurrent - 1);
        }
        if (value === TWO && pageCurrent < pages) {
            setPageCurrent(pageCurrent + 1);
        }
        if (value === THREE) {
            setPageCurrent(pages);
        }
    };

    const scaleOptions = {
        zoom_out: 0,
        zoom_in: 1,
        reset: 2,
    };

    const climb = option => {

        if (option === scaleOptions.zoom_in && scale < SCALE_MAX) {
            setScale(scale + SCALE_JUMPING);
        } else if (option === scaleOptions.zoom_out && scale > SCALE_MIN) {
            setScale(scale - SCALE_JUMPING);
        } else if (option === scaleOptions.reset) {
            setScale(SCALE_DEFAULT);
        }
    };

    return <UI.Modal show={showModal} eventModal={e => eventModal(e)} >
        <div className='body-viewer-pdf'>
            <div className='grid-primary'>
                <div className='start-1 size-12 '>
                    <UI.Title label='Visor de PDF' secundary={true} />
                </div>
                <div className='grid-secondary'>

                    <div className='start-2 size-1 center padding-v-30 ' >
                        <UI.ImageButton id='imageButton' size='sm' icon='first_page' text='first page' onClick={() => eventPager(ZERO)} />
                    </div>
                    <div className='size-1 center padding-v-30  ' >
                        <UI.ImageButton id='imageButton' size='sm' icon='chevron_left' text='back page' onClick={() => eventPager(ONE)} />
                    </div>
                    <div className='size-4 center padding-v-30 little-hand strong'>
                        {pageCurrent} - {pages}
                    </div>
                    <div className='size-1 center padding-v-30 ' >
                        <UI.ImageButton id='imageButton' size='sm' icon='chevron_right' text='next page' onClick={() => eventPager(TWO)} />
                    </div>
                    <div className='size-1 center padding-v-30 ' >
                        <UI.ImageButton id='imageButton' size='sm' icon='last_page' text='last page' onClick={() => eventPager(THREE)} />
                    </div>

                    <div className='start-11 size-3 center padding-v-30 '>
                        <UI.ImageButton id='imageButton' size='sm' icon='zoom_in' text='zoom out' onClick={() => climb(scaleOptions.zoom_in)} />
                    </div>
                    <div className='size-4 center padding-v-30 ' >
                        <UI.ImageButton id='imageButton' size='sm' icon='zoom_out' text='zoom out' onClick={() => climb(scaleOptions.zoom_out)} />
                    </div>
                    <div className='size-2 center padding-v-30 ' >
                        <UI.ImageButton id='imageButton' size='sm' icon='restart_alt' text='reset' onClick={() => climb(scaleOptions.reset)} />
                    </div>
                </div>

                <div className='start-1 size-12 padding-v-30'>
                    <div className='container-pdf padding-v-30'>
                        <Document
                            error='Error loading PDF file'
                            loading='Loading the PDF file ...'
                            noData='PDF file not found'
                            file={pdf}
                            onLoadSuccess={successfullyLoaded} >
                            <Page scale={scale} pageNumber={pageCurrent} />
                        </Document>

                    </div>
                </div>
            </div>
        </div>
    </UI.Modal >;
};

ModalViewerPDF.propTypes = propTypes;

export default ModalViewerPDF;
