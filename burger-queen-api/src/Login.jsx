import { useState } from "react";

export function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            email: data.email,
            password: data.password
        }

        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)

        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <img className="logobq" src="./assetsburgerqueen/logoburgerqueen.png" />
            <div className="containerLogIn">
                <form className="FormLogIn" onSubmit={handleSubmit}>
                    <input type="email" className="formEmail" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <input type="password" className="formPassword" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    <button className="LogIn">Log In</button>
                </form>
            </div>

        </>
    )
}