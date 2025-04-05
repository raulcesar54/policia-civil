import React from "react"

interface KpisProps {
    name: string
    value: number
}
export const KpiItem = (props: KpisProps) => {
    return <div className="flex flex-col bg-white w-full p-4 gap-8">
        <h1 className="text-4 text-slate-600">{props.name}</h1>
        <p className="text-4xl font-bold">{props.value}</p>
    </div>
}