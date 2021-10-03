import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @decription NavBar Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'Main Menu'.
 */

const NavBar = ({ leftOptions, rightOptions }) => {

    const location = useLocation();

    return <div>
        <div className=' container-nav-bar-father '>
            <div className='container-nav-bar bg-blue'>
                <form className='grid-primary padding-v-0' >
                    <div className='start-1 size-12'>
                        <div className='topnav font-22'>
                            {
                                leftOptions.map((element, index) =>
                                    <Link key={index} to={element.path} className={element.path === location.pathname ? 'active' : ''}>{element.name}</Link>
                                )
                            }
                            <div className='topnav-right'>
                                {
                                    rightOptions.map((element, index) =>
                                        <Link key={index} to={element.path} className={element.path === location.pathname ? 'active' : ''}>{element.name}</Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className='nav-bar-margin-bootom ' />
    </div>;
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
