import { createContext, useContext, useMemo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import { ROLE_USER, ROLE_ADMIN, ROLE_SHOP } from './constants'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null)
    const [role, setRole] = useLocalStorage('role', ROLE_USER)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('1')
    }, [role])
    const login = async (data, role) => {
        setUser(data)
        setRole(role)
        if (role === ROLE_ADMIN) {
            setRole(ROLE_ADMIN)
            navigate('/admin', { replace: true })
        }
        if (role === ROLE_USER) {
            navigate('/', { replace: true })
        }
    }

    const logout = () => {
        setUser(null)
        setRole(ROLE_USER)
        navigate('/', { replace: true })
    }

    const changeRole = role => {
        setRole(role)
    }

    const handleSwitchShop = () => {
        // console.log('switch shop')
        changeRole(ROLE_SHOP)

        navigate('/shop', { replace: false })
    }

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
            role,
            changeRole,
            handleSwitchShop,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user, role],
    )

    console.log('render')

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
