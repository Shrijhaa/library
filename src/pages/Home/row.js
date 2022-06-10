import React from 'react';
import {FcReadingEbook} from 'react-icons/fc';
function Row(rowvalue){

    return(
        <div className='row'>
          <p className='sno'>{rowvalue.sno}</p>
          <p className='title'>{rowvalue.title}</p>
          <p className='author'>{rowvalue.author}</p>
          <p className='edition'>{rowvalue.edition}</p>
          <p className='availability'>{rowvalue.availability}</p>
          <p className='ebook'><a href={rowvalue.link} target='_blank'><FcReadingEbook /></a></p>
        </div>
    );

}

export default Row;