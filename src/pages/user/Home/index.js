import Categories from './components/Categories'
import ControlledCarousel from './components/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import { useHome } from '../../../hooks/useHome'
import ShopHomePage from '../../shop/home'

function Home() {
    const { categories } = useHome()

    return (
        <div>
            <Container>
                <Row style={{ marginBottom: '4rem' }}>
                    <ControlledCarousel />
                </Row>
                <Row>
                    <Col>
                        <Categories categories={categories} />
                    </Col>
                </Row>
                <ShopHomePage/>
            </Container>
        </div>
    )
}

export default Home
