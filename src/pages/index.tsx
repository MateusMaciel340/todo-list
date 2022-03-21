import { useState } from "react";
import { AddLista } from "../components/AddLista/AddLista";
import { Lista } from "../components/Lista/Lista";
import { Item } from "../@types/Item";

export function Home(){

    const [list, setList] = useState<Item[]>([
        {id: 1, nome: "Estudar back-end", status: false},
        {id: 2, nome: "Estudar front-end", status: true}
    ]);

    const NovaTarefa = (taskname: string) => {
        let novaLista = [...list];
        novaLista.push({
            id: list.length + 1,
            nome: taskname,
            status: false
        });
        setList(novaLista);
    }

    const AparecerListagem = (id: number, status: boolean) => {
        let novaLista = [...list];
        for(let contador in novaLista){
            if(novaLista[contador].id === id){
                novaLista[contador].status = status;
            }
        }
        setList(novaLista);
    }

    return(
        <>
            <AddLista
                onEnter={NovaTarefa}
            />
            {list.map((item, index) => (
                <Lista
                    key={index}
                    item={item}
                    onChange={AparecerListagem}
                />
            ))}
        </>
    )
}