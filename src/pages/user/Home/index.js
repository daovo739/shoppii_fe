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
<<<<<<< HEAD
                {/* <Row>
                    <Col
                        md={'auto'}
                        className="p-4 d-flex justify-content-center align-items-center"
                    >
                        <FilterSidebar />
                    </Col>
                    <Col md="10">
=======
                <Row>
                    <Col>
>>>>>>> b2375cfe0111e4828e24111372e2aaf12f388f63
                        <Categories />
                    </Col>
                </Row> */}
                <Row>
                    <Categories />
                </Row>
            </Container>
        </div>
    )
}

export default Home
