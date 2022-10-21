import ShopHeader from './components/ShopHeader'
import BasicTabs from '../../../components/Tab'

function ViewShop() {
    return (
        <div className="view-shop">
            <ShopHeader />
            <div
                className="shop-content"
                style={{
                    backgroundColor: 'var(--white)',
                    marginTop: '3rem',
                    paddingTop: '3rem',
                    paddingLeft: '6rem',
                    paddingRight: '6rem'
                }}
            >
                <BasicTabs />
            </div>
        </div>
    )
}

export default ViewShop
