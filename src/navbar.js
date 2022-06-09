import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';
import {IoMdArrowDropdown} from 'react-icons/io';
import Profile from './profile';


function Navbar() {
  const[profiletoggler,setprofiletoggler]=React.useState(false);
 const [menu,settogglemenu] = React.useState(false);
  return (
    <div className="navbarbox">
      <div className='logobox'>
        <p>
        <span>
          R
        </span>
          EADS
        </p>
      </div>

      
          

   
      <div className='userbox'>
          <p>Hi <span>Username</span></p>
          <div className='userimgbox' onClick={()=>settogglemenu((e)=>!e)}>
              <img src="" className='userimg' />
          </div>
          {menu ? 
          <div id='usermenu'>
             <p className='useroption' id='profile' onClick={()=>setprofiletoggler((e)=>!e)}>profile</p>
             <p className='useroption' id='mybooks'>mybooks</p>
             <p className='useroption' id='history'>history</p>
             <p className='useroption' id='logout'>logout</p>
            </div>

            : " "
          }

          {/* {profiletoggler ?

              <div className="userprofilecard">
              <Profile />
              </div>

              : ' '

          } */}
         


      </div>
    </div>
   
  );
}

export default Navbar;


