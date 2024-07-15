const BASE_API = "https://pro-api.coingecko.com/api/v3";
const API_KEY = "CG-4VHTNCowR1kcRpcqHHLt45kF";

const requestsCache = {
  simplePrices: null,
  marketChart: null,
  historicalData: {},
};

const ongoingRequests = {};

async function fetchSimplePrices(ids, vs_currencies = "ETH,USD") {
  try {
    const response = await fetch(
      `${BASE_API}/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-cg-pro-api-key": API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getSimplePrices(
  ids = "wrapped-steth,balancer,ethereum",
  vs_currencies = "ETH,USD",
) {
  try {
    if (requestsCache.simplePrices) {
      return requestsCache.simplePrices;
    }

    if (!ongoingRequests[ids]) {
      ongoingRequests[ids] = fetchSimplePrices(ids, vs_currencies);
    }

    const data = await ongoingRequests[ids];
    requestsCache.simplePrices = data;
    return data;
  } catch (error) {
    console.log("API Gecko error", error);
  } finally {
    delete ongoingRequests[ids]; // Clean up ongoing requests
  }
}

async function fetchHistoricalData(id, days) {
  try {
    const response = await fetch(
      `${BASE_API}/coins/${id}/market_chart?days=${days}&vs_currency=usd&interval=daily`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-cg-pro-api-key": API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getHistoricalChartDataById(id = "balancer", days = 30) {
  try {
    if (requestsCache.historicalData[id + days]) {
      return requestsCache.historicalData[id + days];
    }

    if (!ongoingRequests[id + days]) {
      ongoingRequests[id + days] = fetchHistoricalData(id, days);
    }

    const data = await ongoingRequests[id + days];
    requestsCache.historicalData[id + days] = data;
    return data;
  } catch (error) {
    console.error("Error fetching historical data:", error);
    throw error;
  } finally {
    delete ongoingRequests[id + days]; // Clean up ongoing requests
  }
}
