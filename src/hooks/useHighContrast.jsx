import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const HighContrastContext = createContext()

// Criação do Provedor para o Contexto
export function HighContrastProvider(props) {

    const highContrastLocalStorage = localStorage.getItem('highContrast')

    // State que irá controlar qual Tema a aplicação está usando
    const [highContrast, setHighContrast] = useState(highContrastLocalStorage === null ? '' : highContrastLocalStorage)

    // Função responsável por Trocar o Tema
    function toHighContrast(infoRecieved) {


        setHighContrast(infoRecieved)
        localStorage.setItem('highContrast', infoRecieved)

        

    }

    return (

        // Contrução dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <HighContrastContext.Provider value={{ highContrast, toHighContrast }}>
            {props.children}
        </HighContrastContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useHighContrast() {

    const context = useContext(HighContrastContext)

    return context

}