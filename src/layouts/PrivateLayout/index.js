import SideBar from '../SideBar'

function PrivateLayout({ children }) {
    return (
        <div>
            <SideBar />
            <div
                style={{
                    marginLeft: '250px',
                    padding: '30px 0 0 50px',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout
