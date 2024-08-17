import { useState, useEffect } from "react"
import SectionWrapper from "../Section_wrapper/wrapper"
import "./goodcontent.css"
function GoodContent() {
    const [active, isActive] = useState("color--black");
    const [create, SetGoods] = useState([]);
    const [activecolor, isColorActive] = useState("0");
    const [count, isCount] = useState("1");

    useEffect(() => {
        const fetchGoods = async () => {
            try {
                const response = await fetch("http://localhost:8080/selectedgoods");
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                const data = await response.json();
                SetGoods(data.data); // assuming your data is in the 'data' field of the response
            } catch (error) {
                console.error("Problem with getting data:", error);
            }
        };

        fetchGoods();
    }, []); // пустий масив залежностей означає, що цей ефект виконається лише один раз після першого рендеру


    const counthandleChange = (newValue) => {
        isCount(newValue.target.value);
    }
    const handleChange = (newValue) => {
        isActive(newValue)
    }
    const colorhandleChange = (newValue) => {
        isColorActive(newValue);
    }

    const addtocart = async () => {
        //Зберігати в сесіях кількість та колір обраного товара
        let id = create.find(elem => elem.data_button === active).id
        const response = await fetch(`http://localhost:8080/add-to-cart/${id}`, {
            method: 'GET',
            credentials: 'include',
        })
        if (!response.ok) {
            console.log("Error!")
        } else {
            console.log("Success")

        }

        const sessionresponse = await fetch('http://localhost:8080/api/session', {
            method: 'GET',
            credentials: 'include',
        })
        const sessiondata = await sessionresponse.json()
        console.log("Session Data", sessiondata)
    }

    return (

        <>
            {/* {console.log("goods", create.find(elem => elem.data_button === active).id)} */}
            <div className="img_good">
                <div className="choose-color-active">
                    {
                        create.map((item, index) => (
                            <div key={index}>
                                <img className={`content-item ${item.data_button === active ? "content-item__active" : ""}`} src={`http://localhost:8080/assets/${item.imagePATH}`} />
                            </div>
                        ))
                    }
                </div>

                <div className="choose-color__list">
                    {create.map((item, index) => (
                        <button key={index}
                            className={`choose-color-btn ${active === item.data_button ? "choose-color-btn--active" : ""}`}
                            onClick={() => handleChange(item.data_button)}
                        >
                            <img className="choose-color-img" src={`http://localhost:8080/assets/${item.imagePATH}`} alt="" />
                        </button>
                    ))}

                </div>

            </div>
            <div className="good_purchase">
                <p className="good_title">Блекаут Твін двосторонній</p>
                {create.map((item, index) => (
                    <p key={index} className="good_price">{active === item.data_button ? `${item.price * count}  пог/м` : ""}</p>

                ))}
                <div className="input-group">
                    <input onChange={counthandleChange} className="good_count" type="number" value={count} />
                    <label className="label_content">пог.м</label>
                </div>
                <div className="color_group">
                    <p className="color_title">Кольори:</p>
                    <ul className="color_list">
                        {create.find(elem => elem.data_button === active)?.color.map((color, index) => (
                            <li key={index} onClick={() => colorhandleChange(index)} className={`color_list_elem ${index === activecolor ? "active" : ""}`}>
                                <button className={`color_list_elem_button`} style={{ backgroundColor: color }}></button>
                            </li>
                        ))}
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