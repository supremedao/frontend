const BASE_API = "https://api.coingecko.com/api/v3";

const requestsCache = {
  simplePrices: null,
  marketChart: null,
  historicalData: {},
};

const ongoingRequests = {};

async function fetchSimpletPrices(ids, vs_currencies = "ETH,USD") {
  const response = await fetch(
    `${BASE_API}/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
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
      ongoingRequests[ids] = fetchSimpletPrices(ids, vs_currencies);
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
  const response = await fetch(
    `${BASE_API}/coins/${id}/market_chart?days=${days}&vs_currency=usd&interval=daily`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
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
    delete ongoingRequests[id]; // Clean up ongoing requests
  }
}
