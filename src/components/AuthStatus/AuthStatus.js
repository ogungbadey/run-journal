import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

export default function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();
    const {theme} = useTheme()
    const {themeColor} = theme
  
    if (!auth.user) {
      return <Link  to="/login" style={{color: themeColor["--secondary"], textDecoration:"none", fontSize:"18px"}}>Login</Link>;
    }
  
    return (
      <p style={{color:themeColor["--secondary"]}} onClick={() => {
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
