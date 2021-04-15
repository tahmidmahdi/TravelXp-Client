import React from 'react';
import MeetOurGuidesList from '../MeetOurGuidesList/MeetOurGuidesList';
import guide1 from '../../../images/guide1.jpg'
import guide2 from '../../../images/guide2.jpg'
import guide3 from '../../../images/guide3.jpg'
import guide4 from '../../../images/guide4.jpg'
const guides = [
    {
        name: 'Joe Root',
        country: 'UK',
        img: guide1


    },
    {
        name: 'Tom Curry',
        country: 'USA',
        img: guide2

    },
    {
        name: 'Muhammad Rashid',
        country: 'Ghana',
        img: guide3

    },
    {
        name: 'Abdur Rahman',
        country: 'Dubai',
        img: guide4

    },
]
const MeetOurGuides = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1>Meet Our Local Guides</h1>
            <div className="row">
                {
                    guides.map(guide => <MeetOurGuidesList guide={guide}></MeetOurGuidesList>)
                }
            </div>
            <div className='text-center mt-3'>
                <button className="button">Meet All Our Guides</button>
            </div>
        </div>
    );
};

export default MeetOurGuides;