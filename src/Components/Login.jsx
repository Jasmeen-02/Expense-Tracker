import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div id="heading">
        <h2>Login</h2>
      </div>
      <div class="pass">
        <h3 id="Ele">Username</h3>
        <input type="text" title="Username" />
        <h3 id="Ele">Password</h3>
        <input type="password" title="Password" />
      </div>
      <div id="submit">
        <button>Lets Enter</button>
      </div>
    </div>
  );
}

export default Login;
