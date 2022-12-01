import { Checkbox } from '../../components/Checkbox'
import { useState } from 'react'
import { useBigText } from '../../hooks/useBigText'
import { useTheme} from '../../hooks/useTheme'
import { useEffect } from 'react'

export function Configurations() {

    // Utilização do Hook useTheme
    const { theme, changeTheme } = useTheme()
    const {bigText, toBigText} = useBigText() 

    const [checked, setChecked] = useState(false)

    const handleCheckboxChange = () =>{

        setChecked(!checked)        

    }

    useEffect(()=>{
        if(checked){
            toBigText('big')
        }else{
            toBigText('')
        }
        

    },[checked])

   
    return (

        <div>

            <h1>Configurações</h1>

            <form>

                <section>

                    <h1>Tema</h1>

                    <div>
                        <label htmlFor="light">Claro</label>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                    </div>

                    <div>
                        <label htmlFor="dark">Escuro</label>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                    </div>

                </section>

                <section>
                    <h1>Acessibilidade</h1>

                    <div>
                        <Checkbox
                            label="Letras Grandes"
                            value={checked}
                            onChange={handleCheckboxChange}
                        
                        />
                    </div>


                </section>

            </form>

        </div>

    )

}