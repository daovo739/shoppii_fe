import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
import Categories from './components/Categories'
import ControlledCarousel from './components/Carousel'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     get('category').then((res) => {
    //         setCategory(res)
    //     }
    // }, [])

    return (
        <div>
            <Container>
                <Row style={{ marginBottom: '4rem' }}>
                    <ControlledCarousel />
                </Row>
                <Row>
                    <Col>
                        <Categories />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
