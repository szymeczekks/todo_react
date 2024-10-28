import { useState } from "react";
import Button from "../Button/Button";

export default function Form ({ onFormSubmit }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit(inputValue);
            }} 
            className="flex gap-2">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border border-cyan-950 rounded-lg p-1 text-cyan-950 font-semibold flex-1" type="text" name="" id="" />
            <Button>Dodaj</Button>
        </form>
    )
}