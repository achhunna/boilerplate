import axios from 'axios';

const updateStock = (stock) => {
  return {
    type: 'UPDATE_STOCK',
    payload: stock,
  };
}

const throwError = (err) => {
  return {
    type: 'THROW_ERROR',
    payload: err.Error,
  };
}

export const getData = (url) => (dispatch) => {
  axios.get(url)
    .then(data => {
      if (!data.data.Error) {
        const stock = {
          name: data.data.symbol,
          price: data.data.price,
        };
        dispatch(updateStock(stock));
      } else {
        dispatch(throwError(data.data));
      }
    })
    .catch(err => {
      dispatch(throwError(err));
      console.log(err);
    });
};
