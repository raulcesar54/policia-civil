import React from "react"
import { PessoaDesaparecida } from "../../../model/services/types"
import { handleImageError } from "../../../utils/image"


export const Card = (props: PessoaDesaparecida & { handlePress: () => void }) => {
    
    return <div className="w-full rounded-xl overflow-hidden bg-white md:grid-col-4" onClick={props.handlePress}>
        <img
            src={props.urlFoto || 'placeholder.png'}
            alt={props.nome}
            className="w-full h-64 object-cover object-top"
            onError={handleImageError}
        />
        <div className="p-4">
            <div className="flex flex-col items-start gap-2 justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 truncate text-nowrap text-ellipsis">{props.nome}</h2>
                <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-gray-400">Ocorrência <strong>{props.ultimaOcorrencia?.ocoId}</strong></p>
                    <span className={`text-sm font-medium 
                ${props.ultimaOcorrencia.dataLocalizacao ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}
                 px-3 py-1 rounded-full`}>
                        {props.ultimaOcorrencia.dataLocalizacao ? 'Localizado' : 'Desaparecido'}
                    </span>
                </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <p>
                    <span className="font-semibold">Idade:</span> {props.idade}
                </p>
                <p>
                    <span className="font-semibold">Sexo:</span> {props.sexo.toLocaleLowerCase()}
                </p>
            </div>
        </div>
    </div>

}