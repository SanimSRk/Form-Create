import { Link } from 'react-router-dom';

const Naver = () => {
  const navlinks = (
    <>
      <li>
        <Link to={'/'}>
          <button className=" text-xl font-semibold">Home</button>
        </Link>{' '}
      </li>
      <li>
        <Link to={'/login'}>
          <button className="text-xl font-semibold">Login</button>
        </Link>
      </li>
      <li>
        {' '}
        <Link to={'/singUp'}>
          <button className=" text-xl font-semibold"> Sing up</button>
        </Link>
      </li>
    </>
  );
  return (
    <div className="w-[85%] mx-auto flex gap-6 mt-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal flex gap-5 px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Naver;
