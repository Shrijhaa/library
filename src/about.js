import React from 'react';
import './about.css';
import Box from './box';

function About(){

    var props = [
     { 
      
            src :"assets\images\read.svg",
            head:'Read',
            text:'Makes  you more knowledgeable enrich our perspective, stimulates your imagination'
        
    },


    {
            src :"assets\images\read.svg",
            head:'Learn',
            text:'Makes  you more knowledgeable enrich our perspective, stimulates your imagination'
        
    },

  

      {
            src :"assets\images\read.svg",
            head:'Discover',
            text:'Makes  you more knowledgeable enrich our perspective, stimulates your imagination'
        
    }

    ];
    
    return(
        <div id='about' className='about'>
         
        
         { 
         props.map((e)=>{
                   return (  
                      <Box src={e.src} head={e.head} content={e.text} />
                     );
                     })

         }
       

        </div>


    );
}

export default About;