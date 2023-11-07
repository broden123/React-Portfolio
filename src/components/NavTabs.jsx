import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs bg-danger fs-4 fw-semibold text-white d-flex justify-content-end">
      <div className="me-auto p-2">Brayden Smith-Zimmerman</div>
      <li className="nav-item">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "nav-link active text-dark"
              : "nav-link text-white"
          }
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio"
              ? "nav-link active"
              : "nav-link text-white"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "nav-link active"
              : "nav-link text-white"
          }
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "nav-link active"
              : "nav-link text-white"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
