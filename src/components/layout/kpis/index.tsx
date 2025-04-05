import React from "react"
import { useGetAnalitycsQuery } from "../../../model/services"
import { KpiItem } from "../../ui/kpi"

export const Kpis = () => {
    const {data} = useGetAnalitycsQuery(null)
    return (
        <div className="flex flex-col md:flex-row md:max-w-lg gap-4 mt-4">
            <KpiItem name="Pessoas Desaparecidas" value={data?.quantPessoasDesaparecidas || 0} />
            <KpiItem name="Pessoas Encontradas" value={data?.quantPessoasEncontradas || 0} />
        </div>
    )
}