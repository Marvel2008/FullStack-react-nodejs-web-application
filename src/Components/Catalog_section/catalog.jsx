import SectionWrapper from "../Section_wrapper/wrapper"
import img from "../../assets/fitst_section.png"
import { NavLink } from "react-router-dom"
import "./catalog.css"
function Catalog() {
    return (
        <>
            <div className="catalog_content">
                <h1 className="catalog_title">Пошив під замовлення штор та тюль</h1>
                <p className="catalog_info">Наші майстри з шиття створять для вас неповторні штори, тюлі та тасьми, які
                    додають затишку і стилю вашому приміщенню.</p>
              <NavLink to="/catalog"><button className="button catalog_button">Каталог</button></NavLink> 
            </div>
            <img className="catalog_img" src={img}/>
        </>
        )
}

export default SectionWrapper('catalog','catalog_container',Catalog);

