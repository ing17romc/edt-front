import React from 'react';
import PropTypes from 'prop-types';

const index = ({description}) => {
    return <div className='grid-primary'>
        <div className=' size-3 padding-v-30 '>
            <h1>{description}</h1>
        </div>
    </div>;
}

index.propTypes = {
    description: PropTypes.string.isRequired,
};

export default index;