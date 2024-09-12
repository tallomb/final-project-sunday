export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.access_token,
        user: action.payload.user,
        customers: action.payload.customers || [],
        tasks: action.payload.tasks || [],
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        error: null,
        token: null,
        user: null,
        customers: [],
        tasks: [],
      };
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.access_token,
        user: action.payload.user,
        customers: [],
      };
    default:
      return;
  }
};
