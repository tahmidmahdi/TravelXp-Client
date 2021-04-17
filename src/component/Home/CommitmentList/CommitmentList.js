import React from 'react';

const CommitmentList = ({commitment}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'60px'}} src={commitment.img} alt=""/>
            <h6>{commitment.title}</h6>
            <p className="text-secondary">{commitment.description}</p>
        </div>
    );
};

export default CommitmentList;