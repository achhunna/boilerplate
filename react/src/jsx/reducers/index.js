export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STOCK":
      return { ...state, stock: action.payload };
    default:
      return state;
  }
}
