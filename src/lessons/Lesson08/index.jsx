import { useState } from 'react'
import { Lesson08Card } from '../../assets/components/Lesson08Components'
import './style.scss'

export function Lesson08() {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [idade, setIdade] = useState('')
    const [pokemonPredileto, setPokemonPredileto] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    const [listaCadastros, setListaCadastros] = useState([
    ])




    function cadastrar(event) {

        event.preventDefault()

        const novoCadastro = {

            nome: nomeCompleto,
            idade: idade,
            pokemon: pokemonPredileto

        }

        if (nomeCompleto === '' || idade === '' || pokemonPredileto === '') {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setListaCadastros([...listaCadastros, novoCadastro])

            setNomeCompleto('')
            setIdade('')
            setPokemonPredileto('')

        }
    }

    return (
        <div className="lesson08 }">

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrar(event)}>
                <label htmlFor="fullName">Nome Completo</label>
                <input type="text" id="fullName" value={nomeCompleto} onChange={event => setNomeCompleto(event.target.value)} />

                <label htmlFor="age"> Idade</label>
                <input type="text" id="age" value={idade} onChange={event => setIdade(event.target.value)} />

                <label htmlFor="age"> Pokemon Favorito</label>
                <input type="text" id="age" value={pokemonPredileto} onChange={event => setPokemonPredileto(event.target.value)} />

                <button type="submit"> Registrar</button>
            </form>

            <section>

                {
                    listaCadastros.map(
                        cadastros => {
                            return (
                                <Lesson08Card dadosCadastro={cadastros} />
                            )
                        }
                    )
                }


            </section>



        </div>



    )
}