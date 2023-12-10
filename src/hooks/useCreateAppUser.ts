import { client } from "@/constants/apollo-client";
import { gql } from "@apollo/client";

const createAppUserMutation = gql`
  mutation Register(
    $email: String!
    $password: String!
    $displayName: String!
    $userName: String!
  ) {
    user(
      input: {
        email: $email
        password: $password
        displayName: $displayName
        userName: $userName
      }
    ) @rest(type: "appUser", path: "account/register", method: "POST") {
      displayName
      token
      userName
      error
    }
  }
`;

const useCreateAppUser = async (token: string) => {
  return await client(token)
    .getClient()
    .mutate({ mutation: createAppUserMutation });
};

export default useCreateAppUser;
