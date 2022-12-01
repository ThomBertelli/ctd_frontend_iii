import { Checkbox } from '../../components/Checkbox'
import { useState } from 'react'
import { useBigText } from '../../hooks/useBigText'
import { useTheme} from '../../hooks/useTheme'
import { useEffect } from 'react'
import { useHighContrast } from '../../hooks/useHighContrast'

export function Configurations() {

    // Utilização do Hook useTheme
    const { theme, changeTheme } = useTheme()
    const {toBigText} = useBigText() 
    const {toHighContrast} = useHighContrast()

    const [checkedBigText, setCheckedBigText] = useState(false)
    const [checkedHighContrast, setCheckedHighContrast] = useState(false)

    const handleCheckboxChangeBigText = () =>{

        setCheckedBigText(!checkedBigText)        

    }

    const handleCheckboxChangeHighContrast = () =>{

        setCheckedHighContrast(!checkedHighContrast)        

    }

    

    useEffect(()=>{
        if(checkedBigText){
            toBigText('big')
        }else{
            toBigText('')
        }
        

    },[checkedBigText])


    useEffect(()=>{
        if(checkedHighContrast){
            toHighContrast('high-contrast')
        }else{
            toHighContrast('')
        }
        

    },[checkedHighContrast])

   
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
                            value={checkedBigText}
                            onChange={handleCheckboxChangeBigText}
                        
                        />
                    </div>

                    <div>
                        <Checkbox
                            label="Alto Contraste"
                            value={checkedHighContrast}
                            onChange={handleCheckboxChangeHighContrast}
                        
                        />
                    </div>


                </section>

            </form>

        </div>

    )

}