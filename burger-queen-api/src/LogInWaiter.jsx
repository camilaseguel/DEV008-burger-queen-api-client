export function LogInWaiter() {
    return (
        <>
            <img className="logobq" src="./assetsburgerqueen/logoburgerqueen.png" />
            <div className="containerLogIn">
                <form className="FormLogIn">
                    <input type="text" className="formEmail" placeholder="Email" />
                    <input type="password" className="formPassword" placeholder="Password" />
                    <button className="LogIn">Log In</button>
                </form>
            </div>
        </>
    )
}