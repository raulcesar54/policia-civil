import React from "react"
interface FilterProps {
    options: { value: string, label: string }[]
    onTextChange: (text: string) => void
    selected: string
    label: string
}
export const Radio = (props: FilterProps) => {
    return <div className="flex flex-col">
        <small>{props.label}</small>
        <div className="flex gap-2 w-full">
            {props.options.map((option) => {
                return <label>
                    <input
                        type="radio"
                        name="dia"
                        value={option.value}
                        onChange={() => props.onTextChange(option.value)}
                        className="sr-only"
                    />
                    <span className={`bg-white w-full inline-block px-4 py-2 rounded-full text-sm cursor-pointer transition-all  text-gray-700 hover:bg-gray-100 ${props.selected === option.value && '!bg-yellow-300'}`}>{option.label}</span>
                </label >
            })}
        </div>
    </div>
}