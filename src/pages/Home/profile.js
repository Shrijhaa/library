import "./profile.css";
import { MdCancelPresentation } from "react-icons/md";
import React from "react";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing selectors
import { selectCurrentUser } from "../../redux/user/user.selectors";

function Profile({ currentUser }) {
  return (
    <div className="profilecardbox" id="profilecardbox">
      <div className="cancelbox onc">
        <MdCancelPresentation id="cancelicon" className="cancelicon" />
      </div>
      <div className="profilecard">
        <div className="profilecardup">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU"
            className="userimg"
          />
        </div>

        <div className="profilecarddown">
          <div className="profilecontent">
            <p className="username">{currentUser.name}</p>
            <p className="userdesignation">{currentUser.type}</p>
            <p className="usermailid">{currentUser.email}</p>
            <p className="usermailid">due: Rs {currentUser.due}</p>
            <p className="usermailid">
              Total Books: Rs {currentUser.bookCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Profile);
