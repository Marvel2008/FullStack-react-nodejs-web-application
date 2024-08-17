import "./feedback.css"
import SectionWrapper from "../Section_wrapper/wrapper"
function Feedback(){
    return(
        <>
            <h2 className="title feedback_title">Відгуки</h2>
            <div className="feedback_list feedback_first_list">
                    <div className="feedback_first_list_item">
                        <p className="client">Софія Гулевская</p>
                        <p className="clients_feedback">Вибрала тут чудові штори в кімнату. Ціна приємно здивувала якість
                            гарна. Мені дуже сподобався цей магазин. Рекомендую всім хто хоче придбати гарні штори за
                            хорошою ціною.</p>
                    </div>
                    <div className="feedback_first_list_item">
                        <p className="client">Анастасия Юренко</p>
                        <p className="clients_feedback">Купувала штори.
                            Широкий вибір товару, допомогли вибрати потрібний варіант. Гарне обслуговування і ціни.
                            Штори гарної якості ,рекомендую.</p>
                    </div>
                    <div className="feedback_first_list_item">
                        <p className="client">Анна Севрюкова</p>
                        <p className="clients_feedback">Обслуговування на найвищому рівні! Сучасний вибір якісних тканин.
                            Штори вийшли шикарні!</p>
                    </div>
                </div>
                <div className="feedback_list feedback_second_list">
                    <div className="feedback_second_list_item">
                        <p className="client">Софія Дмитрієвич</p>
                        <p className="clients_feedback">Дуже вдячна Вам за вашу роботу! В мене проблемне еркерне вікно з
                            різною висотою. В багатьох магазинах казали що не реально зробити те що я хотіла. Але тут
                            змогли не лише підібрати і ідеально встановити карнизи, а ще й підібрати і пошити тюль та
                            штори за моїм бажанням. Вийшло просто чудово! Всім, хто й досі думає, що їхні задуми майже
                            неможливо втілити, нехай переконається в зворотному, звернувшись до цього магазину!!</p>
                    </div>
                    <div className="feedback_second_list_item">
                        <p className="client">Світлана Окань</p>
                        <p className="clients_feedback">Чудовий магазин! Прекрасний персонал та величезний асортимент.
                            Допомогли з вибором, виготовили все в терміни, штори дуже красиві, довжина підібрана
                            ідеально. Без поспіху все показали, порадили,розповіли як правильно вішати. З Вами дуже
                            приємно мати справу! Дякую за вашу роботу!</p>
                    </div>
                </div>
                <a className="more_feedbacks" href="#">Більше відгуків</a>
        </>
    )
}

export default SectionWrapper("feedback_section","feedback_container", Feedback);