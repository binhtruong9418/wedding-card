import React, { createContext, useEffect, useState } from 'react'
import { Spin } from 'antd'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'


export const AuthContext = createContext()

export default function AuthProvider( {children} ) {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                const {displayName, email, uid, photoURL} = user
                setUser({
                    displayName,
                    email,
                    uid,
                    photoURL,
                })
                navigate('/')
                setLoading(false)
                return;
            }
            setLoading(false)
            navigate('login')
        })

        return () => {
            unsubcribed()
        }

    }, [navigate])



  return (
    <AuthContext.Provider value={{user}}>
       { loading ?  <Spin /> : children }
    </AuthContext.Provider>
  )
}
