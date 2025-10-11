export interface Brand {
    results: number
    metadata: Metadata
    data: Branddata[]
}

export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
    nextPage: number
}

export interface Branddata {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
}
