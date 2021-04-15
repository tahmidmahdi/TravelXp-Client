import React from 'react';
import Header from '../Header/Header';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="header-main img-fluid">
            <Header></Header>
            <div className="text-center header-main-h1">
                <h1>Leave With No Excuses And <br/> <span className="text-white">Travel With No Regrets</span></h1>
            </div>

        </div>
        
    );
};

export default HeaderMain;