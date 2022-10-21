import SideBar from '../SideBar'

function PrivateLayout({ children }) {
    return (
        <div>
            <SideBar />
            <div
                style={{
                    marginLeft: '250px',
                    padding: '0 30px',
                    minHeight: '100vh',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout
