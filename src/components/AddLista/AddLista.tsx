import { useState, KeyboardEvent } from "react";
import * as C from "./style";

type Props = {
    onEnter: (taskname: string) => void
}

export const AddLista = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState("");

    const AdicionarListagem = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inputText !== ""){
            onEnter(inputText);
            setInputText("");
        }
    }

    return(
        <C.AddListaStyle>
            <button>➕</button>
            <input
                type="text"
                name="adicionar-lista"
                id="adicionar-lista"
                placeholder="O que você vai fazer?"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={AdicionarListagem}
            />
        </C.AddListaStyle>
    )
}