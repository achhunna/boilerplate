export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, data: action.payload };
    case "UPDATE_STOCK":
      return { ...state, stock: action.payload };
    default:
      return state;
  }
}
