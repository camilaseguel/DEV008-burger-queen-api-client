import { Link } from "react-router-dom";
import { Login } from "./Login";


export function Home() {
    return (
        <>
            <img src="./assetsburgerqueen/logoburgerqueen.png" /><br />
            <Link className="a-login" to="Login">Log In</Link><br />
        </>
    )
}