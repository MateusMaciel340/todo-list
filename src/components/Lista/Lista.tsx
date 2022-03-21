import * as C from "./style";
import { Item } from "../../@types/Item";

type Props = {
    item: Item,
    onChange: (id: number, status: boolean) => void
}

export const Lista = ({ item, onChange }: Props) => {
    return(
        <>
            <C.ListaStyle status={item.status}>
                <input 
                    type="checkbox"
                    checked={item.status}
                    onChange={e => onChange(item.id, e.target.checked)}
                />
                <label>{item.nome}</label>
            </C.ListaStyle>
        </>
    )
}