import { setContext } from "@apollo/client/link/context";

export const authMiddleware = setContext(async (_, { headers }) => {
  try {
    // const accessToken = await getToken();

    return {
      headers: {
        ...headers,
        // authorization: `Bearer ${accessToken}` || null,
      },
    };
  } catch (err) {
    return {
      headers,
    };
  }
});
