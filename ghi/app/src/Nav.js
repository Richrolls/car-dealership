import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="navbar-brand" to="/">CarCar</NavLink>
            <NavLink className="navbar-brand" to="/models">View Current Models</NavLink>
            <NavLink className="navbar-brand" to="/models/new">Add a Model</NavLink>
            <NavLink className="navbar-brand" to="/manufacturers">View Current Manufacturers</NavLink>
            <NavLink className="navbar-brand" to="/manufacturers/new">Add a Manufacturer</NavLink>
            <NavLink className="navbar-brand" to="/automobiles">View current Automobiles</NavLink>
            <NavLink className="navbar-brand" to="/automobiles/new">Add an Automobile</NavLink>
            <NavLink className="navbar-brand" to="/customers/new">Add a Customer</NavLink>
            <NavLink className="navbar-brand" to="/salespeople/new">Add a Sales Person</NavLink>
            <NavLink className="navbar-brand" to="/salespeople/sales">View Sales Person's Sales</NavLink>
            <NavLink className="navbar-brand" to="/sales">View Sales</NavLink>
            <NavLink className="navbar-brand" to="/sales/new">Add a Sale</NavLink>
            <NavLink className="navbar-brand" to="/technicians/new">Add a technician</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
