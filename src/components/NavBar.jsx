import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      // Error logic maybe redirect to error page
    }
  };

  return (
    <div className="navbar bg-base-300">
      {/* Left side: Brand */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩‍💻 DevTinder
        </Link>
      </div>

      {/* Right side: Auth Links or User Menu */}
      <div className="flex-none">
        {!user ? (
          <Link to="/login" className="btn btn-ghost text-xl">
            Login/Signup
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-base">Welcome, {user.firstName}</span>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                 <li>
                  <Link to="/">Feed</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                   <li>
                  <Link to="/premium">Premium</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
