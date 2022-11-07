import Categories from './components/Categories'
import ControlledCarousel from './components/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import { useHome } from '../../../hooks/useHome'

function Home() {
    const { categories } = useHome()
    console.log('home')
    return (
        <div>
            <Container>
                <Row style={{ marginBottom: '4rem' }}>
                    <Col md={8}>
                        <ControlledCarousel />
                    </Col>
                    <Col md={4}>
                        <img
                            style={{ marginBottom: '0.4rem', borderRadius: '3px' }}
                            src="https://cf.shopee.vn/file/090a6e7f62b4b4a5739fcb9237931780_xhdpi"
                            alt=""
                        />
                        <img
                            style={{ borderRadius: '3px' }}
                            src="https://cf.shopee.vn/file/e8a32ad980217e152f03f6210069d11c_xhdpi"
                            alt=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Categories categories={categories} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
