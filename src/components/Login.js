// import React, { useDebugValue, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Login.css";

// import { useDispatch } from "react-redux";
// import login from "../utils/login";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("buyer");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mock login action
//     if (email && password) {
//       login(email, password)
//         .then(() => {
          
//           if (role === "seller") {
//             localStorage.setItem("role", "seller");
            
//           } else {
//             localStorage.setItem("role", "buyer");
            
//           }
//           navigate(
//             role === "seller" ? "/seller-dashboard" : "/buyer-dashboard"
//           );
//         })
//         .catch((error) => {
//           console.error("Login failed:", error.message);
//           // Handle login failure
//         });
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>
//             <input
//               type="radio"
//               value="buyer"
//               checked={role === "buyer"}
//               onChange={() => setRole("buyer")}
//             />
//             Buyer
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="seller"
//               checked={role === "seller"}
//               onChange={() => setRole("seller")}
//             />
//             Seller
//           </label>
//         </div>
//         <div>
//             <Link to="/register">Create an account.</Link>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import login from "../utils/login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      login(email, password)
        .then(() => {
          localStorage.setItem("role", role);
          navigate(role === "seller" ? "/seller-dashboard" : "/buyer-dashboard");
        })
        .catch((error) => {
          console.error("Login failed:", error.message);
          if (error.message.includes("User does not exist")) {
            alert("User does not exist. Please check your email.");
          } else if (error.message.includes("Invalid user credentials")) {
            alert("Invalid password. Please try again.");
          } else {
            alert("Login failed.");
          }
        });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="buyer"
              checked={role === "buyer"}
              onChange={() => setRole("buyer")}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              value="seller"
              checked={role === "seller"}
              onChange={() => setRole("seller")}
            />
            Seller
          </label>
        </div>
        <div>
          <Link to="/register">Create an account</Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

