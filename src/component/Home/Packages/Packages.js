import React from 'react';
import compas from '../../../images/compas.jpg'
import africa from '../../../images/africa.jpg'
import local2 from '../../../images/local.jpg'
import PackagesList from '../PackagesList/PackagesList';

const packageLocal = [
    {
        img: compas,
        title: 'BE WHERE EVER YOU WANT'
    },
    {
        img: africa,
        title: 'AFRICA'
    },
    {
        img: local2,
        title: 'LIKE A LOCAL'
    }
    
]

const Packages = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1>What Are You Looking For</h1>
            <div className="row">
                {
                    packageLocal.map(packages => <PackagesList packages={packages}></PackagesList>)
                }
            </div>
        </div>
    );
};

export default Packages;