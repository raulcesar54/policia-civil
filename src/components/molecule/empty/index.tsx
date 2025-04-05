import React from "react"
import { TriangleAlert } from 'lucide-react'
export const EmptyMessage = () => {
    return <div className="w-full flex justify-center items-center flex-col gap-4 bg-white p-8 rounded-lg">
        <TriangleAlert className="text-yellow-300" size={34} />
        <h1 className="text-gray-400">sem registros encontrados</h1>
    </div>
}