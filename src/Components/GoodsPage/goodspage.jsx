import Header from "../Header/header"
import Footer from "../Footer/footer"
import Goods from "../Goods/goods"
import Crumbs from "../Breadcrumbs/crumbs"
export default function GoodsPage(){
    return(
        <>
        <Header></Header>
        <Crumbs/>
        <Goods></Goods>
        <Footer></Footer>
        </>
    )
}