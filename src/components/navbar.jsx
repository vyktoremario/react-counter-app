import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-secondary">
        <a className="navbar-brand text-light">Counter</a>
        <span className="badge badge-pill badge-lg badge-primary text-center">
          {totalCounters}
        </span>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
