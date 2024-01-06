'use client'
import React, {useEffect, useState} from "react";

export const Context = React.createContext<User>(null as unknown as User);

export interface User {
    name: string,
    age: number,
    username: string,
    login: (flag: boolean) => void,
    loginSuccess: boolean
}

export default function ContextTheme({ children, }: {children: React.ReactNode }) {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        console.log("login -> ", login);
    }, [login])

    const data: User = {
        name: "john",
        age: 20,
        username: "john20",
        login: (flag: boolean) => loginToApp(flag),
        loginSuccess: login
    };

    const loginToApp = (flag: boolean) => {
        setLogin(flag);
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}