import React from "react";
import './index.css'
import OrderHistoryItem from "../OrderHistoryItem";

function OrderHistory() {
    return (
        <div className="order-history w-100">
            {[0,1,2].map(item => (
                <OrderHistoryItem key={item}/>
            ))}
        </div>
    )
}

export default OrderHistory