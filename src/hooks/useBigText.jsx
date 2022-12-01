import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const BigTextContext = createContext()

// Criação do Provedor para o Contexto
export function AcessibilityProvider(props) {

    const acesssibilityLocalStorage = localStorage.getItem('bigText')

    // State que irá controlar qual Tema a aplicação está usando
    const [bigText, setBigText] = useState(acesssibilityLocalStorage === null ? '' : acesssibilityLocalStorage)

    // Função responsável por Trocar o Tema
    function toBigText(infoRecieved) {


            setBigText(infoRecieved)
            localStorage.setItem('bigText', infoRecieved)

        

    }

    return (

        // Contrução dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <BigTextContext.Provider value={{ bigText, toBigText }}>
            {props.children}
        </BigTextContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useBigText() {

    const context = useContext(BigTextContext)

    return context

}