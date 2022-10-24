import SideBar from '../SideBar'

function PrivateLayout({ children }) {
    return (
        <div>
            <SideBar />
            <div
                style={{
                    marginLeft: '250px',
                    padding: '40px 30px',
                    minHeight: '100vh',
                    backgroundColor: 'var(--box-color)'
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout
