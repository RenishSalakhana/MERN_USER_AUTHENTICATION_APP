import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css"; 
import { userProfileAction } from "../../redux/actions/userActions";

const Profile = () => {
  const dispatch:any = useDispatch();
  const userProfile = useSelector((state: any) => state.users);

  const user = userProfile?.userProfile;

  useEffect(() => {
    const loggedUserEmail = localStorage.getItem("LOGGEDIN_USER_EMAIL");
    if (loggedUserEmail) {
      dispatch(userProfileAction(loggedUserEmail));
    }
  }, [dispatch]);

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <div className="profile-container">
      <h2 className="profile-header">My Profile</h2>
      {user ? (
        <div className="user-info">
          <p>
            <strong>Name:</strong> {fullName}
          </p>
          <p>
            <strong>Username:</strong> {user?.username}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
      ) : (
        <p>User not available. Please <Link to="/login">login</Link> first.</p>
      )}

      <Link to="/list" className="user-list-link">
        View User List
      </Link>
    </div>
  );
};

export default Profile;
