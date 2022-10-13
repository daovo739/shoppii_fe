import CartShop from './components/CartShop'
import CartTotal from './components/CartTotal'

function Cart() {
    return (
        <div>
            {[0,1,2].map(item => (
                <CartShop key={item}/>
            ))}
            <CartTotal />
        </div>
    )
}

export default Cart
