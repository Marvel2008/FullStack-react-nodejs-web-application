import Header from "../Header/header"
import Footer from "../Footer/footer"
import Goods from "../Goods/goods"
import Crumbs from "../Breadcrumbs/crumbs"
import { useState, useEffect } from "react"
export default function GoodsPage(){
    const [allgoods, SetAllGoods] = useState([])
    useEffect(() => {
       // Використовуємо самовикликану асинхронну функцію
       (async () => {
        try {
            const response = await fetch("http://localhost:8080/first_article");
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            const data = await response.json(); // Очікуємо результат перетворення на JSON, використовуємо await бо цей метод повертає Promise
            const groupeddata = data.data.reduce((groups, product) => {
                const groupKey = product.article.split('_')[0]; // Отримуємо першу частину артикула
                if (!groups[groupKey]) {
                    groups[groupKey] = []; // Створюємо нову групу якщо її не існує
                }
                groups[groupKey].push(product);
                return groups;
            }, {});
            SetAllGoods(groupeddata); 
        } catch (error) {
            console.error("Problem with getting data:", error);
        }
    })();
    }, [])

    return(
        <>
        <Header></Header>
        <Crumbs/>
        <Goods allgoods={allgoods}/>
        <Footer></Footer>
        </>
    )
}

