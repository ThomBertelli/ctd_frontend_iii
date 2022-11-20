import './style.scss'
import InputMask from 'react-input-mask'

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

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'')


export function MaskedInput({value, onChange}){

    function handleChange(event) {
        onChange({
            ...event, target:{
                ...event.target, value: onlyNumbers(event.target.value),
            }

        })

    }


    return (
    <InputMask 
        mask="99999-999"
        value={value}
        onChange={handleChange}/>
    )


}