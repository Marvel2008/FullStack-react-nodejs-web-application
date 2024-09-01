import SectionWrapper from "../Section_wrapper/wrapper"
import "./cartcontent.css"
function CartContent({ cartgoods }) {
    if (cartgoods.length===0) {
        return <div>Loading...</div>
    }
    return (
        <>
        {console.log("Cart goods in cart",cartgoods)}
            <div className="">
                <p className="header cartcontent_header">Ваш кошик</p>
                <div className="user_cart_items">
                    <p>Товар</p>
                    <p>Кількість</p>
                    <p>Ціна</p>
                    <hr />
                    <div className="selected_item">
                        {cartgoods.map((elem, index) => (
                            <div key={index} className="selected_item_container">
                                <div className="selected_item_type">
                                    <img className="img" src={`http://localhost:8080/assets/${elem.item.img}`} />
                                    <p>Артикул товара:{elem.item.article}</p>
                                    <p>Колір:{elem.item.color}</p>
                                </div>
                                <div className="selected_item_count">{elem.qty}</div>
                                <div className="selected_item_price">{elem.price}</div>
                                <div className="selected_item_remove">
                                    <button >Remove</button>
                                </div>
                            </div>
                        ))
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionWrapper("cart_section","cart_container",CartContent)