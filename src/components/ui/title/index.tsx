import React from "react"

interface TitleProps {
    title: string
    subtitle: string
}
export const Title = (props: TitleProps) => {
    return <div className="flex flex-col gap-1">
        <h1 className="text-black font-semibold text-xl">{props.title}</h1>
        <small className="text-gray-400  text-sm">{props.subtitle}</small>
    </div>
}