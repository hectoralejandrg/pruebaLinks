import React from "react";
import { useAuth } from "../auth/AuthProvider";

const UserInfo = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <button className="btn btn-danger" onClick={() => signOut()}>
          Logout
        </button>
      ) : (
        <span className="alert alert-danger">"You are not logged in"</span>
      )}
    </div>
  );
};

export default UserInfo;
