import { useState } from 'react'
import { publicRoutes, privateRoutes } from './routes/routes'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import PrivateLayout from './layouts/PrivateLayout'
import { useAuth } from './hooks/useAuth'

function App() {
    const { user } = useAuth()
    const [routes, setRoutes] = useState(() => {
        let routes = publicRoutes
        console.log(user)
        if (user) {
            routes = user.isAdmin ? privateRoutes : publicRoutes
        }
        return routes
    })
    return (
        <div className="App">
            <Routes>
                {routes.map((route, index) => {
                    let Layout = DefaultLayout
                    if (user) {
                        Layout = user.isAdmin ? PrivateLayout : DefaultLayout
                    }
                    const Page = route.component
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </div>
    )
}

export default App
