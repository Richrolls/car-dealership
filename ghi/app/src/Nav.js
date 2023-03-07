import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavLink className="navbar-brand" to="/models/new">Create a model</NavLink>
        <NavLink className="navbar-brand" to="/models">View Current Models</NavLink>
        <NavLink className="navbar-brand" to="/manufacturers/new">Add a manufacturer</NavLink>
        <NavLink className="navbar-brand" to="/manufacturers">View Current Manufacturers</NavLink>
        <NavLink className="navbar-brand" to="/automobiles/new">Add an Automobile</NavLink>
        <NavLink className="navbar-brand" to="/automobiles">View current Automobiles</NavLink>
        <NavLink className="navbar-brand" to="/customers/new">Add a customer</NavLink>
        <NavLink className="navbar-brand" to="/salespeople/new">Add a salesperson</NavLink>
        <NavLink className="navbar-brand" to="/salespeople/sales">View salesperson sales</NavLink>
        <NavLink className="navbar-brand" to="/sales">View Sales</NavLink>
        <NavLink className="navbar-brand" to="/sales/new">Add a sale</NavLink>
        <NavLink className="navbar-brand" to="/technicians/new">Add a technician</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
