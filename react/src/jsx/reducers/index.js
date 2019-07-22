export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STOCK':
      return { ...state, stock: action.payload, err: null };
    case 'THROW_ERROR':
      return { ...state, err: action.payload };
    default:
      return state;
  }
}
