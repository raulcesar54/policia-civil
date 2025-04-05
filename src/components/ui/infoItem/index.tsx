import React from "react"

interface InfoItemProps {
    label: string
    value: string | number
    size?: 'lg' | 'md' | 'sm'
}
export const InfoItem = (props: InfoItemProps) => {
    return (
        <div className="flex flex-col">
            <small className="opacity-50">{props.label}</small>
            <h1 className={`text-2xl font-bold ${props.size === 'md' && '!text-sm'}`}>{props.value}</h1>
        </div>
    )
}