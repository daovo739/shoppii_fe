import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div
            style={{ marginTop: '10rem', textAlign: 'center' }}
            className="d-flex justify-content-center align-items-center flex-column"
        >
            <h1 style={{ color: 'red' }}>404</h1>
            <h2>Page not found</h2>
            <Button
                variant="primary"
                onClick={() => navigate('/')}
                style={{
                    fontSize: '1.5rem',
                }}
            >
                Go to home
            </Button>
        </div>
    )
}

export default NotFound
