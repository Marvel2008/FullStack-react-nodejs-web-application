import SectionWrapper from "../Section_wrapper/wrapper"
import "./delpay.css"
function Delpay() {
    return (
        <>
            <p className="delpay_title">Доставка і оплата</p>
            <div className="how_get_good">
                <p className="delpay_title_group">Спосіб отримання товару:</p>
                <br />
                <p className="how_get_good_descr descr">Самовівіз — із магазин у м. Полтава, там ви можете особисто забрати готовий товар.</p>
            </div>
            <div className="payment">
                <p className="delpay_title_group">Способи оплати товару:</p>
                <ul className="payment_list descr">
                    <li className="payment_list_elem">
                        <p>100% передплата — оплата за перерахування на рахунок ФОП*.</p>
                    </li>
                    <li className="payment_list_elem">
                        <p>50% / 30% передплата — оплата половини вартості за перерахуванням на рахунок ФОП*.</p>
                    </li>
                </ul>
                <ul className="bank_info descr">
                        <li className="bank_info_elem"><p>Установа банку - ПриватБанк</p></li>
                        <li className="bank_info_elem"><p>МФО банку - ********</p></li>
                        <li className="bank_info_elem"><p>Отримувач платежу - ФОП ****** ****** ********</p></li>
                        <li className="bank_info_elem"><p>IBAN - UA ***********************</p></li>
                        <li className="bank_info_elem"><p>Валюта рахунку - UAH</p></li>
                        <li className="bank_info_elem"><p>РНОКПП отримувача - ********</p></li>
                        <li className="bank_info_elem"><p>Призначення платежу - ЗА ТОВАР</p></li>
                </ul>      
            </div>
        </>
    )
}

export default SectionWrapper("delpay_section", "delpay_container", Delpay)