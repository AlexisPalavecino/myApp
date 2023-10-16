import { apikey, authUrl } from "../firebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: authUrl}),
    endpoints: builder => ({
        singUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:singUp?key=${apikey}`,
                method: 'POST',
                body: auth,
            }),
        }),
        login: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:singInWithPassword?key=${apikey}`,
                method: 'POST',
                body: auth,
            }),
        }),
        
    }),

})

export const { useLoginMutation, useSingUpMutation} = authApi