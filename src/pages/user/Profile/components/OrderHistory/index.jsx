import React, { useState } from "react";
import './index.css'
import OrderHistoryItem from "../OrderHistoryItem";
import { get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'
import { ErrorSharp } from "@mui/icons-material";
import { useEffect } from "react";

function OrderHistory() {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const getOrders = async () => {
        const q = queryString.stringify({
            userId: user.userId,
            status: 'accepted'
        })
        const res = await get('order', q)
        const data = await res.json()
        console.log(data);
        setOrders(data)
    }

    useEffect(() => {
        getOrders()
    },[])

    return (
        <div className="order-history w-100">
            {orders.map((order, index) => (
                <OrderHistoryItem key={index} order={order}/>
            ))}
        </div>
    )
}

export default OrderHistory