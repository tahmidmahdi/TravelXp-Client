import React from 'react';

const OrderListAll = ({order}) => {
    return (
       <tr>
           <th>{order.name}</th>
           <th>{order.email}</th>
           <th>{order.event}</th>
           <th>Credit</th>
           <th>Action</th>
       </tr>
    );
};

export default OrderListAll;