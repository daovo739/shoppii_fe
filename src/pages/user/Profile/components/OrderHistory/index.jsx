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
        all: [],
    })
    const { user } = useAuth()

    const getOrders = async () => {
        const q = queryString.stringify({
            userId: user.userId,
            // status: "Accepted",
        })
        const res = await get('order', q)
        const data = await res.json()
        const pendingList = data.filter(order => order.status === 'Pending')
        const acceptedList = data.filter(order => order.status === 'Accepted')
        const rejectedList = data.filter(order => order.status === 'Rejected')
        console.log(acceptedList)
        setOrders(prev => {
            return {
                ...prev,
                all: data,
            }
        })
        setOrders(prev => {
            return {
                ...prev,
                accepted: acceptedList,
            }
        })
        setOrders(prev => {
            return {
                ...prev,
                rejected: rejectedList,
            }
        })
        setOrders(prev => {
            return {
                ...prev,
                pending: pendingList,
            }
        })
    }

    useEffect(() => {
        getOrders()
    }, [])
    console.log(orders)
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
