import "./Navbar.css";
import Template from "../assets/temple.svg";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { isPending, logout } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Template} alt="project-icon" />
          <span>Project Management</span>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}

          {isPending && (
            <button className="btn" disabled>
              Loggin Out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
