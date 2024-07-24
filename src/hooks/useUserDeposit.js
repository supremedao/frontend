
import { useAccount } from "wagmi";

function useUserDeposit() {
  const account = useAccount();

  // MOCK
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
  const timestampOneYearAgo = Math.floor(oneYearAgo.getTime() / 1000);

   const userDeposits = account?.address ? [
    {
      id:'0xe26e39f60f0a95',
      owner: account?.address,
      timestamp: timestampOneYearAgo
    }
  ] : []

  console.log(
    `------- userDeposits ----- MOCK
     userDeposits - 0: ${JSON.stringify(userDeposits?.[0])}
    `,
  );
  // MOCK

  return userDeposits;
}

export { useUserDeposit };
