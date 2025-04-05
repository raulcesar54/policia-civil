import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReducersKeys } from "../../utils/enums";
import { Analitycs, Filters, NovaOcorrenciaPayload, PageDesaparecidos, PessoaDesaparecida, PessoaDesaparecidaOcorrenciass } from './types';

export const api = createApi({
    reducerPath: ReducersKeys.MISSING_PEOPLE,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://abitus-api.geia.vip/v1/' }),
    endpoints: (builder) => ({
        getMissingPeople: builder.query<PageDesaparecidos<PessoaDesaparecida[]>, Filters>({
            query: (params) => {
                let queryParams = new URLSearchParams()
                queryParams.append('pagina', String(params.page) || '1')
                queryParams.append('porPagina', String(params.perPage) || "10")
                params.name && queryParams.append('nome', params.name)
                params.startAge && queryParams.append('faixaIdadeInicial', String(params.startAge))
                params.endAge && queryParams.append('faixaIdadeFinal', String(params.endAge))
                params.gender && queryParams.append('sexo', String(params.gender))
                params.status && queryParams.append('status', String(params.status))
                return `pessoas/aberto/filtro?${queryParams.toString()}`
            },
        }),
        getDetailPeople: builder.query<PessoaDesaparecida, { id: string }>({
            query: (params) => `pessoas/${params.id}`,
        }),
        getOccorrencyHistory: builder.query<PessoaDesaparecidaOcorrenciass[], { occorrenciaId?: number }>({
            query: (params) => `ocorrencias/informacoes-desaparecido?ocorrenciaId=${params.occorrenciaId}`,
        }),
        getAnalitycs: builder.query<Analitycs, null>({
            query: () => 'pessoas/aberto/estatistico'
        }),
        postOcorrencia: builder.mutation<any, NovaOcorrenciaPayload>({
            query: (body) => {
                let queryParams = new URLSearchParams()
                const formData = new FormData()

                queryParams.append('data', body.data)
                queryParams.append('descricao', body.descricao || 'anexos')
                queryParams.append('informacao', body.informacao)
                queryParams.append('ocoId', String(body.ocoId))
                body.anexos.forEach((file,) => {
                    formData.append('files', file)
                })
                return {
                    url: `ocorrencias/informacoes-desaparecido?${queryParams.toString()}`,
                    method: 'POST',
                    body: formData,
                }
            },
        }),
    })
})
export const { useGetMissingPeopleQuery, useGetAnalitycsQuery, useGetDetailPeopleQuery, usePostOcorrenciaMutation, useLazyGetOccorrencyHistoryQuery } = api 