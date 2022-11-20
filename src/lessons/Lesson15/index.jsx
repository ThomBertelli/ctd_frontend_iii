import { useEffect } from 'react'
import { useState } from 'react'

import { Lesson15Component, MaskedInput } from '../../assets/components/Lesson15Components'

import './style.scss'

export function Lesson15() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')

    function searchCep(event) {

        event.preventDefault()

        if(cep.length === 8) {

            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
                response => {
                    response.json().then(
                        address => {

                            if(address.erro !== undefined) {

                                // Deu erro

                            } else {

                                // Deu Sucesso
                                setLocations([...locations, address])
                                setCep('')

                            }
                        }
                    )
                }
            )

        }

    }



    function deleteLocation(currentLocation) {

        let newLocations = locations.filter((i) => i.cep !== currentLocation.cep)   
        setLocations(newLocations)
   
    }  

    return(

        <div className="decima-quarta-aula-component">

            <form onSubmit={event => searchCep(event)}>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <MaskedInput
                        type="text"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                </div>

                <button type='submit'>Cadastrar</button>

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