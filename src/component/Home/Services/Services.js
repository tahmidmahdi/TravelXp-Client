import React from 'react';
import ServicesList from '../ServicesList/ServicesList';
import peru from '../../../images/peru.jpg'
import safari  from '../../../images/safari.jpg'
import glaciers from '../../../images/glaciers.jpg'
import luxury from '../../../images/luxxuryBeach.jpg'
import ladakh from '../../../images/ladakh.jpg'
import spain from '../../../images/spain.jpg'
const services = [
    {
        img: peru,
        title: 'Peru and the Galapagos Luxury',
        description: 'A combination of two of the most stunning and important destinations in South America, all in...',
        price: 1200
    },
    {
        img: safari,
        title: 'Safari, Wine and Waterfalls',
        description: 'A wonderful introduction to the beauty and wildlife of Kenya, perfect for a first time visitor',
        price: 1200
    },
    {
        img: glaciers,
        title: 'Glaciers and Northern Lights',
        description: 'An introduction to the Harbour City, the Outback and Great Barrier Reef',
        price: 1200
    },
    {
        img: luxury,
        title: 'Peru and the Galapagos Luxury',
        description: 'A combination of two of the most stunning and important destinations in South America, all in...',
        price: 1200
    },
    {
        img: ladakh,
        title: 'Beautiful Ladakh',
        description: 'The place where Mountains and Blue Lake combines and produces devine Beauty...',
        price: 1200
    },
    {
        img: spain,
        title: 'Spain And The Traditions',
        description: 'Spain Is a place of great culture and divine beauty. It is the place ...',
        price: 1200
    },
]

const Services = () => {
    return (
        <div className="container text-center mt-5 pt-5">
            <h1>Explore The World With Us</h1>
            <div className='row' >
                {
                    services.map(service => <ServicesList service={service}></ServicesList>)
                }
            </div>
        </div>
    );
};

export default Services;