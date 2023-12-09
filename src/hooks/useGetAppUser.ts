import { client } from "@/constants/apollo-client";
import { gql } from "@apollo/client";

const getAppUserQuery = gql`
    query User {
        data @rest(type: "AppUser", path: "account", method: "GET") {
            displayName
            userName
        }
    }
`;

const useAppGetUser = async () => {
    return await client.getClient().query({ query: getAppUserQuery});
}

export default useAppGetUser;