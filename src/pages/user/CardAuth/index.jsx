import './index.css'
import Image from '../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import { Row, Col, Carousel } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import LoginForm from '../../../components/LoginForm'
import RegisterForm from '../../../components/RegisterForm'
import RegisterFormGoogle from '../../../components/RegisterFormGoogle'
import ForgetPasswordForm from '../../../components/ForgetPasswordForm'

const images = [
    'https://i.pinimg.com/564x/c5/ea/26/c5ea260f95d23895d238eb6b28439fde.jpg',
    'https://i.pinimg.com/564x/99/82/e2/9982e23594d1ba87b1deaaa24ad5e2b1.jpg',
    'https://i.pinimg.com/564x/73/7d/3a/737d3a4c3c541fe6310d0c3663436d68.jpg',
]
function CardAuth() {
    const { pathname } = useLocation()

    return (
        <Row className="wrapper">
            <Col md={6} className="left">
                <Carousel controls={false} interval={2500}>
                    {images.map((image, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Col>
            <Col md={6} className="right d-flex justify-content-center">
                <div className="d-flex flex-column">
                    {pathname === '/login' && <LoginForm />}
                    {pathname === '/register' && <RegisterForm />}
                    {pathname === '/registerGG' && <RegisterFormGoogle />}
                    {pathname === '/forget-password' && <ForgetPasswordForm />}
                </div>
            </Col>
        </Row>
    )
}

export default CardAuth
