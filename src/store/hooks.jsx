import { useContext } from 'react'
import UserContext from './UserContext'

function useStore() {
    return useContext(UserContext)
}

export default useStore
