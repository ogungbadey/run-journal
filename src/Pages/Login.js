import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/Form/Form";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const location = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const location = formData.get("location");
    console.log(username, location);
    setLoading(true)
    auth.signin({username, location}, () => {
      navigate(from, { replace: true })
      setLoading(false)
    });
  };
  
  return <LoginForm isLoading={loading} handleSubmit={handleSubmit} />;
}
