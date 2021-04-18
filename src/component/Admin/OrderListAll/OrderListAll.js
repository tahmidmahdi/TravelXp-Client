import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const OrderListAll = ({ order }) => {
    const [objId, setObjId] = useState(null)
    const handleChange = event => {
        console.log(event);
        setObjId(event)
    }
  
    const { register, handleSubmit } = useForm();
    const onChange = data => {
        console.log(data.status)
       const newData = {...data}
       newData.id= objId
        


        fetch(`https://secure-sea-65701.herokuapp.com/statusUpdate`,{
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(newData)
        })
    }
  
    return (
        <tr onChange={()=>handleChange(order._id)}>
            <th>{order.name}</th>
            <th>{order.email}</th>
            <th>{order.event}</th>
            <th>Credit</th>
            <th>
                <form onChange={handleSubmit(onChange)}>
                    
                    <select {...register("status")}>
                        <option value="pending">Pending</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="done">Done</option>
                    </select>
                   
                </form>
            </th>
        </tr>
    );
};

export default OrderListAll;