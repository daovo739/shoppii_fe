import React, { useState } from 'react'
import './index.css'
import OrderHistoryItem from '../OrderHistoryItem'
import { get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'
import { ErrorSharp } from '@mui/icons-material'
import { useEffect } from 'react'
import OrderHistoryTab from '../OrderHistoryTab'

function OrderHistory() {
    const [orders, setOrders] = useState({
        accepted: [],
        pending: [],
        rejected: [],
    })
    const { user } = useAuth()

    const getOrders = async status => {
        const q = queryString.stringify({
            userId: user.userId,
            status: "Accepted",
        })
        const res = await get('order', q)
        const data = await res.json()
        // console.log(data)
        setOrders({
            ...orders,
            [status]: data,
        })
    }

    useEffect(() => {
        getOrders('accepted')
        getOrders('pending')
        getOrders('rejected')
    }, [])
    console.log(orders);

    return (
        <div className="order-history w-100">
            {/* {orders.map((order, index) => (
                <OrderHistoryItem key={index} order={order}/>
            ))} */}
            <OrderHistoryTab
                accepted={orders.accepted}
                rejected={orders.rejected}
                pending={orders.pending}
            />
        </div>
    )
}

export default OrderHistory
