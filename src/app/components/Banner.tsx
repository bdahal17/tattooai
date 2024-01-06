'use client'
import {useContext} from "react";
import {Context} from "@/app/components/context";

const Banner = () => {
    const {loginSuccess} = useContext(Context);

    return (
        <div className="flex-1 bg-transparent text-white text-lg flex justify-center items-center">
            {loginSuccess ? "" : <span>Easy steps! Prompt. search. and get inspired!</span>}
        </div>
    )
}

export default Banner;