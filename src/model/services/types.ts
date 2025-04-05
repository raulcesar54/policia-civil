
enum Status {
    DESAPARECIDO = 'DESAPARECIDO',
    LOCALIZADO = 'LOCALIZADO',
}
enum Gender {
    MASCULINO = 'MASCULINO',
    FEMININO = 'FEMININO',
}
type UltimaOcorrencia = {
    dtDesaparecimento: string;
    dataLocalizacao: string | null;
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
    listaCartaz: unknown | null;
    ocoId: number;
};
type OcorrenciaEntrevDesapDTO = {
    informacao: string;
    vestimentasDesaparecido: string;
};
type Pageable = {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    unpaged: boolean;
    paged: boolean;
};
type Sort = {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
};
export type PageDesaparecidos<T> = {
    totalPages: number;
    totalElements: number;
    pageable: Pageable;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: T;
    number: number;
    sort: Sort;
    empty: boolean;
};

export type Analitycs = {
    quantPessoasDesaparecidas: number,
    quantPessoasEncontradas: number
}
export type PessoaDesaparecidaOcorrenciass = {
    "ocoId": number
    "informacao": string
    "data": string
    "id": number
    "anexos": string[]
}
export type PessoaDesaparecida = {
    id: number;
    nome: string;
    idade: number;
    sexo: Gender
    vivo: boolean;
    urlFoto: string;
    ultimaOcorrencia: UltimaOcorrencia;
};
export type Filters = {
    name?: string,
    startAge?: number
    endAge?: number
    gender?: Gender | string
    page?: number
    perPage?: number
    status?: Status | string
}

export interface NovaOcorrenciaPayload {
    ocoId: number
    informacao: string
    data: string
    anexos: string[]
    descricao?: string
}
