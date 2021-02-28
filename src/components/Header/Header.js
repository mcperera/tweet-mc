import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const links = [
  {
    title: "Feed",
    url: "/feed",
  },
  {
    title: "Users",
    url: "/users",
  },
  {
    title: "Profile",
    url: "/profile",
  },
];

function Header() {
  return (
    <header className={`h-20 w-full shadow-lg`}>
      <div
        className={`h-full w-9/12 mx-auto flex justify-between items-center`}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className={`flex justify-between w-52`}>
            {links.map((link, index) => {
              return (
                <li key={index} className={`w-10 text-gray-400`}>
                  <NavLink
                    to={link.url}
                    exact
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F87171",
                    }}>
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
