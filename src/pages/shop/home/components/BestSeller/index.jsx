import { Container, Row, Col } from 'react-bootstrap'
import { EmojiEventsTwoTone } from '@mui/icons-material'
import ProductImage from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'

function BestSeller() {
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center p-4 my-3"
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    borderRadius: '10px',
                }}
            >
                <Container fluid="md">
                    <Row>
                        <Col md={12} className="d-flex justify-content-center">
                            <EmojiEventsTwoTone
                                sx={{
                                    fontSize: '100px',
                                    color: 'rgb(232, 232, 0)',
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={12} className="d-flex justify-content-center">
                            <h2
                                style={{
                                    fontWeight: 'bold',
                                    paddingTop: '5px',
                                    marginLeft: '8px',
                                }}
                            >
                                Bán chạy nhất
                            </h2>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md={12} className="d-flex mt-3">
                            <img
                                src={ProductImage}
                                alt=""
                                style={{
                                    width: '8rem',
                                    border: '2px solid rgb(232, 232, 0)',
                                    padding: '2px',
                                    borderRadius: '10px',
                                }}
                            />
                            <div className="ms-3">
                                <p style={{ margin: '0', marginTop: '1rem' }}>
                                    Tên sản phẩm gì đó
                                </p>
                                <p
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '1.5rem',
                                            color: 'gray',
                                            fontWeight: 'lighter',
                                        }}
                                    >
                                        Số lượt bán :
                                    </span>{' '}
                                    50
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BestSeller
