'use client'
import {IoPersonSharp} from "react-icons/io5";
import {useContext, useEffect} from "react";
import {Context, User} from "@/app/components/context";

const Dashboard = () => {
    const {name, age, username, login, loginSuccess} = useContext<User>(Context);
    useEffect(() => {
        console.log(loginSuccess)
    }, [loginSuccess])
    return (
        <div style={{height: loginSuccess ? "1000px" : "64px"}} className="flex-2 bg-blue-950 rounded-t-2xl text-lg text-gray-400 p-4 flex items-center justify-start">
            <IoPersonSharp/>
        </div>
    )
}
export default Dashboard;