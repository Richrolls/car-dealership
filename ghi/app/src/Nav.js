import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CarCar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                to="/models"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Models
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/models">
                    View Current Models
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/models/new">
                    Add a Model
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                to="/manufacturers"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manufacturers
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/manufacturers">
                    View Current Manufacturers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/manufacturers/new">
                    Add a Manufacturer
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                to="/automobiles"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Automobiles
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/automobiles">
                    View current Automobiles
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/automobiles/new">
                    Add an Automobile
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                to="/salespeople"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales People
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/salespeople/new">
                    Add a Sales Person
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/salespeople/sales">
                    View Sales Person's Sales
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                to="/sales"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sales">
                    View Sales
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales/new">
                    Add a Sale
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                to="/appointments"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Appointments
              </a>
              <ul className="dropdown-menu" aria-labelledby="appointments">
                <li>
                  <Link className="dropdown-item" to="/appointments">
                    View appointments
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appointments/new">
                    Add an appointment
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/customers/new">
                Add a Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/technicians/new">
                Add a technician
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
