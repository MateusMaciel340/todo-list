import styled from "styled-components";

type ListaStyleProps = {
    status: boolean,
}

export const ListaStyle = styled.div(({ status }: ListaStyleProps) => (`
    margin: 20px 0px 20px 0px;
    border: 2px solid #FFFFFF;
    border-radius: 5px; padding: 5px;
    display: flex; align-items: center;
    input, label{
        font-size: 20px;
    }
    input{
        min-width: 20px;
        min-height: 20px;
        margin-right: 5px; margin-right: 10px;
    }
    label{
        color: #CCC; 
        text-decoration: ${status ?  'line-through' : 'initial'};
    }
`
));