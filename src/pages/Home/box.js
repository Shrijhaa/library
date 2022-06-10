import React from 'react';
import './box.css';

function Box(props){

    return(
        <div className='box'>
            <img className='aboutimg' src={props.src} />
                <p className='aboutheader'>{props.head}</p>
                <p className='aboutcontent'>{props.content}</p>
            </div>
    );

}

export default Box;