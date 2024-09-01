import { Link } from "react-router-dom";
import "./goods.css"
function Goods({ allgoods }) {
    if (!allgoods || Object.keys(allgoods).length === 0) {
        return <div>Loading...</div>; // Або будь-який інший індикатор завантаження
    }
    return (
        <>
            <section className="wallpapers">
                <div className="container">
                    <div className="goods_catalog">
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Штори</h3>
                            <div className="goods_list">

                                {allgoods['c'].map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <Link to={`/catalog/goodtypepage/${info.article}`}>
                                            <img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" />
                                        </Link>
                                        <p className="kind photo_description">{info.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Тюль</h3>
                            <div className="goods_list">
                            {allgoods['t'].map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <Link to={`/catalog/goodtypepage/${info.article}`}>
                                            <img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" />
                                        </Link>
                                        <p className="kind photo_description">{info.name}</p>
                                    </div>
                                ))}
                                {/* {images.slice(11, 21).map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <img className="good_photo" src={info.img} alt="" />
                                        <p className="kind photo_description">{info.text}</p>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Тасьма</h3>
                            <div className="goods_list">
                            {allgoods['b'].map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <Link to={`/catalog/goodtypepage/${info.article}`}>
                                            <img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" />
                                        </Link>
                                        <p className="kind photo_description">{info.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Кріплення магніт</h3>
                            <div className="goods_list">
                            {allgoods['mm'].map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <Link to={`/catalog/goodtypepage/${info.article}`}>
                                            <img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" />
                                        </Link>
                                        <p className="kind photo_description">{info.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wallpaper_section">
                            <h3 className="good_type kind">Кріплення гачки</h3>
                            <div className="goods_list">
                            {allgoods['mh'].map((info, index) => (
                                    <div key={index} className="goods_list_item">
                                        <Link to={`/catalog/goodtypepage/${info.article}`}>
                                            <img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" />
                                        </Link>
                                        <p className="kind photo_description">{info.name}</p>
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