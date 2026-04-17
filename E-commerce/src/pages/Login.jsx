import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          login({ name });
          nav("/");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;