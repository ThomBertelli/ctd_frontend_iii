import { useEffect } from 'react'
import { useState } from 'react'

import { Lesson15Component, MaskedInput } from '../../components/Lesson15Components'

import './style.scss'

export function Lesson15() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')
    const [inputError, setInputError] = useState(false)

    function searchCep(event) {

        event.preventDefault()

        if(cep.length === 8) {

            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
                response => {
                    response.json().then(
                        address => {

                            if(address.erro !== undefined ) {

                                setInputError(true)

                            } else {

                                // Deu Sucesso
                                setLocations([...locations, address])
                                setInputError(false)
                                setCep('')

                            }
                        }
                    )
                }
            )

        }else{
            setInputError(true)
        }

    }



    function deleteLocation(currentLocation) {

        let newLocations = locations.filter((location) => location.cep !== currentLocation.cep)   
        setLocations(newLocations)
   
    }  

    return(

        <div className="decima-quarta-aula-component">

            <form className={inputError? 'input-error': null} onSubmit={event => searchCep(event)}>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label for="cep" >Cep</label>
                    <MaskedInput                        
                        className="masked-input"
                        type="text"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                    <small>Por favor, insira um CEP válido.</small>
                </div>

                <button type='submit' aria-label="submit-button">Cadastrar</button>

            </form>

            <section className="locations">

                { 
                    
                    locations.map(
                        (location, index) => (
                            <Lesson15Component
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                            />
                        )
                    )
                    
                }

            </section>

        </div>

    )

}