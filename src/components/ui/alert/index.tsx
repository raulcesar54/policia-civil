import { DynamicIcon, IconName } from "lucide-react/dynamic"
import React from "react"
interface alertProps {
    information: string
    icon?: IconName
    variant?: 'Success' | 'Error'
}
export const Alert = (props: alertProps) => {
    return <div className={`w-full flex items-center gap-4 p-4 bg-green-200 text-sm rounded-lg text-center text-green-900 font-semibold ${props.variant === 'Error' ? '!bg-red-200 !text-red-900' : ''}`}>
        {props.icon && <DynamicIcon size={16} name={props.icon} />}
        {props.information}
    </div>
}