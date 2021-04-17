import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import OrderListAll from '../OrderListAll/OrderListAll';

const OrderList = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch(`https://secure-sea-65701.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-3" >
                <AdminNav></AdminNav>
            </div>

            <div className="col-md-9 mt-5" >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Paiedwith</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          allOrders.map(order => <OrderListAll order={order}></OrderListAll>)
                      }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default OrderList;