import { PayPalButtons } from '@paypal/react-paypal-js'
import { useEffect, useState, useMemo } from 'react'
import queryString from 'query-string'

const API_CONVERTER = 'https://api.exchangerate.host/convert'
function PaypalButton({ infoCheckout, handleCheckoutPaypal }) {
    // const convertUSDtoVND = async () => {
    //     const q = queryString.stringify({
    //         from: 'VND',
    //         to: 'USD',
    //         amount: infoCheckout.totalPrice,
    //     })
    //     const res = await fetch(`${API_CONVERTER}?${q}`)
    //     const data = await res.json()

    //     return data.result.toFixed(2)
    // }

    return (
        <PayPalButtons
            style={{ layout: 'horizontal', color: 'blue' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: 'USD',
                                value: parseFloat(
                                    (infoCheckout.totalPrice / 23000).toFixed(
                                        2,
                                    ),
                                ),
                            },
                        },
                    ],
                })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(details => {
                    handleCheckoutPaypal('success')
                })
            }}
            onError={err => {
                handleCheckoutPaypal('failure')
            }}
        />
    )
}

export default PaypalButton
