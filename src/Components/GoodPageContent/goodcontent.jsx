import { useEffect, useState } from "react"
import SectionWrapper from "../Section_wrapper/wrapper"
import "./goodcontent.css"
function GoodContent({ goods, active, colorgoods, handleChange }) {
    if (!goods || !active || colorgoods.length==0) {
        return <div>Loading</div>; // Або будь-який інший індикатор завантаження
    }
    const [activecolor, isColorActive] = useState(colorgoods[0].article);
    const [count, isCount] = useState("1");
    const [GoodInCart, SetGoodInCart] = useState({})

    const counthandleChange = (newValue) => {
        isCount(newValue.target.value);
    }

    const colorhandleChange = (newValue) => {
        isColorActive(newValue);
    }
    //Тут використати useReducer що параметри змінювалися
    const addtocart = () => {
        //Зберігати в сесіях кількість та колір обраного товара
        const selectedcolor = colorgoods.find(elem => elem.article===activecolor).color
        const selectedGood = goods.find(elem => elem.article === active);

        SetGoodInCart(prevState => ({
            ...prevState,
            article: activecolor,
            color: selectedcolor,
            img: selectedGood.imagePATH,
            amount: count,
            price: selectedGood.price * count,//Не передавати
        }));
    }

    useEffect(()=>{
        if (Object.keys(GoodInCart).length > 0) { // Перевіряємо, чи не порожній об'єкт
            (async () => {
                try {
                    const response = await fetch('http://localhost:8080/add-to-cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                        body: JSON.stringify(GoodInCart),
                    })
                    if (!response.ok) {
                        console.log("Error!")
                    }
                    const sessionresponse = await fetch('http://localhost:8080/api/session', {
                        method: 'GET',
                        credentials: 'include',
                    })
                    const sessiondata = await sessionresponse.json()
                    console.log("Session Data", sessiondata)
                } catch (error) {
                    console.log("Error during request ", error)
                }
            })()
        }
    },[GoodInCart])

    return (

        <>
            <div className="img_good">
                <div className="choose-color-active">
                    {
                        goods.map((item, index) => (
                            <div key={index}>
                                <img className={`content-item ${item.article === active ? "content-item__active" : ""}`} src={`http://localhost:8080/assets/${item.imagePATH}`} />
                            </div>
                        ))
                    }
                </div>

                <div className="choose-color__list">
                    {goods.map((item, index) => (
                        <button key={index}
                            className={`choose-color-btn ${active === item.article ? "choose-color-btn--active" : ""}`}
                            onClick={() => handleChange(item.article)}
                        >
                            <img className="choose-color-img" src={`http://localhost:8080/assets/${item.imagePATH}`} alt="" />
                        </button>
                    ))}

                </div>

            </div>
            <div className="good_purchase">
                <p className="good_title">Блекаут Твін двосторонній</p>
                {goods.map((item, index) => (
                    <p key={index} className="good_price">{active === item.article ? `${item.price * count}  пог/м` : ""}</p>

                ))}
                <div className="input-group">
                    <input onChange={counthandleChange} className="good_count" type="number" value={count} />
                    <label className="label_content">пог.м</label>
                </div>
                <div className="color_group">
                    <p className="color_title">Кольори:</p>
                    <ul className="color_list">
                        {colorgoods.map((item,index)=>(
                            <li key={index} onClick={() => colorhandleChange(item.article)} className={`color_list_elem ${item.article === activecolor ? "active" : ""}`}>
                            <button className={`color_list_elem_button`} style={{ backgroundColor: item.color }}></button>
                            <p className="hint">{`Amount:${item.amount}`}</p>
                        </li>
                        ))}
                        {/* {create.find(elem => elem.data_button === active)?.color.map((color, index) => (
                            <li key={index} onClick={() => colorhandleChange(index)} className={`color_list_elem ${index === activecolor ? "active" : ""}`}>
                                <button className={`color_list_elem_button`} style={{ backgroundColor: color }}></button>
                            </li>
                        ))} */}

                        {/* find-знаходить перший елемент, ?-оператор опціональної ланцюжкової обробки для безпечного доступу до кольорів 
                            якщо елемента не знайдено, то поверне undefined і map не буде викликано  */}

                    </ul>
                    <button onClick={addtocart} className="button_add_basket">Додати в кошик</button>
                </div>
            </div>
            <div className="attention">
                <p className="attention_content">
                    Зверніть увагу! Колірна гамма виробу залежить від налаштувань вашого монітора і може відрізнятися від реального.
                </p>
            </div>
        </>
    )
}

export default SectionWrapper('good_content', 'good_content_container', GoodContent);