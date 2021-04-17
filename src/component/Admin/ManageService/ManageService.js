import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';



const ManageService = () => {
    const [events , setEvents] = useState([])

    useEffect(()=>{
        fetch(`https://secure-sea-65701.herokuapp.com/allEvents`)
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div className='container'>
            
           <div className='row'>
               <div className="col-md-4">
               <AdminNav></AdminNav>
               </div>
              {
                  events.map(event => <ManageServiceCard event={event}></ManageServiceCard>)
              }
           </div>
        </div>
    );
};

export default ManageService;