import "./info.css"
import SectionWrapper from "../Section_wrapper/wrapper"
function Info() {
    return (
        <>
            <div className="info_content">
                <p className="info_title">Інформація про замовлення</p>
                <p className="info_description">Після замовлення з вами зв'яжуться працівники магазину, щоб уточнити деталі, такі як час виготовлення, вибір кріплення та тасьми. Ви можете переглянути їх тут.</p>
            </div>
        </>
    )
}

export default SectionWrapper("info_section", "info_container", Info);