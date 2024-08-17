import Header from "../Header/header"
import Footer from "../Footer/footer"
import GoodPageContent from "../GoodPageContent/goodcontent"
import Crumbs from "../Breadcrumbs/crumbs"
import Characteristics from "../Good_characteristics/good_characteristics"
import OrderInfo from "../Order_info/info"
import DelPay from "../DeliveryPayment/delpay"
function GoodPage() {

    return (
        <>
            <Header />
            <Crumbs />
            <GoodPageContent />
            <Characteristics />
            <OrderInfo />
            <DelPay />
            <Footer />
        </>
    )
}

export default GoodPage;