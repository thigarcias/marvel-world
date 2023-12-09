export class MarvelConsult {

}

export class DadosMarvel {
    id?: number
    name?: string
    description?: string
    modified?: string
    thumbnail?: {
        path: string,
        extension: string
    }
    comics?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    }
    events?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    }
    stories?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                type: string
            }
        ],
        returned: number
    }
    series?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    }
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
    thumbnail?: {
        path: string,
        extension: string
    }
    comics?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    }
    events?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    }
    stories?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                type: string
            }
        ],
        returned: number
    }
    series?: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    }
}