import React from 'react'
import { googleLogout, googleSessionLogin, googleSignInWithPopup } from '../apis/auth'

const TestPage = () => {
  return (
    <div>
        <button onClick={()=>googleSessionLogin()}>구글 로그인 됨?</button>
        <button onClick={()=>googleLogout()}>구글 로그아웃 됨?</button>
    </div>
  )
}

export default TestPage