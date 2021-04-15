import React from 'react';
import camera from '../../../images/camera.svg';
import tree from '../../../images/coconut-tree.svg';
import env from '../../../images/cycle.svg';
import CommitmentList from '../CommitmentList/CommitmentList';
import './Commitment.css'
const commitment = [
    {
        img: camera,
        title: 'LOCAL COMMITMENT',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

    },
    {
        img: tree,
        title: 'ECO-FRIENDLY EXPERIENCES',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

    },
    {
        img: env,
        title: 'ETHICAL AWARENESS',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

    },
    
]

const Commitments = () => {
    return (
        <div className="mt-5 pt-5 container w-75">
            <h3 className="text-center">Your Next Holiday</h3>
            <div className="row mt-5">
               {
                   commitment.map(commitment => <CommitmentList commitment={commitment}></CommitmentList>)
               }
            </div>
            <div className="text-center"><button  className="button">Travel With Us</button></div>
        </div>
    );
};

export default Commitments;