export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
    case "ADD_CUSTOMER":
    case "UPDATE_CUSTOMER":
    case "DELETE_CUSTOMER":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
    case "ADD_CUSTOMER_FAILURE":
    case "UPDATE_CUSTOMER_FAILURE":
    case "DELETE_CUSTOMER_FAILURE":
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
    case "ADD_CUSTOMER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        customers: [...state.customers, action.payload.customer],
      };
    case "UPDATE_CUSTOMER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        customers: state.customers.map((customer) => {
          if (customer._id === action.payload.customer._id) {
            return action.payload.customer;
          }
          return customer;
        }),
      };
    case "DELETE_CUSTOMER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        customers: state.customers.filter(
          (customer) => customer._id !== action.payload.customerId
        ),
      };
   
    default:
      return;
  }
};
