import { useAccount } from "wagmi";
const moment = require("moment");

function useUserDeposit() {
  const account = useAccount();

  // MOCK
  const oneYearAgo = moment().subtract(1, "year");
  const timestampOneYearAgo = oneYearAgo.unix();

  const userDeposits = account?.address
    ? [
        {
          id: "0xe26e39f60f0a95",
          owner: account?.address,
          timestamp: timestampOneYearAgo,
        },
      ]
    : [];

  console.log(
    `------- userDeposits ----- MOCK
     userDeposits - 0: ${JSON.stringify(userDeposits?.[0])}
    `,
  );
  // MOCK

  return userDeposits;
}

export { useUserDeposit };
