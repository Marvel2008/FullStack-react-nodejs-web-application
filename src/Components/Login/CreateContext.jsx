import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);//отримуємо поточне значення контексту

export const MyProvider = ({ children }) => {
    const [create, setCreate] = useState(false);

    return (
        <MyContext.Provider value={{ create, setCreate }}>
            {children}
        </MyContext.Provider>
    );
};
