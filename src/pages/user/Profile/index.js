import React, { useState } from 'react'
import BoxContent from '../../../components/BoxContent'
import ProfileSideBar from './components/ProfileSidebar'
import { editPro } from '../Profile/components/ProfileSidebar'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
function Profile() {
    const { state } = useLocation()
    const [content, setContent] = useState(editPro)

    const getActionFromSidebar = action => setContent(action)

    return (
        <main
            className="container d-flex justify-content-between h-auto"
            style={{
                margin: 0,
                backgroundColor: '#fafafa',
            }}
        >
            <Container fluid="">
                <Row>
                    <Col md={3}>
                        <ProfileSideBar
                            getAction={getActionFromSidebar}
                            action={state?.action}
                        />
                    </Col>
                    <Col md={9}>
                        <BoxContent content={content} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Profile
