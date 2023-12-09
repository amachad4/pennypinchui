import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { RestLink } from 'apollo-link-rest';

const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/`;

const restLink = new RestLink({
  uri,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImJvYiIsIm5hbWVpZCI6ImU4MWJkYWE5LTUxZjMtNDk4ZC1iYWIzLTRiMTcyMTNkZWE3ZSIsImVtYWlsIjoiYm9iQHRlc3QuY29tIiwibmJmIjoxNzAyMTU4MTU3LCJleHAiOjE3MDI3NjI5NTcsImlhdCI6MTcwMjE1ODE1N30.zLgwoEfc30GLKnC4WB6W2uVZjjQcWGbA_f7o9LZybTKy0jUGwjwFEdPtK1CfqXe-YjU3gAe0xq13RT2O92KDUg`,
  },

  credentials: 'same-origin',
});

export const client = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: restLink,
  });
});
