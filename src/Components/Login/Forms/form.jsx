import { useReducer, useState } from "react";
import SectionWrapper from "../../Section_wrapper/wrapper"
import { useMyContext } from "../CreateContext";
import { postReducer, SIGNUP_STATE } from "../UseReducer/UseReducer"
import { useNavigate } from "react-router-dom"
function Form() {
    const { create, setCreate } = useMyContext();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(postReducer, SIGNUP_STATE)

    const handleChange = e => {
        dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (e.target.id === "registerForm") {
                response = await fetch('http://localhost:8080/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(state)//конвертує state у JSON-рядок
                })
            } else {
                response = await fetch('http://localhost:8080/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(state)
                })
            }
            if (!response.ok) {
                const errorData = await response.json();
                setErrors(errorData.errors || {});
            } else if (e.target.id === "loginForm") {
                navigate('/authorized');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className={` ${create ? "move-left" : "move-right"}`} id="loginForm" onSubmit={handleSubmit}>
                <h2 className="main_title">Увійти</h2>
                <label htmlFor="email">Пошта</label>
                <input type="text" placeholder="Email" id="email" onChange={handleChange} name="email" />
                <label htmlFor="password">Пароль</label>
                <input type="text" placeholder="Password" id="password" onChange={handleChange} name="password" />
                <button className="submit" type="submit">
                    Увійти
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#ffffff"
                            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </button>
                <p onClick={() => setCreate(true)} className="create">Створити акаунт</p>
            </form>

            <form className={` ${create ? "show-form" : "hidden-form"}`} id="registerForm" onSubmit={handleSubmit}>
                <h2 className="main_title">Зареєструватися</h2>
                <label htmlFor="reg_email">Пошта</label>
                <input type="text" placeholder="Email" id="reg_email" onChange={handleChange} name="email" />
                <label htmlFor="number">Номер телефону</label>
                <input type="tel" placeholder="Phone number" id="number" onChange={handleChange} name="phone_number" />
                <label htmlFor="reg_password">Пароль</label>
                <input type="text" placeholder="Password" id="reg_password" onChange={handleChange} name="password" />
                <button className="submit" type="submit">
                    Зареєструватися
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#ffffff"
                            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </button>
                <p onClick={() => setCreate(false)} href="auth" id="toggleForm" className="create">Назад</p>
            </form>
        </>
    )
}


export default SectionWrapper("main_section", "main_container", Form);
