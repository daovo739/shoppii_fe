import Categories from './components/Categories'
import ControlledCarousel from './components/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import { useHome } from '../../../hooks/useHome'
<<<<<<< HEAD
import Unregistered from '../GoToShop/components/Unregistered'
=======
>>>>>>> 23afe75d35b4df3f1b5f47a48c98f34ab5f17098

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
<<<<<<< HEAD
                <Unregistered/>
=======
>>>>>>> 23afe75d35b4df3f1b5f47a48c98f34ab5f17098
            </Container>
        </div>
    )
}

export default Home
