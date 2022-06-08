import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class AdminNav extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">FLAiR iT SOLUTiONS</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                      <li className="nav-item"><Link className="nav-link" to="/">ADMIN-DASH</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/EmployeeReg">Employee Management</Link></li>
                       <li className="nav-item"><Link className="nav-link" to="/EmployeerReg">Employeer Management</Link></li>
                       {/*<li className="nav-item"><Link className="nav-link" to="/ShootOut">ShootOut</Link></li> */}
                    </ul>  
                  </div>
                </div>
             </nav>
          </div> 
        </section>

      </div>
    )
  }
}

export default AdminNav