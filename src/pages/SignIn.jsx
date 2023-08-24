import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            email,
            password
        }
        // console.log(obj);

        fetch("https://red-agreeable-wildebeest.cyclic.cloud/api/login", {
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
                    localStorage.setItem("token",res.token)
                    navigate("/blogs")
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err)
            })

        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <h2>Sign In page</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <input type="password" placeholder='Enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignIn
