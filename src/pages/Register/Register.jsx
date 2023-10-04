import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

function Register() {
  const { creatUser } = useContext(AuthContext);

  const handleReg = (event) => {
    event.preventDefault();
    const from = new FormData(event.currentTarget);
    const email = from.get("email");
    const password = from.get("password");
    const name = from.get("name");
    const photoURL = from.get("photoURL");
    // creat user
    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-center text-3x">Please Register</h2>
      </div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full shadow-2xl md:min-w-[600px] card bg-base-100">
            <form onSubmit={handleReg} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photoURL"
                  required
                />
              </div>
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
                  Regester
                </button>
              </div>
              <p className="mt-4 ">
                Already have a account? please{" "}
                <Link to="/login" className="font-semibold text-blue-500">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
