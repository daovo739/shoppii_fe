import { PayPalButtons } from '@paypal/react-paypal-js'
import { useEffect, useState, useMemo } from 'react'
import queryString from 'query-string'

const API_CONVERTER = 'https://api.exchangerate.host/convert'
function PaypalButton({ infoCheckout }) {
    const [amountUSD, setAmountUSD] = useState(0)

    const convertUSDtoVND = async () => {
        const q = queryString.stringify({
            from: 'VND',
            to: 'USD',
            amount: infoCheckout.totalPrice,
        })
        const res = await fetch(`${API_CONVERTER}?${q}`)
        const data = await res.json()

        setAmountUSD(data.result.toFixed(2))
    }

    useEffect(() => {
        convertUSDtoVND()
    }, [infoCheckout])

    return (
        <PayPalButtons
            style={{ layout: 'horizontal', color: 'blue' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: 'USD',
                                value: 1,
                            },
                        },
                    ],
                })
            }}
            onApprove={(data, actions) => {
                console.log(data)
                console.log(actions)
            }}
        />
    )
}

export default PaypalButton
