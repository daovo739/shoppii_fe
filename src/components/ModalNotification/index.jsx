import './index.css'

function ModalNotification() {
    return (
        <div className="success-checkmark d-flex flex-column justify-content-between align-items-center">
            <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
            </div>
            <h2
                style={{
                    marginTop: '20px',
                }}
            >
                Check
            </h2>
        </div>
    )
}

export default ModalNotification
