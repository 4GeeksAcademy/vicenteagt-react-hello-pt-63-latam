import React from "react";

const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg bg-black fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand fs-1 fw-bold text-warning" href="">ESLO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-warning"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder">
                        <li className="nav-item">
                            <a className="nav-link active anchorsNavbar text-white" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white anchorsNavbar" href="#aboutUs">Sobre Nosotros</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link text-white anchorsNavbar" href="#packages">Servicios</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link text-white anchorsNavbar" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;