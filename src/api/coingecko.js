const BASE_API = "https://api.coingecko.com/api/v3";

export async function getSimplePrice(
  ids = "wrapped-steth",
  vs_currencies = "ETH,USD",
) {
  try {
    const res = await fetch(
      `${BASE_API}/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`,
    );
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("API Gecko error", error);
  }
}
