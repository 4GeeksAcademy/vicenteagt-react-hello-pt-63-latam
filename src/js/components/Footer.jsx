import React from "react";

const Footer = () => {
    return (
        <div id="contact">
        <div className="contain-fluid d-flex bg-black mt-3 justify-content-center">
            <div className="row mt-2">
                <div className="col-5">
                    <p className="text-white">Copyright © ESLO 2025</p>
              </div>
                <div className="col-1">
                        <a href="https://github.com/VicenteAGT" target="blank"><i class="fa-brands fa-instagram text-white fs-2 anchorsFooter"></i></a>
                        </div>
                        <div className="col-2">
                        <a className="text-warning text-decoration-none anchorsFooter" href="https://github.com/VicenteAGT" target="blank">eslo.edu</a>
                        </div>
                        <div className="col-1">
                        <a href="https://github.com/VicenteAGT" target="blank"><i class="fa-brands fa-facebook text-white fs-2 anchorsFooter"></i></a>
                        </div>
                         <div className="col-3">
                        <a  className="text-warning text-decoration-none anchorsFooter" href="https://github.com/VicenteAGT" target="blank">Eslo Educa</a>
                        </div>
                </div>
                </div>
        </div>
        
    )
};

export default Footer;