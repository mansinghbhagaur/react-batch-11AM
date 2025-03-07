const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { count: state.count + 1 };
    case "SUB_ITEM":
      return { count: state.count - 1 };
    case "RESET_ITEM":
      return { count: 0 };
    default:
      return state;
  }
};

export default reducer;
