import "./goodbytype.css"
import { Link } from "react-router-dom"
export default function GoodByType({ goodsbytype }) {
    if (!goodsbytype || goodsbytype.length === 0) {
        return <div>Loading</div>
    }
    return (
        <>
            <section className="wallpapers">
                <div className="container">
                    <div className="goods_catalog">
                        <h3 className="good_selected_type kind"></h3>
                        <div className="goods_list">
                            {goodsbytype.map((info, index) => (
                                <div key={index} className="goods_list_item">
                                    <Link to={`/catalog/goodtypepage/goodprebuypage/${info.article}`}>
                                        <img className="good_photo" src={`http://localhost:8080/assets/${info.imagePATH}`} alt="" />
                                    </Link>
                                    <p className="photo_description">{info.name}</p>
                                    <p className={`${info.amount === 0 ? "empty" : "not_empty"}`}>Нема в наявності</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
