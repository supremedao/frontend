import { RestLink } from "apollo-link-rest";
import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { authMiddleware } from "./middlewares/authMiddleware";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export function createClient() {
  const link = new RestLink({
    uri: "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2/graphql",
  });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authMiddleware, link]),
  });

  return apolloClient;
}

const client = createClient();

if (process.env.NODE_ENV === "development") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default client;
