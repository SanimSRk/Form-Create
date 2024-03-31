import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import auth from '../fireabse/firebseForm.init';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [LoginError, setError] = useState('');
  const [loginSuccss, setLoginSuccss] = useState('');
  const emailRaf = useRef();
  const handilelogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError('');
    setLoginSuccss('');
    signInWithEmailAndPassword(auth, email, password)
      .then(rest => {
        console.log(rest.user);

        if (rest.user.emailVerified) {
          setLoginSuccss('SuccssFully login in');
        } else {
          alert('please verfy your email');
        }
      })
      .catch(errors => {
        console.log(errors);
        setError(errors.message);
      });
  };
  const ForgetPasword = () => {
    const email = emailRaf.current.value;
    if (!email) {
      console.log(emailRaf.current.value);
      return;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Please write valide email');
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('palse cheack to your email');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  return (
    <div className="w-[85%] mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handilelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRaf}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    onClick={ForgetPasword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>

                <p>
                  create new account{' '}
                  <Link
                    className="text-xl text-green-500 font-extrabold"
                    to={'/singUp'}
                  >
                    account
                  </Link>
                </p>
                <div className="mt-3">
                  {LoginError && (
                    <p className="text-center text-red-600 mt-3">
                      {LoginError}
                    </p>
                  )}
                  {loginSuccss && (
                    <p className="text-center mt-3 text-green-600">
                      {loginSuccss}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
