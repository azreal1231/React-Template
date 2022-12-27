import { useState } from "react"

const LoginPage = () => {

const [emailAddress, setEmailAddress] = useState('jamesdean@dean.com')
const [password, setPassword] = useState('jamesdean')

function onLoginClick(){
    localStorage.setItem("TCP_JWT", 'THISISMYTOKENHHAHAHAH')
    window.location.pathname = '/home'
}

return <>
<div>
    <input type="text" placeholder="email" />
    <input type="password" placeholder="password" />
    <button onClick={() => onLoginClick()}>Login</button>
</div>
</>
}

export default LoginPage