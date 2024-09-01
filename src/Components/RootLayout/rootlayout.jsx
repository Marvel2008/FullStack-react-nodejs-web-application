import { NavLink } from "react-router-dom"
import DropMenu from "../DropMenu/dropmenu"
import "./rootlayout.css"
export default function RootLayout() {
    const shuttersItems = [
        { label: 'Блекаут', path: '/' },
        { label: 'Дімаут', path: '/' },
        { label: 'Каліфорнія', path: '/' },
        { label: 'Італія', path: '/' },
        { label: 'Мармур', path: '/' },
        { label: 'Граніт', path: '/' },
        { label: 'Ангора', path: '/' },
        { label: 'Дакота', path: '/' },
        { label: 'Бенгал', path: '/' },
        { label: 'Євро нобук', path: '/' },
        { label: 'Прованс', path: '/' },
    ];
    const tulleItems = [
        { label: 'Бамбук', path: '/' },
        { label: 'Льон', path: '/' },
        { label: 'Канвас', path: '/' },
        { label: 'Жакард', path: '/' },
        { label: 'Амбре', path: '/' },
        { label: 'Пабло', path: '/' },
        { label: 'Паскаль', path: '/' },
        { label: 'Мармарис', path: '/' },
        { label: 'Каліпсо', path: '/' },
        { label: 'Кембек', path: '/' },

    ]; const braidsItems = [
        { label: 'Променева', path: '/' },
        { label: 'Бантова', path: '/' },
        { label: 'Люверсна не фіксована', path: '/' },
        { label: 'Люверсна фіксована', path: '/' },
    ];
    return (
        <>
            <NavLink to="/">Головна</NavLink>
            <div className="navlink-container">
                <NavLink to="/">Штори <span className="symbol">&gt;</span></NavLink>
                <DropMenu items={shuttersItems}/>
            </div>
            <div className="navlink-container">
                <NavLink to="/">Тюль <span className="symbol">&gt;</span></NavLink>
                <DropMenu items={tulleItems}/>
            </div>
            <div className="navlink-container">
                <NavLink to="/">Тасьма <span className="symbol">&gt;</span></NavLink>
                <DropMenu items={braidsItems}/>
            </div>
            <NavLink to="/">Інше</NavLink>
            <NavLink to="/cart"><img src="https://assets-global.website-files.com/662f8e58f3c026e1bee4151e/662fe686b853bebbdff9507e_Vector.svg" /></NavLink>
        </>

    )
}