import Category from '../Category'
import { Container, Row, Col } from 'react-bootstrap'

function Categories() {
    const cate = {
        link: 'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
        name: 'Thời trang',
    }
    return (
        <div className="categories">
            <Container fluid="md">
                <Row>
                    <Col md={12} className="p-4 d-flex justify-content-center align-items-center">
                        <h2 style={{ borderBottom: '0.3rem solid var(--main-blue)', paddingBottom: '0.3rem' }}>DANH MỤC</h2>
                    </Col>
                </Row>
                <Row>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                        <Category
                            key={item}
                            imgLink={cate.link}
                            name={cate.name}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Categories
