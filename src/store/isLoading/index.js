const isLoadingReducer = (state = { isLoading: false }, action) => {
  if (action.hasOwnProperty("isLoading")) {
    return {
      isLoading: action.isLoading,
    };
  }
  return {
    isLoading: false,
  };
};

export default isLoadingReducer;
