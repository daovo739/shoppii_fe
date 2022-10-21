import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import { ROLE_USER } from './constants'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null)
    const [role, setRole] = useLocalStorage('role', ROLE_USER)
    const navigate = useNavigate()

    const login = async (data, role) => {
        setUser(data)
        setRole(role)
        navigate('/', { replace: true })
    }

    const logout = () => {
        setUser(null)
        setRole(ROLE_USER)
        navigate('/', { replace: true })
    }

    const changeRole = role => {
        setRole(role)
    }
    const value = useMemo(
        () => ({
            user,
            login,
            logout,
            role,
            changeRole,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user, role],
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
