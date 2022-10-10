import React from 'react'
import ProfileBox from './components/ProfileBox'
import ProfileSideBar from './components/ProfileSidebar'
import { editPro } from '../Profile/components/ProfileSidebar'
import {Container, Row, Col} from 'react-bootstrap'

function Profile() {
    const [content, setContent] = React.useState(editPro)

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
                        <ProfileSideBar getAction={getActionFromSidebar} />
                    </Col>
                    <Col md={9}>
                        <ProfileBox content={content} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Profile
