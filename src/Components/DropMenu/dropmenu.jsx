import { NavLink } from "react-router-dom"
import "./dropmenu.css"
export default function DropMenu({ items }) {
    return (
        <>
            <div className="dropdown-menu">
                {items.map((item, index) => (
                    <NavLink className="list_item" key={index} to={item.path}>
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </>
    )
}