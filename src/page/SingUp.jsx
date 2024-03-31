import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import auth from '../fireabse/firebseForm.init';
import { useState } from 'react';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SingUp = () => {
  const [singUpEror, setSingUpError] = useState('');
  const [succss, setsuccss] = useState('');
  const [sings, setSings] = useState(false);
  const handileSubmite = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const emails = e.target.email.value;
    const pasword = e.target.password.value;
    const checks = e.target.terms.checked;
    console.log(name, emails, pasword, checks);
    if (pasword.length < 6) {
      setSingUpError('Password should be at least 6 characters');
      return;
    } else if (!/[A-Z]/.test(pasword)) {
      setSingUpError('Your password should have a lest one oupper casec');
      return;
    } else if (!checks) {
      setSingUpError('palse accept our term and conditons');
      return;
    }
    setSingUpError('');
    setsuccss('');
    createUserWithEmailAndPassword(auth, emails, pasword)
      .then(res => {
        console.log(res.user);
        setsuccss('succssfully sing up');
        updateProfile(res.user, {
          displayName: name,
        })
          .then(() => {
            console.log('profile updated');
          })
          .catch(error => {
            console.log(error);
          });
        sendEmailVerification(res.user)
          .then(() => {
            alert('palse cheack your email nad verfy your account');
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        setSingUpError(error.message);
      });
  };
  console.log(succss);
  return (
    <div className="w-[85%] mx-auto ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handileSubmite} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center  justify-between input input-bordered">
                  <input
                    type={sings ? 'text' : 'password'}
                    placeholder="password"
                    name="password"
                    required
                  />
                  <span onClick={() => setSings(!sings)} className=" ">
                    {sings ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <input className="mr-2" type="checkbox" name="terms" id="" />
                <label htmlFor="terms">
                  Accept our
                  <a href=""> Terms and conditions</a>{' '}
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="registration"
                />
              </div>
              <p>
                Alredy have a account{' '}
                <Link
                  className="text-xl text-green-500 font-extrabold"
                  to={'/login'}
                >
                  Login
                </Link>
              </p>
            </form>

            <div>
              {succss && (
                <p className="my-4 text-center text-green-600">{succss}</p>
              )}
              {singUpEror && (
                <p className="my-4 text-center text-red-400">{singUpEror}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
