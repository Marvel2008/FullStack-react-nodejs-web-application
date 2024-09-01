import Header from "../Header/header"
import Footer from "../Footer/footer"
import GoodPageContent from "../GoodPageContent/goodcontent"
import Crumbs from "../Breadcrumbs/crumbs"
import Characteristics from "../Good_characteristics/good_characteristics"
import OrderInfo from "../Order_info/info"
import DelPay from "../DeliveryPayment/delpay"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
function GoodPage() {
    const [goods, SetGoods] = useState([])
    const [colorgoods, SetColorGoods] = useState([])
    let { article } = useParams()
    const [active, isActive] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const firstresponse = await fetch(`http://localhost:8080/third_article/${article}`);
                if (!firstresponse.ok) {
                    throw new Error("Network response was not ok " + firstresponse.statusText);
                }
                const data = await firstresponse.json() // Очікуємо результат перетворення на JSON, використовуємо await бо цей метод повертає Promise
                SetGoods(data.data);
                isActive(data.data[0].article)
            } catch (error) {
                console.error("Problem with getting data:", error);
            }
        })();//()-виклик функції одразу після її визначення
    }, [])
    useEffect(() => {
        (async () => {
            try {
                console.log("Active Article for colors ", active)
                const response = await fetch(`http://localhost:8080/fourth_article/${active}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                const data = await response.json()
                SetColorGoods(data.data)
                console.log("Colors",data.data)
            } catch (err) {
                console.log("Problem with getting data:", err)
            }
        })()
    }, [active])
    //active змінюється, і я відправляю запит на сервер і отримую кольори активного товара, або за раз отримувати всі товари
    const handleChange = (newValue) => {
        isActive(newValue)
    }
    return (
        <>
            <Header />
            <Crumbs />
            <GoodPageContent goods={goods} active={active} colorgoods={colorgoods} handleChange={handleChange} />
            <Characteristics good={goods.find(elem => elem.article === active)} />
            <OrderInfo />
            <DelPay />
            <Footer />
        </>
    )
}

export default GoodPage;