import React from "react";
import './Loader.scss'

const Loader = () => {
    return(
        <div className="riple-container">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader