export interface Catogries {
    results: number
    metadata: Metadata
    data: Categorydata[]
}

export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
}

export interface Categorydata{
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
}
