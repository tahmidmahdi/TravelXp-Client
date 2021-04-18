import React from 'react';
import './PackagesList.css'

const PackagesList = ({packages}) => {
    return (
        <div className="col-md-4 text-center containers packages">
            <img className="center" style={{width:'300px'}} src={packages.img} alt=""/>
            <h5 className="centered">{packages.title}</h5>
        </div>
    );
};

export default PackagesList;