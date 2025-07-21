import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-40 bg-white">
      <div className="flex items-center gap-6">
        {/* logo section */}
        <a href="/">
          <img src="/images/luma.png" className="h-15 w-50" alt="Luma" />
        </a>
      </div>
      <div>
        <ul className="flex gap-14">
          <li>
            <NavLink to="/shop"className={({ isActive }) =>isActive? "text-gray-500 font-semibold text-[17px]": "text-red-900 text-[15px] font-semibold "}>
                Shop
            </NavLink>
          </li>
          <li>           
            <NavLink to="/mens"className={({ isActive }) =>isActive? "text-gray-500 font-semibold text-[17px]": "text-red-900 text-[15px] font-semibold "}>
                Mens
            </NavLink>
          </li>

          <li>    
            <NavLink to="/womens"className={({ isActive }) =>isActive? "text-gray-500 font-semibold text-[17px]": "text-red-900 text-[15px] font-semibold "}>
                Womens
            </NavLink>
          </li>
          <li>            
            <NavLink to="/kids"className={({ isActive }) =>isActive? "text-gray-500 font-semibold text-[17px]": "text-red-900 text-[15px] font-semibold "}>
                Kids
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="felx justify-center items-center ">
        {/* search field  */}
        <form className="max-w-md mx-auto">
          <div className="flex">
            <div className="relative w-80">
              <input
                type="search"
                id="location-search"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 outline-none  rounded border-gray-400 border-s-1 border border-gray-300 placeholder:text-gray-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-red-900 rounded-e-md border border-red-800 hover:bg-red-950 focus:ring-4 focus:outline-4 focus:ring-blue-300 "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex items-center gap-8 text-2xl">
          <li>
            {" "}
            <i className="fa-solid fa-user text-gray-500 hover:text-red-900 "></i>
          </li>
          <li>
            <i className="fa-solid fa-heart text-gray-500 hover:text-red-900"></i>
          </li>
          <li>
            <NavLink to="/cart"><i className="fa-solid fa-cart-shopping text-gray-500 hover:text-red-900"></i></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
