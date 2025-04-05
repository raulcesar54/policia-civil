import { format } from "date-fns"
import React from "react"
import { PessoaDesaparecidaOcorrenciass } from "../../../model/services/types"
import { handleImageError } from "../../../utils/image"
import { Title } from "../../ui/title"
export const History = (props: { data?: PessoaDesaparecidaOcorrenciass[] }) => {
    return (
        <>
            <Title title="Histórcio" subtitle="histórico de ultimas ocorrências registradas" />
            <div className="relative border-l border-gray-300 ml-0 mt-4 pb-[80px]">
                {props.data?.map((ocorrencia, index) => (
                    <div key={ocorrencia.id} className="mb-10 ml-4">
                        <span className="absolute flex items-center justify-center w-2 h-2 bg-gray-500 rounded-full -left-1 mt-1 ring-white">
                        </span>
                        <div className="bg-white p-4 rounded-lg ring-1 ring-gray-300">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {format(ocorrencia.data, 'dd/MM/yyyy') || "Data não informada"}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                                {ocorrencia.informacao}
                            </p>
                            {ocorrencia.anexos.length > 0 && (
                                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {ocorrencia.anexos.map((url, i) => (
                                        <img
                                            key={url}
                                            src={url || "placeholder.png"}
                                            onError={handleImageError}
                                            alt={`Anexo ${i + 1}`}
                                            className="w-full h-32 object-cover border rounded-lg"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}