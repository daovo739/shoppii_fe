import { memo } from 'react'
import Category from '../Category'
import { Container, Row, Col } from 'react-bootstrap'

function Categories({ categories }) {
    return (
        <div className="categories">
            <Container fluid="md">
                <Row>
                    <Col
                        md={12}
                        className="p-4 d-flex justify-content-center align-items-center"
                    >
                        <h2
                            style={{
                                borderBottom: '0.3rem solid var(--main-blue)',
                                paddingBottom: '0.3rem',
                            }}
                        >
                            DANH MỤC
                        </h2>
                    </Col>
                </Row>
                <Row>
                    {categories?.map(category => {
                        const { category_id, category_name, categoryImg } =
                            category
                        return (
                            <Category
                                key={category_id}
                                imgLink={categoryImg}
                                name={category_name}
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default memo(Categories)
