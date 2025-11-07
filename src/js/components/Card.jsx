import React from "react";

const Card = (props) => {
    return(
        
        <div id="packages">
    <div className="ms-0 ms-sm-0 ms-md-0 ms-lg-3 ms-xl-3">   
<div className="card bg-black mt-2" style= {{width: "19rem", height: "24rem"}}>
  <img src={props.urlImageCardProps} style= {{width: "100%", height: "100%"}} className="card-img-top" alt="imagen"/>
  <div className="card-body card bg-black" style= {{width: "19em", height: "24rem"}}>
    <h5 className="card-title text-white fw-bolder">{props.packagesNamesProps}</h5>
    <p className="card-text text-white">{props.packagesDescriptionProps}</p>
    <a href="#" className="btn btn-warning fw-bolder">Más Información</a>
    </div>
    </div>   
</div>
    </div>

    )
};

export default Card;