import React from "react"

export const Button = ({ children, type, disabled, onClick }: { children: React.ReactNode, type: "submit" | "reset" | "button", disabled: boolean, onClick?: () => void }) => {
    return <button type={type} onClick={onClick} disabled={disabled} className="p-4 w-full bg-yellow-300 disabled:bg-gray-400 disabled:opacity-30">{children}</button>
}