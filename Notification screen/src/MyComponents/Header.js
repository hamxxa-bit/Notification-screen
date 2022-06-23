import React from "react";
import { SiTensorflow } from "react-icons/si";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <SiTensorflow class="icons" size="1.9em" />{" "}
          <span class="fs-3 d-inline">TIPS-G</span>
        </a>

        <form className="d-flex" role="search">
          <input
            className="form-control  ms-3position-absolute top-0 start-0  "
            style={{ width: "400px" }}
            type="search"
            placeholder="Seach for courses, Test, Quizzes"
            aria-label="Search"
          />

          <button className="btn btn-outline-dark" type="submit">
            Explore
          </button>
        </form>
      </div>
    </nav>
  );
}
