import LoginHeader from "./Header/header"
import Form from "./Forms/form"
import Waves from "./Wave/wave"
import Footer from "../Footer/footer"
import "./login.css"

function Login(){
    return(
        <>
        <LoginHeader/>
        <main>
        <Form/>
        <Waves/>
        </main>
        <Footer/>
        </>
    )
}

export default Login;
