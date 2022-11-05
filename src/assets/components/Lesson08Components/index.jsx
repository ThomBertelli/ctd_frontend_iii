import './style.scss'


export function Lesson08Card(props){


    return(

        <ul className="card">
            <li>Nome: {props.dadosCadastro.nome}</li>
            <li>Idade: {props.dadosCadastro.idade}</li>
            <li>Pokemon Predileto: {props.dadosCadastro.pokemon}</li>
        </ul>


    )

}