import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);

  console.log(location);
  const handleLogin = (event) => {
    event.preventDefault();

    // const email = event.target.email.value;

    const from = new FormData(event.currentTarget);
    const email = from.get("email");
    const password = from.get("password");
    loginUser(email, password)
      .then((user) => {
        console.log(user.user);
        // navigate after login
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-center text-3x">Please Login</h2>
      </div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full shadow-2xl card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p className="mt-4 ">
                Do not have a account please{" "}
                <Link to="/register" className="font-semibold text-blue-500">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
