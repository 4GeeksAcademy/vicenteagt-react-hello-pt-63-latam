import React from "react";

const Card = (props) => {
    return (

        <div id="packages">
            <div className="">
                <div className="card bg-black mt-4 ms-3 col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11 col-xxl-11" style={{ width: "100%", height: "100%" }}>
                    <img src={props.urlImageCardProps} style={{ width: "100%", height: "100%" }} className="card-img-top" alt="imagen" />
                    <div className="card-body card bg-black" style={{ width: "100%", height: "100%" }}>
                        <h5 className="card-title text-white fw-bolder">{props.packagesNamesProps}</h5>
                        <p className="card-text text-white">{props.packagesDescriptionProps}</p>
                        <a href="#" className="btn btn-warning fw-bolder btn-sm btn-sm-sm btn-md-sm btn-lg-lg m-auto" style={{ width: "55%", height: "20%" }}>Más Información</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Card;