import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiQuery = createApi({
  reducerPath: 'character',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.breakingbadapi.com/api'
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: (page) => `/characters?limit=10&offset=${page}`,
    }),
    getCharacterDetail: builder.query({
      query: (id) => `/characters/${ id }`,
    }),
    getCharacterSearched: builder.query({
      query: (name) => `/characters/name=${ name }`,
    }),
  }),
});

export const { useGetAllCharactersQuery } = ApiQuery;
export const { useGetCharacterDetailQuery } = ApiQuery;
export const { useGetCharacterSearchedQuery } = ApiQuery;