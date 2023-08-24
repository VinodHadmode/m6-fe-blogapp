import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const SignUp = () => {
    const [username, setUserName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            username,
            avatar,
            email,
            password
        }
        // console.log(obj);

        fetch("https://red-agreeable-wildebeest.cyclic.cloud/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)

        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    alert(res.msg)
                    navigate("/signin")
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err)
            })

        setUserName("")
        setAvatar("")
        setEmail("")
        setPassword("")

    }

    return (
        <div>
            <h2>Signup page</h2>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' name='username' value={username} onChange={(e) => setUserName(e.target.value)} />  <br /> <br />
                <input type="text" placeholder='Enter Avatar' name='avatar' value={avatar} onChange={(e) => setAvatar(e.target.value)} /> <br /> <br />
                <input type="email" placeholder='Enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <input type="password" placeholder='Enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp




/* - Username
- Avatar (You can user a dummy avatar image URL)
- Email
- Password
*/