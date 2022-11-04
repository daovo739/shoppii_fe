import { PayPalButtons } from '@paypal/react-paypal-js'

function PaypalButton() {
    return (
        <PayPalButtons
            style={{ layout: 'horizontal', padding: '0' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: 500,
                            },
                        },
                    ],
                })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(details => {
                    const name = details.payer.name.given_name
                    alert(`Transaction completed by ${name}`)
                })
            }}
        />
    )
}

export default PaypalButton
