import Header from "../Header/header"
import Footer from "../Footer/footer"
import CartContent from "../CartContent/cartcontent"
import BreadCrumbs from "../Breadcrumbs/crumbs"
import { useEffect, useState } from "react"
function Cart() {
    const [cartgoods, SetCartGoods] = useState([])
    useEffect(() => {
        (async () => {
            const sessionresponse = await fetch('http://localhost:8080/shopping-cart', {
                method: 'GET',
                credentials: 'include',
            })
            const sessiondata = await sessionresponse.json()
            SetCartGoods(sessiondata.products)
            console.log("Session Data", sessiondata)
        })()
    },[])
    return (
        <>
            <Header />
            <BreadCrumbs/>
            <CartContent cartgoods={cartgoods}/>
            <Footer />
        </>
    )
}

export default Cart;