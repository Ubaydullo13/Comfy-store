import { Link, NavLink } from "react-router-dom"
import { BsCart3, BsMoonFill } from "react-icons/bs"

function Navbar() {
  return (
    <div className="w-full flex justify-between px-48 bg-slate-100 py-4 items-center">
      <Link
        className=" text-3xl items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
        to="/home"
      >
        C
      </Link>
      <div className="flex gap-6">
        <NavLink to="/home">
          {({ isActive }) => (
            <span
              className="px-3 py-2 rounded-lg"
              style={{
                backgroundColor: isActive ? "#201431" : "transparent",
                color: isActive ? "#C7C9D1" : "#201431",
              }}
            >
              Home
            </span>
          )}
        </NavLink>

        <NavLink to="/">
          {({ isActive }) => (
            <span
              className="px-3 py-2 rounded-lg"
              style={{
                backgroundColor: isActive ? "#201431" : "transparent",
                color: isActive ? "#C7C9D1" : "#201431",
              }}
            >
              Products
            </span>
          )}
        </NavLink>
        <NavLink to="/cart">
          {({ isActive }) => (
            <span
              className="px-3 py-2 rounded-lg"
              style={{
                backgroundColor: isActive ? "#201431" : "transparent",
                color: isActive ? "#C7C9D1" : "#201431",
              }}
            >
              Cart
            </span>
          )}
        </NavLink>
      </div>
      
        <div className="indicator flex items-center gap-8">
      <BsMoonFill className='swap-off h-4 w-4' />
      <Link to="/cart">
          <BsCart3 className="h-6 w-6"/>
          <span className="badge badge-sm badge-primary indicator-item">0</span>
      </Link>
        </div>
    </div>
  )
}

export default Navbar