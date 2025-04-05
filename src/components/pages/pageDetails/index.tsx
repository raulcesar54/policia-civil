import { format } from "date-fns"
import React, { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useGetDetailPeopleQuery, useLazyGetOccorrencyHistoryQuery } from "../../../model/services"
import { handleImageError } from "../../../utils/image"
import { Alert } from "../../ui/alert"
import { BackHome } from "../../ui/backHome"
import { InfoItem } from "../../ui/infoItem"
import { Title } from "../../ui/title"
import { AddInformationForm } from "../../layout/addInformationForm"
import { History } from "../../layout/history"

export const PageDetails = () => {
    const { id } = useParams()
    const { data } = useGetDetailPeopleQuery({ id: id || "" })
    const [getHistory, history] = useLazyGetOccorrencyHistoryQuery()
    useEffect(() => {
        if (data?.ultimaOcorrencia.ocoId) {
            getHistory({ occorrenciaId: data.ultimaOcorrencia.ocoId })
        }
    }, [data])
    const dataLocalizacao = useMemo(() => {
        return data?.ultimaOcorrencia.dataLocalizacao ? format(new Date(data?.ultimaOcorrencia?.dataLocalizacao), 'dd/MM/yyyy') : null
    }, [data])
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full ">
                <BackHome />
                <Title title="Detalhes do desaparecido" subtitle="lista de desaparecidos em MT" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 my-4">
                <img className="rounded-lg w-full md:max-w-lg max-h-[404px] object-cover object-top" width={344} onError={handleImageError} src={data?.urlFoto || 'placeholder.png'} alt={data?.nome || 'Nome pessoa'} />
                <div className="flex flex-col md:flex-row-reverse justify-between w-full gap-4">
                    <div className="flex flex-col gap-4 md:flex-col w-full">
                        <div className=" w-full  md:ml-auto flex ">
                            {dataLocalizacao && <Alert information={`Localizado(a) em ${dataLocalizacao}`} icon="check" />}
                            {!dataLocalizacao && <Alert variant="Error" information={`Ainda não localizado`} icon="alert-triangle" />}
                        </div>
                        <div className="bg-white p-4 rounded-lg w-full h-fit">
                            <InfoItem label="nome completo" value={data?.nome || ''} />
                            <div className="flex justify-between items-center mt-4">
                                <InfoItem size="md" label="idade" value={data?.idade || 'Não informado'} />
                                <InfoItem size="md" label="sexo" value={data?.sexo || 'Não informado'} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg gap-2 flex flex-col w-full">
                        <div className="flex justify-between ">
                            <InfoItem label="desaparecido(a) em " value={data?.ultimaOcorrencia?.dtDesaparecimento ? format(new Date(data?.ultimaOcorrencia?.dtDesaparecimento), 'dd/MM/yyyy') : 'não informado'} />
                            <InfoItem label="Ocorrencia" value={data?.ultimaOcorrencia.ocoId || 'não informado'} />
                        </div>
                        <InfoItem size="md" label="localizado(a) em " value={dataLocalizacao || 'ainda não encontrado'} />
                        <InfoItem size="md" label="local desaparecimento" value={data?.ultimaOcorrencia?.localDesaparecimentoConcat || ''} />
                        <InfoItem size="md" label="vestimentas desaparecimetno" value={data?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido || ''} />
                        <InfoItem size="md" label="informações extra" value={data?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao || 'sem informações extras'} />
                    </div>
                </div>
            </div>
            {data?.ultimaOcorrencia.ocoId && history.data && history.data.length > 1 && <History data={history.data} />}
            {!dataLocalizacao && data?.ultimaOcorrencia.ocoId && <AddInformationForm updateInformation={() => getHistory({ occorrenciaId: data.ultimaOcorrencia.ocoId })} ocoId={data?.ultimaOcorrencia.ocoId} id={id} />}
        </div>
    )
}