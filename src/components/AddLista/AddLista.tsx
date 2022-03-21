import * as C from "./style";

export const AddLista = () => {
    return(
        <C.AddListaStyle>
            <button>➕</button>
            <input
                type="text"
                name="adicionar-lista"
                id="adicionar-lista"
                placeholder="O que você vai fazer?"
            />
        </C.AddListaStyle>
    )
}