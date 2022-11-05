import { useState } from 'react'
import { Lesson08Card } from '../../assets/components/Lesson08Components'
import './style.scss'

export function Lesson08() {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [idade, setIdade] = useState('')
    const [pokemonPredileto, setPokemonPredileto] = useState('')

    const [listaCadastros, setListaCadastros] = useState([
            // {
            //     nome: 'Carlos',
            //     idade: '55',
            //     pokemon:'Pikachu'


            // }
        
    ])




    function cadastrar(event) {

        event.preventDefault()

        const novoCadastro = {

            nome: nomeCompleto,
            idade:idade,
            pokemon:pokemonPredileto

        }

        setListaCadastros([...listaCadastros, novoCadastro])

    }


    return (
        <div className="lesson08">

            <form onSubmit={event=> cadastrar(event)}>
                <label htmlFor="fullName">Nome Completo</label>
                <input type="text" id="fullName" onChange={event => setNomeCompleto(event.target.value)} />

                <label htmlFor="age"> Idade</label>
                <input type="text" id="age" onChange={event => setIdade(event.target.value)}  />

                <label htmlFor="age"> Pokemon Favorito</label>
                <input type="text" id="age" onChange={event => setPokemonPredileto(event.target.value)}  />

                <button type="submit"> Registrar</button>
            </form>

            <section>

                {
                  listaCadastros.map(
                    cadastros => {
                        return(
                            <Lesson08Card dadosCadastro = {cadastros} />
                        )
                    }
                  )  
                }


            </section>



        </div>
   
        

    )
}