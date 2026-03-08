export interface Agent {

    id: string
    name: string
    owner: string

    metadata?: {
        type?: string
        description?: string
    }

    reputation?: number
}
