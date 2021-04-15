import React from 'react';
import { Card } from 'react-bootstrap';

const MeetOurGuidesList = ({ guide }) => {
    return (
        <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height:'24rem'}} variant="top" src={guide.img} />
                <Card.Body>
                    <Card.Title>{guide.name}</Card.Title>
                    <Card.Text>
                        {guide.country}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MeetOurGuidesList;