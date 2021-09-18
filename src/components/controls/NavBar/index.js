import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @decriptionFuntion Search Box Component
 * @author Rafael Orlando Márquez Cedeño
 */

const NavBar = ({ leftOptions, rightOptions }) => {

    const location = useLocation();

    return <>
        <div className='bg-blue'>
            <form className='grid-primary padding-v-0' >
                <div className='start-1 size-12'>
                    <div className="topnav font-20">
                        {
                            leftOptions.map((element, index )=>
                                <Link key={index} to={element.path} className={element.path === location.pathname ? 'active' : ''}>{element.name}</Link>
                            )
                        }
                        <div className="topnav-right">
                            {
                                rightOptions.map((element, index ) =>
                                    <Link key={index} to={element.path} className={element.path === location.pathname ? 'active' : ''}>{element.name}</Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className='padding-v-20' />
    </>;
};

NavBar.propTypes = {
    leftOptions: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })),
    rightOptions: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })),
};

export default NavBar;
