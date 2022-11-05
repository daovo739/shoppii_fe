import { Container, Row, Col } from 'react-bootstrap'
import Todo from './components/Todo/index'
import BestSeller from './components/BestSeller/index'
import FilterTotal from './components/FilterTotal/index'

function ShopHomePage() {
    return (
        <>
            <Container fluid="md">
                <Row
                    className="p-3 my-4"
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                    }}
                >
                    <h2 className="fw-bold mb-0">Việc cần làm</h2>
                </Row>
                <Row>
                    <Col md={8} className="px-0 d-block">
                        <Todo />
                        <FilterTotal />
                    </Col>
                    <Col md={4}>
                        <BestSeller />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ShopHomePage
