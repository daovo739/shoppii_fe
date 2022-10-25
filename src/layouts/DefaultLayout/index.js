import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container } from 'react-bootstrap'
import { HomeProvider } from '../../hooks/useHome'
import UserProvider from '../../store/UserProvider'

function DefaultLayout({ children }) {
    return (
        <HomeProvider>
            <UserProvider>
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
            </UserProvider>
        </HomeProvider>
    )
}

export default DefaultLayout
