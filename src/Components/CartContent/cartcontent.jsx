function CartContent() {
    return (
        <>
            <div className="">
                <p className="header cartcontent_header">Ваш кошик</p>
                <div className="user_cart_items">
                    <p>Товар</p>
                    <p>Кількість</p>
                    <p>Ціна</p>
                    <hr />
                    <div className="selected_item">
                        <div className="selected_item_type">
                            <img src="" alt="" />
                            <p>Тканина для штор: Блекаут Твін двосторонній</p>
                            <p>Колір: Чорний</p>
                        </div>
                        <div className="selected_item_count"></div>
                        <div className="selected_item_price"></div>
                        <div className="selected_item_remove"></div>

                    </div>
                </div>
            </div>

        </>
    )
}