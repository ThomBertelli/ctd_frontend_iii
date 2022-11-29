import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { describe, expect } from "vitest"

import { Lesson15 } from './lessons/Lesson15'

describe('Lesson15 component', () => {

    it('Deveria ser renderizado em tela', () => {

        const { getByText } = render(<Lesson15 />)

        expect(getByText('Cadastrar endereços')).toBeInTheDocument()

    })

    it('Fluxo cadastro', () => {

        const { getByLabelText, getByText } = render(<Lesson15 />)
        const input = getByLabelText('Cep')
        const submitButton = getByLabelText('submit-button')

        fireEvent.change(input, { target: { value: '01315000' } })
        fireEvent.click(submitButton)

        setTimeout(() => {

            expect(getByText('Cep: 01315-000')).toBeInTheDocument()

        }, 2000)

    })

})