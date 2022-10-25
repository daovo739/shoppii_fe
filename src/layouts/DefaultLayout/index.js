import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container } from 'react-bootstrap'
import { HomeProvider } from '../../hooks/useHome'
import ProductProvider from '../../store/Provider'

function DefaultLayout({ children }) {
    return (
        <HomeProvider>
            <ProductProvider>
                <div className="w-100 div-nav-default">
                    <Navbar />
                </div>

                <div
                    className="w-100 div-body-default"
                    style={{ paddingTop: '5rem' }}
                >
                    <Container style={{ paddingBottom: '10rem' }}>
                        {children}
                    </Container>
                </div>
                <div className=" div-footer-default">
                    <Footer />
                </div>
            </ProductProvider>
        </HomeProvider>
    )
}

export default DefaultLayout
