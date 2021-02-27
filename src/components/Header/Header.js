import React from "react";
import logo from "../../assets/images/logo/logo.png";

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
            <li>Feed</li>
            <li>Users</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
