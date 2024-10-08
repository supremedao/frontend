import { RestLink } from "apollo-link-rest";
import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { authMiddleware } from "./middlewares/authMiddleware";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { ADDRESSES } from "@/contracts/addresses";

const API_KEY = process.env.NEXT_PUBLIC_GRAPH_API_KEY;

export function createClient() {
  // @Deprecated link to old Graph to fetch TVL pool data
  // const link = new RestLink({
  //   uri: "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2/graphql",
  // });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    // link: from([authMiddleware, link]),
    uri: `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/${ADDRESSES.SUBGRAPH_ID}`,
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
