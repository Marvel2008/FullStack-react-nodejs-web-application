import logo from "../../../assets/Frame.png"
function Header() {
    return (
        <>
            <header className="header">
                <div className="container header_container">
                    <img className="logo" src={logo} alt=""/>
                    <hr />
                </div>
            </header>
        </>
    )
}

export default Header;