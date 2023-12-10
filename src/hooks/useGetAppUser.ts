import { client } from "@/constants/apollo-client";
import { gql } from "@apollo/client";

const getAppUserQuery = gql`
  query User {
    data @rest(type: "appUser", path: "account", method: "GET") {
      displayName
      userName
    }
  }
`;

const useAppGetUser = async (token: string) => {
  return await client(token).getClient().query({ query: getAppUserQuery });
};

export default useAppGetUser;
