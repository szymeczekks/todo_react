import { useState } from "react";
import Button from "../Button/Button";

export default function TodoItem({ name, done, onDeleteButtonClick, onDoneButtonClick, onEditDoneClick }) {
    const [ newName, setNewName ] = useState(name);
    const [ isFormVisible, setIsFormVisible ] = useState(false);

    function handleEnter(e) {
        if (e.key === "Enter") {
            onEditDoneClick(newName);
            setIsFormVisible(false);
        }
    }

    return (
    <li className="flex gap-2 items-center justify-between border-t border-cyan-950 py-2">
        {isFormVisible ? <input className="border border-cyan-950 rounded-md p-1 h-full" type="text" name="edit" id="edit" value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={(e) => handleEnter(e)}/> :
        <span onClick={() => setIsFormVisible(true)} className={done ? "line-through" : ""}>{name}</span>}
        <div className="flex gap-2">
            { !done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
            <Button onClick={onDeleteButtonClick}>Usuń</Button>
        </div>
      </li>
    )
}