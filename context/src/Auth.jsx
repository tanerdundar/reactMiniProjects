import { useContext } from "react";
import AuthContext from "../context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);
  // console.log(status);

  const auth = useContext(AuthContext); // => 2 farklı kullanım
  //  console.log(auth.status);

  return (
    <div>
      <h1>Have you logged in?</h1>
      {status ? <p>Already logged in...</p> : <p>Nopee!</p>}
      <button onClick={login}>Log in</button>
      {/* <button onClick={auth.login}></button> => 2 farklı kullanım */}
    </div>
  );
}

export default Auth;
