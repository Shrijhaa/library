import './profile.css';
import {MdCancelPresentation} from 'react-icons/md';
import React from 'react';


function Profile(){
    return(
        <div className='profilecardbox' id='profilecardbox'>
             <div className='cancelbox onc'>
                 <MdCancelPresentation id='cancelicon' className='cancelicon'/>
             </div>
             <div className='profilecard'>
                 <div className='profilecardup'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" className='userimg'/>
                 </div>
                 
                 <div className='profilecarddown'>
                 <div className='profilecontent'>
   
                     <p className='username'>Shrijhaa</p>
                     <p className='userdesignation'>Student - <span className='userid'>2019506086</span></p>
                     <p className='usermailid'>Shrijhaaramesh@gmail.com</p>
                 </div>
                 </div>

             </div>
        </div>

    );

}



export default Profile;