import React from 'react';
import Option from '../Option';
import PropTypes from 'prop-types';

const Menu = ({ options }) => {
    return <>
        <div className='container-body'>
            <div className='grid-primary'>

                {
                    options.map((element, index) =>
                        <div key={index} className=' size-3 padding-v-30 '>
                            <Option label={element.name} path={element.path} nameIcon={element.nameIcon} />
                        </div>
                    )
                }

            </div>
        </div>
    </>;
};

Menu.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            nameIcon: PropTypes.string.isRequired,
        })),
};

export default Menu;
