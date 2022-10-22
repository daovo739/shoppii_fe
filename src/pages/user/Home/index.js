import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
import Categories from './components/Categories'
<<<<<<< HEAD
import ControlledCarousel from './components/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import FilterSidebar from '../../../components/FilterSidebar'
=======
import Carousel from './components/Carousel'
>>>>>>> 205d4fd951fd3ed8f395c4f1cbbde1c68fca522e
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
                    <Col
                        md={'auto'}
                        className="p-4 d-flex justify-content-center align-items-center"
                    >
                        <FilterSidebar />
                    </Col>
                    <Col md="10">
                        <Categories />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
