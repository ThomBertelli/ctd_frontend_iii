import './style.scss'

export function Lesson15Component(props) {
    
    const {cep, logradouro, complemento,localidade, bairro, uf} = props.data
    

    return(

        
        <div className="decima-quinta-aula-item">
            <h1>{cep}</h1>
            <address>{logradouro}, {complemento}, {bairro}, {localidade} - {uf}</address>
            <button onClick={() => props.onDeleteLocation(props.data)}>Deletar</button>
        </div>
    )
    
}