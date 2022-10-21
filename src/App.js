import { useState, useEffect } from 'react'
import { publicRoutes, privateRoutes, shopRoutes } from './routes/routes'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import PrivateLayout from './layouts/PrivateLayout'
import { useAuth } from './hooks/useAuth'

function App() {
    const { user, role } = useAuth()
    const [routes, setRoutes] = useState(() => {
        let routes = publicRoutes
        console.log(user)
        console.log(role)
        if (role === 'admin') {
            routes = privateRoutes
        }
        if (role === 'shop') {
            routes = shopRoutes
        }

        return routes
    })

    useEffect(() => {
        let routes = publicRoutes
        console.log('role at useeffect: ' + role)
        if (role === 'admin') {
            routes = privateRoutes
        }
        if (role === 'shop') {
            routes = shopRoutes
        }
        setRoutes(routes)
    }, [role])

    return (
        <div className="App">
            <Routes>
                {routes.map((route, index) => {
                    let Layout = DefaultLayout

                    Layout =
                        role === 'admin' || role === 'shop'
                            ? PrivateLayout
                            : DefaultLayout

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
