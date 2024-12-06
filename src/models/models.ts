export type FilterValuesType = 'all' | 'favorites' 

export interface IPost {
    id: string 
    title: string
    body: string
    date: string
    avatar?: string | undefined
    like: boolean
    filter: string
}


