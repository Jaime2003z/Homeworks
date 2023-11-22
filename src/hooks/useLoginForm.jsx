import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../loginInformation";

function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validInformation, setValidInformation] = useState(false);
  const Nav = useNavigate();

  const myEmail = (e) => {
    setEmail(e.target.value)
  }

  const myPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const userFound = Data.find(
      (e) => e.email === email && e.password === password
    );
    if (userFound) {
      Nav("/homepage");
    } else {
      setValidInformation(true);
    }
  };

  return {
    myEmail,
    myPassword,
    handleLogin,
    validInformation,
  };
}

export default useLoginForm;