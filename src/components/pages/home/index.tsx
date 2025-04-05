import React from "react"
import { Title } from "../../ui/title"
import { ListMissing } from "../../layout/listMissing"
import { Kpis } from "../../layout/kpis"

export const Home = () => {
    return (
        <div className="w-full">
            <Title title="Lista de desaparecidos" subtitle="lista de desaparecidos em MT" />
            <Kpis/>
            <ListMissing />
        </div>
    )
}