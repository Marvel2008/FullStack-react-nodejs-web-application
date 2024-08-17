import { useEffect, useState } from "react";
import { images } from "../../data/wallpapers"
import { Link } from "react-router-dom";
import "./goods.css"
function Goods() {
    const [allgoods, SetAllGoods] = useState([])
    useEffect(() => {
        const fetchGoods = async () => {
            try {
                const response = await fetch("http://localhost:8080/first_article");
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                const data = await response.json();
                const groupeddata = data.data.reduce((groups, product) => {
                    const groupKey = product.article.split('_')[0];//Отримуємо першу частину артикула
                    if (!groups[groupKey]) {
                        groups[groupKey] = [];//Створюємо нову групу якщо її не існує
                    }
                    groups[groupKey].push(product);
                    return groups;
                }, {})
                SetAllGoods(groupeddata); // assuming your data is in the 'data' field of the response
            } catch (error) {
                console.error("Problem with getting data:", error);
            }
        };

        fetchGoods();
    }, [])
    return (
        <>
            <section className="wallpapers">
                <div className="container">
                    <div className="goods_catalog">
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Штори</h3>
                            <div className="goods_list">
                                
                                {

                                    allgoods['c'].map((info, index) => (
                                        <div key={index} className="goods_list_item">
                                            <Link to="/catalog/goodpage"><img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" /> </Link>
                                            <p className="kind photo_description">{info.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Тюль</h3>
                            <div className="goods_list">
                                {images.slice(11, 21).map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <img className="good_photo" src={info.img} alt="" />
                                        <p className="kind photo_description">{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Тасьма</h3>
                            <div className="goods_list">
                                {images.slice(21, 25).map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <img className="good_photo" src={info.img} alt="" />
                                        <p className="kind photo_description">{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Кріплення магніт</h3>
                            <div className="goods_list">
                                {images.slice(25, 30).map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <img className="good_photo" src={info.img} alt="" />
                                        <p className="kind photo_description">{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Кріплення гачки</h3>
                            <div className="goods_list">
                                {images.slice(30, 32).map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <img className="good_photo" src={info.img} alt="" />
                                        <p className="kind photo_description">{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Goods;