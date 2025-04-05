import { ArrowLeft } from "lucide-react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../button"

export const BackHome = () => {
    const navigate = useNavigate()

    return <div className="max-w-[120px] my-4">
        <Button disabled={false} type="button" onClick={() => navigate('/')}>
            <div className="flex gap-3">
                <ArrowLeft size={24} />
                Voltar
            </div>
        </Button>
    </div>
}