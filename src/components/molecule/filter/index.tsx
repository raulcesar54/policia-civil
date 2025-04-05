import React, { useMemo, useState } from "react"
import { Field } from "../../ui/field"
import { Button } from "../../ui/button"
import { Radio } from "../../ui/radio"

export interface ValueProps {
    text: string
    initialAge: string
    finalAge: string
    status: string
    gender: string
}
interface FilterProps {
    handleSubmit: (value: ValueProps) => void
    handleClear: () => void
}

export const Filter = (props: FilterProps) => {
    const [text, setText] = useState("")
    const [initialAge, setAgeInitial] = useState("")
    const [finalAge, setAgeFinal] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState('')
    const isDisabled = useMemo(() => {
        return !text && !initialAge && !finalAge && !status && !gender
    }, [text, initialAge, finalAge, status, gender])
    return (
        <form className="flex flex-col gap-4 mb-4 w-full" onSubmit={(event) => {
            event.preventDefault()
            props.handleSubmit({ text, initialAge, finalAge, status, gender })
        }}>
            <div className="flex w-full flex-col gap-4 md:flex-row">
                <Field value={text} icon='search' placeholder="Buscar nome" onTextChange={setText} />
                <div className="flex flex-row gap-4 w-full">
                    <Field value={initialAge} icon="arrow-up-01" type="number" placeholder="Idade Inicial" onTextChange={setAgeInitial} />
                    <Field value={finalAge} icon="arrow-up-10" type="number" placeholder="Idade Final" onTextChange={setAgeFinal} />
                </div>
                <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-4">
                    <Radio label="Sexo" options={[{ label: 'MASCULINO', value: 'MASCULINO' }, { label: 'FEMININO', value: 'FEMININO' }, { label: 'TODOS', value: '' }]} selected={gender} onTextChange={setGender} />
                    <Radio label="Situação" options={[{ label: 'DESAPARECIDO', value: 'DESAPARECIDO' }, { label: 'LOCALIZADO', value: 'LOCALIZADO' }, { label: 'TODOS', value: '' }]} selected={status} onTextChange={setStatus} />
                </div>
                <div className="flex flex-col md:flex-row gap-2 w-full md:w-1/2">
                    <Button type="submit" disabled={isDisabled}>Buscar</Button>
                    <button className="p-2" type="button" disabled={false} onClick={() => {
                        setText("")
                        setAgeFinal("")
                        setAgeInitial("")
                        setStatus("")
                        setGender("")
                        props.handleClear()
                    }}>Limpar Dados</button>

                </div>
            </div>
        </form >
    )
}