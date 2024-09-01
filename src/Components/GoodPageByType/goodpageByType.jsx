import Header from "../Header/header"
import Footer from "../Footer/footer"
import GoodByType from "../GoodByTypeContent/goodbytype"
import Crumbs from "../Breadcrumbs/crumbs"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function GoodPageByType() {
    const [goods_type, SetGoodsType] = useState([])
    let { article } = useParams()
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:8080/second_article/${article}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                const data = await response.json(); // Очікуємо результат перетворення на JSON, використовуємо await бо цей метод повертає Promise
                SetGoodsType(data.data);
            } catch (error) {
                console.error("Problem with getting data:", error);
            }
        })();
    },[])
    return (
        <>
            <Header></Header>
            <Crumbs></Crumbs>
            <main>
                <GoodByType goodsbytype={goods_type} />
            </main>
            <Footer></Footer>
        </>
    )
}

