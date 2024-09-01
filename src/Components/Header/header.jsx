import "./header.css"
import { Link } from "react-router-dom";
import RootLayout from "../RootLayout/rootlayout"
export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container header_container">
                   <Link to="/"> <img src="https://assets-global.website-files.com/662f8e58f3c026e1bee4151e/662fd9d87ba29011df8282cf_Logo.svg"/></Link>
                    <nav className="header_list">
                        <RootLayout/>
                    </nav>
                </div>
            </header>
        </>
    )
}

