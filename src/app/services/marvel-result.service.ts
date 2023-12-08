export class MarvelConsult {

}

export class DadosMarvel {
    id?: number
    name?: string
    description?: string
    modified?: string
}

export class MarvelPagination {
    paginitation?: {
        first: number,
        last: number,
        previous: number,
        next: number,
        page: number,
        limit: number
        isFirst: boolean,
        isLast: boolean,
        totalElements: number,
    }
    data: DadosMarvel[];
}

export class DadosMarvelHerois {
    id?: number
    name?: string
    description?: string
    modified?: string
}