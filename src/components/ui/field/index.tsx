import React from "react"
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

interface FilterProps {
    placeholder?: string
    type?: string
    icon?: IconName
    value?: string
    onTextChange?: (text: string) => void
    isTextArea?: boolean
    register?: any
    error?: string
    label?: string
}
export const Field = (props: FilterProps) => {
    return <div className="flex flex-col w-full">
        {props.label && <label className="text-sm text-gray-400">{props.label}</label>}
        <div className={`relative w-wull h-fit ring-1 ring-gray-300 ${props.error && '!ring-red-500'}`}>
            {props.icon && <DynamicIcon className="absolute top-4 left-2" name={props.icon} />}
            {props.isTextArea ? <textarea rows={4} value={props.value} className={`p-4 ${props.icon && 'pl-10'} w-full`} placeholder={props.placeholder} onChange={(event) => props.onTextChange && props.onTextChange(event.target.value)} {...props.register} />
                : <input value={props.value} type={props.type} className={`p-4 ${props.icon && 'pl-10'} w-full`} placeholder={props.placeholder} onChange={(event) => props.onTextChange && props.onTextChange(event.target.value)} {...props.register} />}
        </div>
        {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
    </div>
}