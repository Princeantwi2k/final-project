import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewHeader = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "375a4c202bmshcfca7e539f18254p1da492jsn3c54507f8b98",
};
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi ",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
