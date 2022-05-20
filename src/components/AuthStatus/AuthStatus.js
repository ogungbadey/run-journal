import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();
  
    if (!auth.user) {
      return <Link  to="/login" style={{color:"white", textDecoration:"none", fontSize:"18px"}}>Login</Link>;
    }
  
    return (
      <p onClick={() => {
        auth.signout(() => navigate("/"));
      }}>
        {auth.user.username}{" "}
        {/* <button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        >
          Sign out
        </button> */}
      </p>
    );
}
