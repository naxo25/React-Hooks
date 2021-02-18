export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "Get_Number":
      return {
        ...state,
        number: payload
      };
    default:
      return state;
  }
};
