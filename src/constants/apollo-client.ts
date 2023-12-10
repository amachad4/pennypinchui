import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { RestLink } from "apollo-link-rest";

const uri = `${process.env.API_URL}/api/`;

const createRestLink = (token?: string) => {
  return new RestLink({
    uri,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json;charset=utf-8",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: "same-origin",
  });
};

export const client = (token?: string) =>
  registerApolloClient(() => {
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: createRestLink(token),
    });
  });
