import useLoginForm from '../hooks/useLoginForm';
import "../pages/generalPageStyles.css"

export const LoginForm = () => {
  const { myEmail, myPassword, handleLogin, validInformation } = useLoginForm();

  return (
    <div className='containerLogin'>
      <h2>Login page</h2>
      {validInformation && (
        <p>
          Oops! You have entered an invalid email or password, please try again.
        </p>
      )}
      <input type="text" placeholder="user123@mail.com" onChange={(e) => myEmail(e)} />
      <input type="password" placeholder="user123" onChange={(e) => myPassword(e)} />
      <button onClick={(e) => handleLogin(e)}>Enter</button>
    </div>
  );
};