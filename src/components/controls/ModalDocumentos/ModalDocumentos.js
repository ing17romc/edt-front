import React, { useState } from 'react';
import RedUnica from 'red-unica';
import CasillaVerificacion from '../../Controles/CasillaVerificacion/CasillaVerificacion';
import BotonTexto from '../../Controles/BotonTexto/BotonTexto';
import PropTypes from 'prop-types';
import './ModalDocumentos.scss';
import { Page, Document } from 'react-pdf/dist/umd/entry.webpack';
import { TipoArchivo } from '../../../tipos/tipos';
import { Markup } from 'interweave';
import { operacionTernaria } from '../../../utilerias/funciones';

const propTypes = {
    habilitarBotonContinuar: PropTypes.bool,
};

const defaultProps = {
    habilitarBotonContinuar: true,
};

const imprimirDocumento = e => {
    const msn = 'Imprimiendo documentos...!';
    alert(msn);
    console.log(msn);
    e.preventDefault();
};

const ModalDocumentos = props => {

    console.log(props.documento);

    const [num_Pages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const cero = 0;
    const uno = 1;
    const dos = 2;
    const tres = 3;

    const eventoPaginador = valor => {
        if (valor === cero) {
            setPageNumber(1);
        }
        if (valor === uno && pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
        if (valor === dos && pageNumber < num_Pages) {
            setPageNumber(pageNumber + 1);
        }
        if (valor === tres) {
            setPageNumber(num_Pages);
        }
    };

    const eventoCambio = e => {
        setPageNumber(1);
        setNumPages(1);
        props.mostrarDocumento(e);
    };


    return <div className='modal-documentos'>
        <div className='cabecero'> <RedUnica.TituloSeccion leyenda='Visualización de documentos' esModal={true} /></div>
        <div className='menu fondo-p2'>
            {
                props.datos.map(dato =>
                    <div key={dato.id} className='listado-documentos '>
                        <div className='verificado'>
                            <CasillaVerificacion identificador={dato.id} valor={dato.check} eventoCambio={props.eventoCasillaVerificacion} requerido={true} />
                        </div>
                        <div className='titulo'>
                            <BotonTexto
                                identificador={dato.id}
                                leyenda={dato.descripcion}
                                eventoCambio={eventoCambio}
                                estiloFondo={operacionTernaria(dato.id === props.documento.id, 'fondo-p4', 'fondo-p2')}
                                estiloLetras='cuerpo-2 negritas letra-s1'
                            />
                        </div>
                    </div>)
            }
            <div className='boton-impresion'>
                <RedUnica.BotonSecundario
                    leyenda='Imprimir documentos'
                    tipo={2}
                    eventoClic={imprimirDocumento}
                />
            </div>
        </div>
        <div className='cuerpo'>

            <div className='centrado'>
                {(props.documento.tipo === TipoArchivo.PDF) ?
                    <Document
                        className='visor-pdf'
                        error='Error al cargar el archivo PDF'
                        loading='Cargando el archivo PDF...'
                        noData='No se encontro el archivo PDF'
                        file={props.documento.contenido}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page width={310} pageNumber={pageNumber} />
                    </Document>
                    : <div className='visor-html'><Markup content={props.documento.contenido} /> </div>
                }
            </div>
        </div>
        <div className='relleno-vertical-40 pie centrado'>
            <div className='paginacion-documento'>
                <RedUnica.Paginador
                    inicio={pageNumber}
                    fin={num_Pages}
                    eventoClic={valor => eventoPaginador(valor)}
                />
            </div>
            <div className='boton-aceptar'>
                <RedUnica.BotonPrimario leyenda='Aceptar' inactivo={props.habilitarBotonContinuar} eventoClic={e => props.continuar(e)} />
            </div>
        </div>
    </div>;
};

ModalDocumentos.propTypes = propTypes;
ModalDocumentos.defaultProps = defaultProps;

export default ModalDocumentos;
