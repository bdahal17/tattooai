'use client'
import React, {useContext, useEffect, useRef, useState} from "react";
import {Context, User} from "@/app/components/context";

const Search = () => {
    const {name, age, username, login} = useContext<User>(Context);
    const elementRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState<number | undefined>(44);

    useEffect(() => {
    }, [])

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value: string = (event.target as HTMLTextAreaElement).value;
    }

    return (
        <div className="flex justify-center items-center">
            <div className=" m-5 bg-blue-950 flex flex-row h-auto w-1/2 rounded-2xl">
                <textarea ref={elementRef} placeholder={"start exploring.."} style={{height: `${textareaHeight}px`}} onChange={handleTextareaChange} className={`overflow-${(textareaHeight != null) && textareaHeight > 200 ? "y-scroll" : "hidden"} custom-scrollbar p-2 rounded-2xl bg-blue-950 text-gray-300 focus:outline-none text-lg w-full resize-none`}/>
                <div className="w-1/4 bg-transparent text-sm flex justify-center items-center text-white">
                    <div className={"h-full flex justify-center items-center rounded-2xl bg-red-500 w-full cursor-pointer"}>
                        <span onClick={() => login(true)}>Explore</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;