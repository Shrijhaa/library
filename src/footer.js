import React from 'react';
import {ImLocation} from 'react-icons/im';
import {IoCall} from 'react-icons/io5';
import {IoIosMail} from 'react-icons/io';

import './footer.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='footbox'>
                <p className='ficonsbox'>
                <a href='https://goo.gl/maps/YoyUupb6u6dTHya77' target='_blank'>
                <ImLocation className='ficons'/>
                </a>
                </p>
                <p  className='ficonscontent'><a href="https://goo.gl/maps/YoyUupb6u6dTHya77" target='_blank'>MIT Campus</a></p>
            </div>
            <div className='footbox'>
                <p className='ficonsbox'>
                <IoCall className='ficons' />
                </p>
                <p className='ficonscontent'>1234567890</p>
            </div>
            <div className='footbox'>
                <p className='ficonsbox'>
                <IoIosMail className='ficons' />
                </p>
                <p className='ficonscontent'>mitlibray@gmail.com</p>
            </div>

        </div>
    );
}

export default Footer;