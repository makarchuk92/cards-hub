import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/models'



export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://66f3c66477b5e8897096c67b.mockapi.io/'}),
    tagTypes: ['CARDS'],
    endpoints: (build) => ({
        getTodos: build.query<IPost[], number>({
            query: (limit: number = 10) => ({
                url: '/posts',
                _params: limit
            }),
            providesTags: result => ['CARDS']  
        }),
        addTodo: build.mutation<IPost, IPost>({
            query: (action) => ({
                url: '/posts',
                method: 'POST',
                body: {title: action.title, id: Date.now(), like: action.like } 
            }),
            invalidatesTags: ['CARDS']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['CARDS']
        }),
        toggleLike: build.mutation<IPost, {id: string, like: boolean}>({
            query: ({id, like}) => ({
                url: `/posts/${id}`,
                method: 'PUT',
                body: {like}
            }),
            invalidatesTags: ['CARDS']
        })
        
        })
})

export const {
    useGetTodosQuery, 
    useAddTodoMutation, 
    useDeletePostMutation, 
    useToggleLikeMutation
} = cardApi