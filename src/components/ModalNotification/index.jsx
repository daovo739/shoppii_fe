import './index.css'

function ModalNotification({ type }) {
    const className =
        type === 'success'
            ? 'o-circle__sign--success'
            : 'o-circle__sign--failure'
    const description =
        type === 'success' ? 'Thanh toán thành công' : 'Thanh toán thất bại'

    return (
        <section className="c-container">
            <div className={`o-circle c-container__circle ${className}`}>
                <div className="o-circle__sign"></div>
            </div>
            <h1 className="o-circle_notification">{description}</h1>
        </section>
    )
}

export default ModalNotification
