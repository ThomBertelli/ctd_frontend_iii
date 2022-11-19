import { useEffect } from 'react'
import { useState } from 'react'

import { Lesson15Component } from '../../assets/components/Lesson15Components'

import './style.scss'

export function Lesson15() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')

    function searchCep(cepRecieved) {

        setCep(cepRecieved)

        if(cepRecieved.length === 8) {

            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                response => {
                    response.json().then(
                        address => {

                            if(address.erro !== undefined) {

                                // Deu erro

                            } else {

                                // Deu Sucesso
                                setLocations([...locations, address])

                            }
                        }
                    )
                }
            )

        }

    }



    function deleteLocation(currentLocation) {

        console.log(currentLocation)

    }

    return(

        <div className="decima-quarta-aula-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>

                <button>Cadastrar</button>

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