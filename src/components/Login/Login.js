import { GoogleCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import styled from 'styled-components'
import { auth } from '../../firebase/config'



const ContentStyled = styled.div`
    width: 40%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;
    justify-content: center;

`

export default function Login() {

    const ggProvider = new GoogleAuthProvider 

    const handleGgSignIn = async () => {
        const data = await signInWithPopup(auth, ggProvider)
        console.log(data);
    }


  return (
    <ContentStyled>
        <h1>WelCome to Binh todolist</h1>
        <h5><i>1 sản phẩm made by Binh troll</i></h5>
        <Button
            onClick={handleGgSignIn}
            type='primary'
            shape='round'
            icon={ <GoogleCircleFilled /> }
            className='d-flex align-items-center'
        >
            
            Đăng nhập với Google
        </Button>
    </ContentStyled>
  )
}
