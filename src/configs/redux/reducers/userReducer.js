const initialState = {
    user: {
        name: '',
        admin: '',
        role: '',
        password : ''
    },
    isLoading: false
}

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      return {
        token: null,
        name: null,
        admin: null,
        id: null,
      };
    default:
      return state;
  }
};
// export const signOut = (state = initialState, action) => {
//   switch (action.type) {
//     case "SIGN_OUT":
//       localStorage.removeItem("token");
//       return {
//         token: null,
//         name: null,
//         email: null,
//         _id: null,
//       };
//     default:
//       return state;
//   }
// };
