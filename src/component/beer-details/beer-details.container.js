import React from 'react';
import { Link } from "react-router-dom"


const BeerDetails = () => {
    return (
        <div className="wrapper">
            <div className="beer-details">
                <Link className="back" to="/">
                    <span> {" << "} go back </span>
                </Link>
            </div>
        </div>
    )
}

export default BeerDetails