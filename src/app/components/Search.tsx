'use client'
import {IoIosLock, IoIosUnlock} from "react-icons/io";
import React, {useEffect, useRef, useState} from "react";

const Search = () => {
    const elementRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState<number | undefined>(44);
    const [login, setLogin] = useState(true);

    useEffect(() => {
        console.log(textareaHeight)
    }, [textareaHeight])

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value: string = (event.target as HTMLTextAreaElement).value;
        console.log("text area height.. .", elementRef?.current?.scrollHeight);
        if(textareaHeight != null && textareaHeight < 204) {
            setTextareaHeight(elementRef?.current?.scrollHeight);
        }
    }

    const handleKeydown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(elementRef.current && event.key === "Enter") {
            if(textareaHeight != null && textareaHeight < 204) {
                setTextareaHeight(textareaHeight+16);
            }
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className=" m-5 bg-blue-950 flex flex-row h-auto w-1/2 rounded-2xl">
                <textarea rows={1} style={{height: `${textareaHeight}px`}} ref={elementRef} onKeyDown={handleKeydown} onChange={handleTextareaChange} className={`overflow-${(textareaHeight != null) && textareaHeight > 200 ? "y-scroll" : "hidden"} custom-scrollbar p-2 rounded-2xl bg-blue-950 text-gray-300 focus:outline-none text-lg w-full resize-none`}/>
                <div className="w-1/4 bg-transparent text-sm flex justify-center items-center text-white">
                    <div className="w-1/5 cursor-pointer">
                        {login ? <IoIosUnlock className={"login_button"} onClick={() => setLogin(!login)}/> : <IoIosLock className={"login_button"} onClick={() => setLogin(!login)}/>}
                    </div>
                    <div>Get Started</div>
                </div>
            </div>
        </div>
    )
}
export default Search;