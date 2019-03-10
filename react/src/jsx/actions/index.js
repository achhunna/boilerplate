import axios from 'axios';

const updateStock = (stock) => {
  return {
    type: "UPDATE_STOCK",
    payload: stock
  };
};

function getPromise(url) {
  return axios.get(url);
}

export const getData = (url, ticker) => (dispatch) => {
  const promise = getPromise(url);
  const promise2 = getPromise(url);
  Promise.all([promise, promise2])
    .then(data => {
      const parsedData = Array.isArray(data) ? data[0] : data;
      const quote = parsedData.data[ticker.toUpperCase()].quote;
      const stock = {
        ticker,
        name: quote.companyName,
        price: quote.iexRealtimePrice ? quote.iexRealtimePrice : quote.close,
        marketCap: quote.marketCap
      };
      dispatch(updateStock(stock));
    })
    .catch(err => console.log(err));
};
