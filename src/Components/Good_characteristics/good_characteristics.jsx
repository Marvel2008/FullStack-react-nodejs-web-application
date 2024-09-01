import "./good_characteristics.css"
import SectionWrapper from "../Section_wrapper/wrapper"
function Characteristics({good}) {
    if(!good){
        return <div>Loading</div>
    }
    return (
        <>
            <div className="characteristics_content">
                <p className="charac_title">Характеристики</p>
                <ul className="charac_list">
                    <li className="charac_list_elem">
                        <p className="charac_list_elem_title">Склад</p>
                        <p className="charac_list_elem_description">{good.material}</p>

                    </li>
                    <hr />
                    <li className="charac_list_elem">
                        <p className="charac_list_elem_title">Малюнок</p>
                        <p className="charac_list_elem_description">Однотоний</p>

                    </li>
                    <hr />
                    <li className="charac_list_elem">
                        <p className="charac_list_elem_title">Виробник</p>
                        <p className="charac_list_elem_description">{good.producer}</p>

                    </li>
                    <hr />
                    <li className="charac_list_elem">
                        <p className="charac_list_elem_title">Щільність тканини</p>
                        <p className="charac_list_elem_description">Товста</p>

                    </li>
                    <hr />
                    <li className="charac_list_elem">
                        <p className="charac_list_elem_title">Захист від сонця</p>
                        <p className="charac_list_elem_description">{good.protection}</p>

                    </li>
                    <hr />
                    <li className="charac_list_elem">
                        <p className="charac_list_elem_title">Догляд</p>
                        <p className="charac_list_elem_description">{good.care}</p>

                    </li>
                    <hr />
                </ul>

            </div>

        </>
    )
}

export default SectionWrapper("characteristics_section", "characteristics_container", Characteristics);