import { client } from "@/constants/apollo-client";
import { gql } from "@apollo/client";

const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    user(input: { email: $email, password: $password })
      @rest(type: "[appUser]", path: "account/login", method: "POST") {
      displayName
      token
      username
      error
    }
  }
`;

export interface AppUser {
  displayName: string;
  token: string;
  userName: string;
  error: string;
  id: string;
}

const useLoginUser = async (
  credentials: Record<"email" | "password", string> | undefined
) => {
  return await client()
    .getClient()
    .mutate<AppUser>({ mutation: loginMutation, variables: credentials });
};

export default useLoginUser;
